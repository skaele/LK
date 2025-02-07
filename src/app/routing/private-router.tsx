import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { useUnit } from 'effector-react'

import { menuModel } from '@entities/menu'

import { HOME_ROUTE } from '@shared/routing'

import { $allPages } from './routes/pages'

const PrivateRouter = () => {
    const allPages = useUnit($allPages)
    const { allRoutes: availableRoutes } = menuModel.selectors.useMenu()
    if (!availableRoutes || !allPages) return null

    return (
        <Switch>
            {Object.values(availableRoutes).map(({ path, isTemplate, id }) => {
                return <Route path={path} component={allPages[id]} exact={!isTemplate} key={path} />
            })}
            <Redirect exact to={HOME_ROUTE} />
        </Switch>
    )
}

export default React.memo(PrivateRouter)
