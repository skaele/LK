import { Groups, IRoutes } from '@app/routes/general-routes'

import { PETeacher } from '@entities/pe-teacher/types'

type RoutesOrder = Record<Groups, number>

export const routesOrder: RoutesOrder = {
    Основное: 0,
    'Кадровая среда': 1,
    'Учебная деятельность': 2,
    Коммуникация: 3,
    'Научная деятельность': 4,
    'Находится в разработке': 5,
}

const getGroupPages = (routes: IRoutes | null, peTeacher: PETeacher | null, userGuid: string | null) => {
    if (!routes) return {} as Record<Groups, IRoutes>

    const tabs = Object.values(routes)
        .filter(({ getIsVisibleForCurrentUser, guidsAllowed }) =>
            (getIsVisibleForCurrentUser && peTeacher ? getIsVisibleForCurrentUser(peTeacher) : true) && guidsAllowed
                ? guidsAllowed.includes(userGuid || '')
                : true,
        )
        .reduce(
            (acc, route) => {
                const group = route?.group ? Groups[route.group] : Groups.OTHER

                if (!acc[group]) acc[group] = {}
                acc[group][route.id] = route
                return acc
            },
            {} as Record<Groups, IRoutes>,
        )

    return tabs
}

export default getGroupPages
