import { IRoutes, Page } from '@shared/routing'

const findRoutesWidthConfig = (config: string[], allRoutes: IRoutes): IRoutes => {
    return config.reduce(
        (acc, id) => {
            acc[id] = allRoutes[id]
            return acc
        },
        {} as { [key: string]: Page },
    )
}

export default findRoutesWidthConfig
