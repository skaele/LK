import React from 'react'
import { useRouteMatch } from 'react-router'

import styled from 'styled-components'
import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'
import { PageLinkTutorial } from 'widgets/tutorial/tutorials/page-link-tutorial'

import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'

import { menuModel } from '@entities/menu'

import { MEDIA_QUERIES } from '@shared/constants'

import { SETTINGS_PAGES } from '../contants'

export const SettingsList = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const pathParams = useRouteMatch<{ id?: string }>(TEMPLATE_SETTINGS_ROUTE)?.params

    if (!allRoutes) return null

    return (
        <WrapperTutorial data-is-base-settings-page={!pathParams?.id} tutorialModule={{ id: 'settings', step: 0 }}>
            {SETTINGS_PAGES.map((id, index) => (
                <PageLinkTutorial
                    {...allRoutes[id]}
                    title={allRoutes[id].title.slice(11, allRoutes[id].title.length)}
                    key={id}
                    orientation="horizontal"
                    shadow={false}
                    // id should be equal to path
                    isActive={id === pathParams?.id}
                    tutorialModule={{ id: 'settings', step: index + 1 }}
                />
            ))}
        </WrapperTutorial>
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

const WrapperTutorial = withTutorial(
    ({ children, forwardedRef }: { children?: React.ReactNode } & TutorialComponent) => {
        const pathParams = useRouteMatch<{ id?: string }>(TEMPLATE_SETTINGS_ROUTE)?.params
        return (
            <Wrapper ref={forwardedRef} data-is-base-settings-page={!pathParams?.id}>
                {children}
            </Wrapper>
        )
    },
)
