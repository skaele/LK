import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { Icon } from '@features/all-pages'
import { CenterPage, Error } from '@shared/ui/atoms'
import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Route, Switch, useRouteMatch } from 'react-router'
import styled from 'styled-components'
import { SETTINGS_PAGES } from '../contants'

export const SettingsContent = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }

    if (!allRoutes) return null

    // if (settingsConfig === undefined) {
    //     return null
    // }

    return (
        <SettingsContentWrapper open={!!params?.id}>
            <SettingsContentStyled>
                <Switch>
                    {SETTINGS_PAGES.map((name) => (
                        <Route path={allRoutes[name].path} key={name} component={allRoutes[name].Component} />
                    ))}

                    <Route path={'/'}>
                        <CenterPage height="100%">
                            <Error
                                text="Ничего не выбрано"
                                image={
                                    <Icon color={'grey'} size={50}>
                                        <FiSettings />
                                    </Icon>
                                }
                            />
                        </CenterPage>
                    </Route>
                </Switch>
            </SettingsContentStyled>
        </SettingsContentWrapper>
    )
}

const SettingsContentWrapper = styled.div<{ open: boolean }>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({ open }) => (open ? 'flex' : 'none')};
    }
`

const SettingsContentStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0 32px;
`
