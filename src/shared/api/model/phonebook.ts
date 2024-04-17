export type Employee = {
    fio: string
    post: string
    address: string
    room: string
    email: string
    phone_mobile: string
    phone_inner: string
    phone_direct: string
    avatar?: string
}

export type Subdivision = {
    name: string
    bookname: string
    room: string
    phone: string
    email: string
    head: Employee
    staff: Employee[]
    address: string
    subdivs: Subdivision[]
}
