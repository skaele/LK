import { WorkType } from '@entities/pe-student-additional-points/types'

export interface PEStudent {
    studentGuid: string
    fullName: string
    groupNumber: string
    hasDebtFromPreviousSemester: boolean
    visits: number
    additionalPoints: number
    pointsForStandards: number
    group: {
        visitValue: number
    }
    pointsHistory: {
        points: number
    }[]
    course: number
    department: string
}

export type PEStudentProfile = PEStudent & {
    visitsHistory: {
        id: number
        date: string
        teacherGuid: string
        teacher: {
            fullName: string
        }
    }[]
    pointsHistory: {
        id: string
        workType: WorkType
        comment: string
        date: string
        points: number
        teacherGuid: string
    }[]
    standardsHistory: {
        id: string
        standardType: string
        teacher: {
            fullName: string
        }
        points: number
        date: string
        teacherGuid: string
    }[]
}
