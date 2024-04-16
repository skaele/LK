export type Employee = {
    guid: string
    fio: string
    avatar?: string
    jobs: {
        jobGuid: string
        post: string
        mainJob: boolean
        email: string
        phone: string
        mobilePhone: string
        address: string
        cabinet: string
    }[]
}

export type Subdivision = {
    guid: string
    title: string
    staff: Employee[]
    head: Employee
    phone: string
    email: string
    address: string
    cabinet: string
}
