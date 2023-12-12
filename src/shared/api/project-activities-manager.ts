import { ProjectActivityManagerProject, StudentActivityData } from '@features/table-project-activities-manager'
import {
    MOCK_PROJ_ACTIVITES_MANAGER_PROJECTS,
    MOCK_PROJ_ACTIVITIES_MANAGER_CURRENT_SEMESTER,
    MOCK_PROJ_ACTIVITIES_MANAGER_PREV_SEMESTER,
} from '@api/__mock__/project-activities-manager'

type ProjActivitiesManagerProjectsResponse = {
    year: string
    semester: number
    role: string
    pointsCountingRulesUrl: string
    scheduleUrl: string
    projects: ProjectActivityManagerProject[]
}

type ProjActivitiesManagerActivitiesResponse = {
    activities: StudentActivityData[]
}

export const getProjects = async (): Promise<ProjActivitiesManagerProjectsResponse> => {
    // Todo: Интерграция с апи

    await new Promise((r) => setTimeout(r, 1000))

    return {
        projects: MOCK_PROJ_ACTIVITES_MANAGER_PROJECTS,
        role: 'Руководитель проекта',
        year: '2023-2024',
        pointsCountingRulesUrl: 'https://google.com',
        scheduleUrl: 'https://google.com',
        semester: 1,
    }
}

export const getCurrentSemesterProjectActivities = async (): Promise<ProjActivitiesManagerActivitiesResponse> => {
    // Todo: Интерграция с апи

    await new Promise((r) => setTimeout(r, 1000))

    return {
        activities: MOCK_PROJ_ACTIVITIES_MANAGER_CURRENT_SEMESTER.slice(0, -1 * (Math.floor(Math.random() * 3) + 1)),
    }
}

export const getPrevSemesterProjectActivities = async (): Promise<ProjActivitiesManagerActivitiesResponse> => {
    // Todo: Интерграция с апи

    await new Promise((r) => setTimeout(r, 1000))

    return { activities: MOCK_PROJ_ACTIVITIES_MANAGER_PREV_SEMESTER }
}

export const saveProjectActivities = async ({
    editedData,
    initialData,
}: {
    initialData: StudentActivityData[]
    editedData: Record<number, StudentActivityData>
}): Promise<ProjActivitiesManagerActivitiesResponse> => {
    // Todo: Интеграция с апи

    await new Promise((r) => setTimeout(r, 1000))

    return {
        // Предполагается, что апи сама применит отредактированные данные из editedData к базе данных
        // и вернёт новый массив строк таблицы
        activities: initialData.map((activity) => {
            return editedData[activity.studentId] ?? activity
        }),
    }
}
