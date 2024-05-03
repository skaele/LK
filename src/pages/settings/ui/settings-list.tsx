import { menuModel } from '@entities/menu'
import { PageLink } from '@features/all-pages'
import React from 'react'
import styled from 'styled-components'
import { SETTINGS_PAGES } from '../contants'

export const SettingsList = () => {
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!allRoutes) return null

    return (
        <Wrapper>
            {SETTINGS_PAGES.map((name) => (
                <PageLink
                    {...allRoutes[name]}
                    title={allRoutes[name].title.slice(11, allRoutes[name].title.length)}
                    key={name}
                    orientation="horizontal"
                    shadow={false}
                    isActive
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
