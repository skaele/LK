import { menuModel } from '@entities/menu'
import { PageLink } from '@features/all-pages'
import React from 'react'
import styled from 'styled-components'
import { SETTINGS_PAGES } from '../contants'
import { useRouteMatch } from 'react-router'
import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'

export const SettingsList = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const pathParams = useRouteMatch<{ id?: string }>(TEMPLATE_SETTINGS_ROUTE)?.params

    if (!allRoutes) return null

    return (
        <Wrapper>
            {SETTINGS_PAGES.map((id) => (
                <PageLink
                    {...allRoutes[id]}
                    title={allRoutes[id].title.slice(11, allRoutes[id].title.length)}
                    key={id}
                    orientation="horizontal"
                    shadow={false}
                    // id should be equal to path
                    isActive={id === pathParams?.id}
                />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
