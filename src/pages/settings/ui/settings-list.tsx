import { menuModel } from '@entities/menu'
import { PageLink } from '@features/all-pages'
import React from 'react'
import styled from 'styled-components'
import { SETTINGS_PAGES } from '../contants'
import { useRouteMatch } from 'react-router'
import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { MEDIA_QUERIES } from '@shared/constants'

export const SettingsList = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const pathParams = useRouteMatch<{ id?: string }>(TEMPLATE_SETTINGS_ROUTE)?.params

    if (!allRoutes) return null

    return (
        <Wrapper data-is-base-settings-page={!pathParams?.id}>
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

    ${MEDIA_QUERIES.isMobile} {
        &[data-is-base-settings-page='false'] {
            display: none;
        }

        &[data-is-base-settings-page='true'] {
            flex: 1;
        }
    }
`
