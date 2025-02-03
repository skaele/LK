import React from 'react'
import { useRouteMatch } from 'react-router'

import styled from 'styled-components'

import { PageLinkTutorial } from '@features/tutorials/page-link-tutorial'

import { TEMPLATE_SETTINGS_ROUTE, settingsRoutes } from '@shared/routing'
import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import { TutorialComponent } from '@shared/ui/types'

export const SettingsList = () => {
    const pathParams = useRouteMatch<{ id?: string }>(TEMPLATE_SETTINGS_ROUTE)?.params

    return (
        <WrapperTutorial data-is-base-settings-page={!pathParams?.id} tutorialModule={{ id: 'settings', step: 0 }}>
            {Object.keys(settingsRoutes).map((id, index) => (
                <PageLinkTutorial
                    {...settingsRoutes[id]}
                    title={settingsRoutes[id].title?.slice(11, settingsRoutes[id].title.length) ?? ''}
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
