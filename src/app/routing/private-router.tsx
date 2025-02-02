import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { menuModel } from '@entities/menu'

import { HOME_ROUTE, PageComponent } from '@shared/routing'

import { employeeHiddenPages, employeePages } from './routes/employee'
import { privateHiddenPages, privatePages } from './routes/private'
import { hiddenStudentPages, studentPages } from './routes/student'

export const allPages: Record<string, PageComponent> = {
    ...privatePages,
    ...privateHiddenPages,
    ...studentPages,
    ...hiddenStudentPages,
    ...employeePages,
    ...employeeHiddenPages,
}

const PrivateRouter = () => {
    const { allRoutes: availableRoutes } = menuModel.selectors.useMenu()

    if (!availableRoutes) return null

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

// APP
// Auth
// Routing => (loading | auth | none)
