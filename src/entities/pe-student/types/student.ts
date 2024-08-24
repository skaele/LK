import { WorkType } from '@entities/pe-student-additional-points/types'

export type HealthGroup = 'None' | 'Basic' | 'Preparatory' | 'Special' | 'HealthLimitations'

export const healthGroupToTitle: Record<HealthGroup, string> = {
    None: '-',
    Basic: 'Базовая',
    Special: 'Специальная',
    Preparatory: 'Подготовительная',
    HealthLimitations: 'С ограничениями',
}

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
    healthGroup: HealthGroup
}

export type PEStudentProfile = {
    studentGuid: string
    fullName: string
    groupNumber: string
    hasDebt: boolean
    healthGroup: HealthGroup
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
