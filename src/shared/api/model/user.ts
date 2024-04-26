import { PhoneSettingsType } from '@entities/settings/lib/get-default-settings'
import { Sex } from '@utility-types/sex'

export type UserStatus = 'stud' | 'staff'

type EducationFormT = 'Очная' | 'Очно-заочная' | 'Заочная' | 'Недоступен'

type TechicalAccount = {
    token: string
    jwt: string
    jwt_refresh: string
}

type GeneralAccountFields = {
    user_status: UserStatus
    fio: string
    avatar: string
}

export type StudentAccount = {
    status?: string
    group?: string
    course?: string
    educationForm?: EducationFormT
    finance?: string
    degreeLevel?: string
}

export type StaffAccount = {
    work_place?: string
    email_staff?: string
}

export type GeneralAccount = GeneralAccountFields & StudentAccount & StaffAccount & TechicalAccount

export type User = StudentAccount & {
    id: string
    guid: string
    name: string
    fullName: string
    avatar: string
    surname: string
    birthday: string
    patronymic: string
    email?: string
    email_staff?: string
    phone?: string
    phone_staff?: string
    allow_mobphone_in?: boolean
    allow_mobphone_out?: boolean
    orders: string[]
    hasAlerts: boolean
    sex: Sex
    code: string
    faculty: string
    specialty: string
    specialization: string
    degreeLength: number
    enterYear: string
    subdivisions?: Subdivision[]
    user_status: UserStatus
    lastaccess: string
    accounts?: GeneralAccount[]
    authorIDs?: AuthorIDs
} & PhoneSettingsType

interface Subdivision {
    guid_person: string
    guid_staff: string
    categoty: string
    jobType?: string
    status?: string
    subdivision?: string
    wage?: string
    post?: string
    address?: string
    room?: string
    phone_inner?: string
    phone_direct?: string
}

interface AuthorIDs {
    wosReasearcher?: string
    scopus?: string
    eLibrary?: string
}
