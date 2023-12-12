import React, { useContext } from 'react'
import { StudentActivityData } from '@features/table-project-activities-manager'
import { createContext, ReactNode, useCallback, useState } from 'react'

type SemesterProjectActivityStoreData = {
    data: StudentActivityData[]
    editedData: Record<number, StudentActivityData>
}

type ProjectItemStoreData = {
    prevSemester: SemesterProjectActivityStoreData
    currentSemester: SemesterProjectActivityStoreData
}

const INITIAL_DATA_SEMESTER_PROJECT_ACTIVITY: SemesterProjectActivityStoreData = {
    data: [],
    editedData: {},
}

const INITIAL_DATA_PROJECT_ITEM: ProjectItemStoreData = {
    prevSemester: INITIAL_DATA_SEMESTER_PROJECT_ACTIVITY,
    currentSemester: INITIAL_DATA_SEMESTER_PROJECT_ACTIVITY,
}

export type ProjectItemState = {
    state: ProjectItemStoreData
    changeRow: (data: StudentActivityData) => void
}

export const useProjectItemState = (): ProjectItemState => {
    const [state, setState] = useState<ProjectItemStoreData>(INITIAL_DATA_PROJECT_ITEM)

    const changeRow = (data: StudentActivityData) => {
        if (data.isPrevSemester) {
            return setState({
                ...state,
                prevSemester: {
                    ...state.prevSemester,
                    editedData: {
                        ...state.prevSemester.editedData,
                        [data.studentId]: data,
                    },
                },
            })
        }

        console.log('prev state', state.currentSemester.editedData)

        console.log('set new state', {
            ...state.currentSemester.editedData,
            [data.studentId]: data,
        })

        return setState({
            ...state,
            currentSemester: {
                ...state.currentSemester,
                editedData: {
                    ...state.currentSemester.editedData,
                    [data.studentId]: data,
                },
            },
        })
    }

    return {
        state,
        changeRow,
    }
}

export const ProjectItemStateContext = createContext<ProjectItemState | null>(null)

export const ProjectItemStateProvider = ({ children, state }: { children: ReactNode; state: ProjectItemState }) => (
    <ProjectItemStateContext.Provider value={state}>{children}</ProjectItemStateContext.Provider>
)

export const useProjectItemStateContext = (): ProjectItemState => {
    const state = useContext(ProjectItemStateContext)

    if (!state) {
        throw new Error('ProjectItemStateContext not found')
    }

    return state
}
