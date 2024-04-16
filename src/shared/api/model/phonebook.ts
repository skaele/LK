export type Employee = {
    fio: string
    avatar?: string
    jobs: {
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
    title: string
    staff: Employee[]
    head: string
    phone: string
    email: string
    address: string
    cabinet: string
}
