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
    data: StudentActivityData[] | null
    editedData: Record<number, StudentActivityData>
}

const INITIAL_DATA_SEMESTER_PROJECT_ACTIVITY: SemesterProjectActivityStoreData = {
    data: null,
    editedData: {},
}

export const useProjectItemState = () => {
    const currentSemesterStore = useCreateLocalStoreCurrentSemester()
    const prevSemesterStore = useCreateLocalStorePrevSemester()

    const currentSemesterSaving = useStore(currentSemesterStore.effects.postFx.pending)
    const prevSemesterSaving = useStore(prevSemesterStore.effects.postFx.pending)

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
