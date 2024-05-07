import { LOGIN_ROUTE, publicRoutes } from '@app/routes/general-routes'
import { adminLinksModel } from '@entities/admin-links'
import { applicationsModel } from '@entities/applications'
import { menuModel } from '@entities/menu'
import { peTeacherModel } from '@entities/pe-teacher'
import { settingsModel } from '@entities/settings'
import { loadDivisions } from '@pages/hr-applications/model/divisions'
import { useScrollToTop } from '@shared/lib/hooks/use-scroll-to-top'
import React, { Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ContentLayout from 'widgets/content-layout'
import { userModel } from '../../entities/user'
import { phonebookModel } from '@entities/phonebook'

const Router = () => {
    const {
        data: { isAuthenticated, user },
    } = userModel.selectors.useUser()

    const { data } = adminLinksModel.selectors.useData()
    const { settings } = settingsModel.selectors.useSettings()

    // scroll window to top when change route
    useScrollToTop(window)

    useEffect(() => {
        if (window.location.href === 'https://e.mospolytech.ru/?p=children#/home') {
            window.location.replace('https://e.mospolytech.ru/old/index.php?p=children')
        }
    }, [window.location.href])

    useEffect(() => {
        if (isAuthenticated) {
            applicationsModel.effects.getUserDataApplicationsFx()
            if (user?.user_status === 'staff') {
                adminLinksModel.effects.getFx()
                applicationsModel.effects.getWorkerPosts()
                phonebookModel.events.getSubdivisions()
                loadDivisions()
            }
            peTeacherModel.events.load()
        }
    }, [isAuthenticated, user])

    useEffect(() => {
        if (user) {
            if (!settings) settingsModel.effects.getLocalSettingsFx(user.id)
            else {
                menuModel.events.defineMenu({
                    user,
                    adminLinks: data,
                    homeRoutes: settings['settings-home-page'].property['pages'] as string[],
                })
            }
        }
    }, [user, data, settings])

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
