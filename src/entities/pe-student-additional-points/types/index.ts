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
