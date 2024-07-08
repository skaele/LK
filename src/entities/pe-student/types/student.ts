import { WorkType } from '@entities/pe-student-additional-points/types'

export interface PEStudent {
    studentGuid: string
    fullName: string
    groupNumber: string
    hasDebt: boolean
    visits: number
    standardPoints: number
    course: number
    totalPoints: number
    lmsPoints: number
}

export type PEStudentProfile = {
    studentGuid: string
    fullName: string
    groupNumber: string
    hasDebt: boolean
    totalPoints: number
    lmsPoints: number
    visits: number
    course: number
    visitsHistory: {
        id: number
        date: string
        teacherGuid: string
        teacherFullName: string
    }[]
    pointsHistory: {
        id: string
        type: WorkType
        comment: string
        date: string
        points: number
        teacherGuid: string
        teacherFullName: string
    }[]
    standardsHistory: {
        id: string
        type: string
        teacherFullName: string
        points: number
        date: string
        teacherGuid: string
    }[]
}
