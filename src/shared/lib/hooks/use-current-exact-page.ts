import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import { IRoute, IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'

const getPage = (location: string, currentRoute: IRoutes) => {
    const locationSplitted = location.split('/')
    return (
        currentRoute[location.slice(1, location.length)] ??
        Object.values(currentRoute).find((route) => {
            const routeSplitted = route.path.split('/')

            for (let i = 0; i < locationSplitted.length; i++) {
                const element = routeSplitted[i]

                if (element !== locationSplitted[i] && routeSplitted[i]?.[0] !== ':') {
                    return false
                }
            }

            return true
        })
    )
}

const useCurrentExactPage = () => {
    const history = useHistory()
    const { allRoutes } = menuModel.selectors.useMenu()
    const location = useLocation()
    const currentRoute: IRoutes = allRoutes ?? {}

    const [currentPage, setCurrentPage] = useState<IRoute | null>(getPage(history.location.pathname, currentRoute))

    // useEffect(() => {
    //     if (currentRoute !== null) {
    //         setCurrentPage(getPage(history.location.pathname, currentRoute))
    //     }
    // }, [currentRoute])

    // useEffect(() => {
    //     return history.listen((location) => {
    //         if (location) {
    //             setCurrentPage(getPage(location.pathname, currentRoute))
    //         }
    //     })
    // }, [history, currentRoute])

    useEffect(() => {
        setCurrentPage(getPage(location.pathname, currentRoute))
    }, [location, currentRoute])

    return currentPage
}

export default useCurrentExactPage
