import { User } from '@shared/api/model'

export const getFullUserName = (user: User | null) => {
    if (!user) return ''

    return `${user.name} ${user.surname}`
}
