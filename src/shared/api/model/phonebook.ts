export type Employee = {
    fio: string
    post: string
    email?: string
    phone?: string
    extPhone?: string
    address?: string
    cabinet?: string
    avatar?: string
}

export type Subdivision = {
    title: string
    head: string
    phone?: string
    extPhone?: string
    email?: string
    address?: string
    cabinet?: string
    staff: Employee[]
}
