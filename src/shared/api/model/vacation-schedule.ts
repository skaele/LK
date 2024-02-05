export type VacationSchedule = {
    division: string
    post: string
    fact: Vacation[]
    plan: Vacation[]
    unused: Vacation[]
}

export type Vacation = {
    from: string
    numdays: string
    to: string
}
