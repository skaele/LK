export type ElectronicInteraction = {
    clients: (ElectronicInteractionTemplate & {
        guid: string
    })[]
} & ElectronicInteractionTemplate

export type ElectronicInteractionTemplate = {
    bdate: string
    date: string
    email: string
    file: string
    fio: string
    login: string
    passDate: string
    passDiv: string
    passNum: string
    passSer: string
    phone: string
    status: boolean
    time: string
}
