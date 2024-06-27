import { LOGIN_ROUTE, publicRoutes } from '@app/routes/general-routes'
import { adminLinksModel } from '@entities/admin-links'
import { applicationsModel } from '@entities/applications'
import { peTeacherModel } from '@entities/pe-teacher'
import { loadDivisions } from '@pages/hr-applications/model/divisions'
import { useScrollToTop } from '@shared/lib/hooks/use-scroll-to-top'
import React, { Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ContentLayout from 'widgets/content-layout'
import { userModel } from '../../entities/user'
import { phonebookModel } from '@entities/phonebook'
import { allowancesModel } from '@entities/allowances'

const Router = () => {
    const {
        data: { isAuthenticated, user },
    } = userModel.selectors.useUser()

    // scroll window to top when change route
    useScrollToTop(window)

    useEffect(() => {
        if (window.location.href === 'https://e.mospolytech.ru/?p=children#/home') {
            window.location.replace('https://e.mospolytech.ru/old/index.php?p=children')
        }
    }, [window.location.href])

    // TODO: sample with $userStore clock
    useEffect(() => {
        if (isAuthenticated) {
            applicationsModel.effects.getUserDataApplicationsFx()
            // chatsModel.events.load()
            if (user?.user_status === 'staff') {
                adminLinksModel.effects.getFx()
                applicationsModel.effects.getWorkerPosts()
                phonebookModel.events.getSubdivisions()
                allowancesModel.events.appStarted()
                loadDivisions()
            }
            peTeacherModel.events.load()
        }
    }, [isAuthenticated, user])

    return isAuthenticated ? (
        <ContentLayout />
    ) : (
        <Suspense fallback={null}>
            <Switch>
                {publicRoutes.map(({ path, Component }, i) => {
                    return <Route path={path} component={Component} exact={true} key={i} />
                })}
                <Redirect exact to={LOGIN_ROUTE} />
            </Switch>
        </Suspense>
    )
}

export default Router
