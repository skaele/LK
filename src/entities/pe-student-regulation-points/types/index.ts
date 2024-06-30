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
