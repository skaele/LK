import { PeTeacherAddPermission } from '@entities/pe-teacher/types'

export type AddTeacher = {
    teacherGuid: string
    fullName: string
    permission?: PeTeacherAddPermission
}
