import { User } from '@api/model'

const getStatusFormSuperiorRoom = (user: User) => {
    const StartDateSuperiorRoom = 'Mon Aug 17 2023 12:00:00 GMT+0300'
    const EndDateSuperiorRoom = 'Wed Aug 19 2023 12:00:00 GMT+0300'
    const currentTime = new Date()

    if (user.enterYear !== '2023/2024') return 'Форма доступна только для студентов 1 курса'

    if (currentTime < new Date(StartDateSuperiorRoom))
        return 'Подача заявок открыта с 12:00 17 августа до 12:00 19 августа!'

    if (currentTime > new Date(EndDateSuperiorRoom)) return 'Подача заявок закрыта'

    return ''
}

export default getStatusFormSuperiorRoom
