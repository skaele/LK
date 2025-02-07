import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Colors } from '@shared/consts'
import { Page } from '@shared/routing'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'

type StyleProps = {
    isCurrent: boolean
    disabled?: boolean
    collapsed?: boolean
}

const NewPageLinkWrapper = styled(Link)<StyleProps>`
    color: var(--text);
    padding: 15px 15px;
    max-width: 140px;
    width: 100%;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    border-radius: 10px;
    background: ${({ isCurrent }) => (isCurrent ? Colors.blue.transparent3 : 'transparent')};
    color: ${({ isCurrent }) => (isCurrent ? 'var(--blue)' : 'var(--grey)')};

    &:hover {
        filter: brightness(0.97);
    }
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
    }
`

const LinkTitle = styled.div<{ isCurrent: boolean }>`
    font-weight: ${({ isCurrent }) => (isCurrent ? 500 : 400)};
    font-size: 0.9rem;
`

type Props = StyleProps & {
    route: Page | undefined
}

export const NewPageLink = ({ route, collapsed = false, disabled = false, isCurrent = false }: Props) => {
    if (!route) return <Subtext>Ссылка не определена</Subtext>

    const { path, title, icon: IconLink, color, shortTitle } = route

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (disabled) {
            return e.preventDefault()
        }
    }

    return (
        <NewPageLinkWrapper
            collapsed={collapsed}
            disabled={disabled}
            isCurrent={isCurrent}
            to={path}
            title={shortTitle ?? title}
            color={color}
            onClick={handleClick}
        >
            <Flex gap="8px">
                <IconWrapper>{IconLink && <IconLink />}</IconWrapper>
                {!collapsed && <LinkTitle isCurrent={isCurrent}>{shortTitle ?? title}</LinkTitle>}
            </Flex>
        </NewPageLinkWrapper>
    )
}
