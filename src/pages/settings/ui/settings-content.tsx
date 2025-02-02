import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Route, Switch, useRouteMatch } from 'react-router'

import styled from 'styled-components'

import { menuModel } from '@entities/menu'

import { TEMPLATE_SETTINGS_ROUTE } from '@shared/routing'
import { CenterPage, Error } from '@shared/ui/atoms'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import { Icon } from '@shared/ui/icon'

import { SETTINGS_PAGES } from '../contants'

export const SettingsContent = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const pathParams = useRouteMatch<{ id?: string }>(TEMPLATE_SETTINGS_ROUTE)?.params

    if (!allRoutes) return null

    return (
        <SettingsContentWrapper data-is-base-settings-page={!pathParams?.id}>
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

const SettingsContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    ${MEDIA_QUERIES.isMobile} {
        &[data-is-base-settings-page='false'] {
            flex: 1;
        }

        &[data-is-base-settings-page='true'] {
            display: none;
        }
    }
`

const SettingsContentStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow: hidden;
    padding: 0 32px;

    ${MEDIA_QUERIES.isMobile} {
        padding: 0;
    }
`
