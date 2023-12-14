import React, { useContext } from 'react'
import { StudentActivityData } from '@features/table-project-activities-manager'
import { createContext, ReactNode, useState } from 'react'
import { createDefaultStore } from '@shared/effector/create-default-store'
import {
    getCurrentSemesterProjectActivities,
    getPrevSemesterProjectActivities,
    saveProjectActivities,
} from '@api/project-activities-manager'
import { useStore } from 'effector-react'

const useCreateLocalStoreCurrentSemester = () => {
    const [store] = useState(() =>
        createDefaultStore({
            api: {
                get: getCurrentSemesterProjectActivities,
                post: saveProjectActivities,
            },
        }),
    )

    return store
}

const useCreateLocalStorePrevSemester = () => {
    const [store] = useState(() =>
        createDefaultStore({
            api: {
                get: getPrevSemesterProjectActivities,
                post: saveProjectActivities,
            },
        }),
    )

    return store
}

type SemesterProjectActivityStoreData = {
    // Все данные (ряды) по текущей таблице
    data: StudentActivityData[] | null

    // Отредактированные ряды таблицы, ассоциированные по id студента
    editedData: Record<number, StudentActivityData>
}

const INITIAL_DATA_SEMESTER_PROJECT_ACTIVITY: SemesterProjectActivityStoreData = {
    data: null,
    editedData: {},
}

export const useProjectItemState = () => {
    // Сторы используются для общения с апи и состояния загрузки, динамичное состояние таблицы хранится в стейте
    const currentSemesterStore = useCreateLocalStoreCurrentSemester()
    const prevSemesterStore = useCreateLocalStorePrevSemester()

    const [currentSemesterState, setCurrentSemesterState] = useState<SemesterProjectActivityStoreData>(
        INITIAL_DATA_SEMESTER_PROJECT_ACTIVITY,
    )
    const [prevSemesterState, setPrevSemesterState] = useState<SemesterProjectActivityStoreData>(
        INITIAL_DATA_SEMESTER_PROJECT_ACTIVITY,
    )

    const changeRow = (data: StudentActivityData) => {
        if (data.isPrevSemester) {
            return setPrevSemesterState({
                ...prevSemesterState,
                editedData: {
                    ...prevSemesterState.editedData,
                    [data.studentId]: { ...data },
                },
            })
        }

        return setCurrentSemesterState({
            ...currentSemesterState,
            editedData: {
                ...currentSemesterState.editedData,
                [data.studentId]: { ...data },
            },
        })
    }

    const updateData = (isPrevSemester: boolean, data: StudentActivityData[]) => {
        if (isPrevSemester) {
            return setPrevSemesterState({
                data: [...data],
                editedData: {},
            })
        }

        return setCurrentSemesterState({
            data: [...data],
            editedData: {},
        })
    }

    const currentSemesterSaving = useStore(currentSemesterStore.effects.postFx.pending)
    const prevSemesterSaving = useStore(prevSemesterStore.effects.postFx.pending)

    return {
        updateData,
        currentSemesterState,
        prevSemesterState,
        changeRow,
        currentSemesterStore,
        prevSemesterStore,
        currentSemesterSaving,
        prevSemesterSaving,
    }
}

type UseProjectItemStateReturn = ReturnType<typeof useProjectItemState>

export const ProjectItemStateContext = createContext<UseProjectItemStateReturn | null>(null)

export const ProjectItemStateProvider = ({
    children,
    state,
}: {
    children: ReactNode
    state: UseProjectItemStateReturn
}) => <ProjectItemStateContext.Provider value={state}>{children}</ProjectItemStateContext.Provider>

export const useProjectItemStateContext = (): UseProjectItemStateReturn => {
    const state = useContext(ProjectItemStateContext)

    if (!state) {
        throw new Error('ProjectItemStateContext not found')
    }

    return state
}
