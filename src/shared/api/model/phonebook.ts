export type Employee = {
    fio: string
    avatar?: string
    jobs: {
        post: string
        email: string
        phone: string
        extPhone: string
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
