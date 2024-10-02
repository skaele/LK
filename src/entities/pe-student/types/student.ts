import { WorkType } from '@entities/pe-student-additional-points/types'

export type HealthGroup = 'None' | 'Basic' | 'Preparatory' | 'SpecialA' | 'SpecialB' | 'HealthLimitations' | 'Disabled'

export const healthGroupToTitle: Record<HealthGroup, string> = {
    None: '-',
    Basic: 'Основная',
    SpecialA: 'Специальная А',
    SpecialB: 'Специальная А',
    Preparatory: 'Подготовительная',
    HealthLimitations: 'ОВЗ',
    Disabled: 'Инвалид',
}

export type Specialization =
    | 'None'
    | 'Basketball'
    | 'Volleyball'
    | 'Aerobics'
    | 'PowerLiftingAndCrossfit'
    | 'StreetLiftingAndArmLifting'
    | 'GeneralPhysicalTraining'
    | 'GeneralPhysicalTrainingGym'
    | 'FootRoom'
    | 'SMG'
    | 'TableTennis'
    | 'NordicWalking'

export const specializationToTitle: Record<Specialization, string> = {
    None: '-',
    Basketball: 'Баскетбол',
    Volleyball: 'Волейбол',
    Aerobics: 'Аэробика',
    PowerLiftingAndCrossfit: 'Пауэрлифтинг и кроссфит',
    StreetLiftingAndArmLifting: 'Стритлифтинг и армлифтинг',
    GeneralPhysicalTraining: 'ОФП',
    GeneralPhysicalTrainingGym: 'ОФП (тренажерный зал)',
    FootRoom: 'Футзал',
    SMG: 'СМГ',
    TableTennis: 'СМГ настольный теннис',
    NordicWalking: 'СМГ скандинавская ходьба',
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
    specialization: Specialization
}

export type PEStudentProfile = {
    studentGuid: string
    fullName: string
    groupNumber: string
    hasDebt: boolean
    healthGroup: HealthGroup
    healthGroupTeacher: { guid: string; fullName: string } | null
    specialization: Specialization
    totalPoints: number
    lmsPoints: number
    visits: number
    course: number
    curator: { guid: string; fullName: string } | null
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
