export type Employee = {
    fio: string
    job: Job[]
    guid_person: string
    guid_staff: string
    avatar: string
} & Omit<Job, 'subdivision'>

type Job = {
    guid_person: string
    guid_staff: string
    address: string
    email: string
    jobType: string
    phone_direct: string
    phone_inner: string
    phone_mobile: string
    post: string
    room: string
    subdivision: string
}

export type Subdivision = {
    name: string
    bookname: string
    room: string
    phone_inner: string
    phone_direct: string
    email: string
    head: Employee
    staff: Employee[]
    address: string
    subdivs: Subdivision[]
}
