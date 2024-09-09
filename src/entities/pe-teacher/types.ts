export type PETeacher = {
    id: string
    permissions: PeTeacherPermission[]
    fullName: string
    groups: string[]
}

export enum PeTeacherPermission {
    AdminAccess = 'AdminAccess',
    DefaultAccess = 'DefaultAccess',
    OnlineCourseAccess = 'OnlineCourseAccess',
    SecretaryAccess = 'SecretaryAccess',
    SuperUser = 'SuperUser',
}
