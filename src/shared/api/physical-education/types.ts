export type Group = {
    groupName: string
    curatorFullName: string
}

export interface AddStudentAdditionalPoints {
    studentGuid: string
    type: WorkType
    date: string
    points: number
    comment: string
}

export enum WorkType {
    Activist = 'Activist',
    Competition = 'Competition',
    ExternalFitness = 'ExternalFitness',
    GTO = 'GTO',
    InternalTeam = 'InternalTeam',
    OnlineWork = 'OnlineWork',
    Science = 'Science',
}

export interface AddStudentRegulationPoints {
    studentGuid: string
    type: RegulationType
    date: string
    points: number
}

export enum RegulationType {
    FlexionAndExtensionOfArms = 'FlexionAndExtensionOfArms', // сгибание и разгибание рук
    JumpingRopeJumps = 'JumpingRopeJumps', // прыжки со скакалкой
    Jumps = 'Jumps', // прыжки
    PullUps = 'PullUps', // подтягивания
    ShuttleRun = 'ShuttleRun', // челночный бег
    Squats = 'Squats', // приседания
    Tilts = 'Tilts', // наклон
    TorsoLifts = 'TorsoLifts', // подъемы туловища
    Other = 'Other', // другое
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

export type HealthGroup = 'None' | 'Basic' | 'Preparatory' | 'SpecialA' | 'SpecialB' | 'HealthLimitations' | 'Disabled'

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
    | 'InternalTeam'

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

export interface AddStudentVisits {
    studentGuid: string
    date: string
}

export type SetHealthGroup = { studentGuid: string; healthGroup: HealthGroup }

export type SetSpecialization = { studentGuid: string; specialization: Specialization }

export type PETeacher = {
    id: string
    permissions: PeTeacherPermission[]
    fullName: string
    groups: string[]
}

export enum PeTeacherPermission {
    AdminAccess = 'AdminAccess',
    DefaultAccess = 'DefaultAccess',
    OnlineCourseAccess = 'OnlineCourseAccess',
    SecretaryAccess = 'SecretaryAccess',
    SuperUser = 'SuperUser',
}
