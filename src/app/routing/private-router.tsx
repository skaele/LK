import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { menuModel } from '@entities/menu'

import { HOME_ROUTE } from '@shared/routing'

const PrivateRouter = () => {
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!allRoutes) return null

    return (
        <Switch>
            {Object.values(allRoutes).map(({ path, Component, isTemplate }) => {
                return <Route path={path} component={Component} exact={!isTemplate} key={path} />
            })}
            <Redirect exact to={HOME_ROUTE} />
        </Switch>
    )
}

export default React.memo(PrivateRouter)

// APP
// Auth
// Routing => (loading | auth | none)
