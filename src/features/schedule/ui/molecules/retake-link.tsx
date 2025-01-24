import React from 'react'

import styled from 'styled-components'
import { useModal } from 'widgets'

import { PageLinkProps } from '@features/all-pages/ui/molecules/page-link'

import RetakeLinkContent from './retake-link-content'

const LinkWrapper = styled.a<{ width: number | string }>`
    width: ${({ width }) => (typeof width === 'number' ? `calc(125px * ${width} + ${(width - 1) * 10}px)` : width)};

    @media (max-width: 500px) {
        max-width: ${({ width }) => (typeof width === 'number' ? `calc(33vw * ${width} - 14px)` : width)};
        min-width: ${({ width }) => (typeof width === 'number' ? `calc(33vw * ${width} - 14px)` : width)};
        width: ${({ width }) => (typeof width === 'number' ? `calc(33vw * ${width} - 14px)` : width)};
    }
`

export type RetakeLinkProps = Omit<PageLinkProps, 'restricted' | 'mode'>

const RetakeLink = (props: RetakeLinkProps) => {
    const { path, Component: RetakeModal, fullTitle } = props
    const { open } = useModal()
    const hasModal = !!RetakeModal({})

    return (
        <>
            {!hasModal && (
                <LinkWrapper title={fullTitle} href={path} width={1}>
                    <RetakeLinkContent {...props} />
                </LinkWrapper>
            )}
            {hasModal && (
                <LinkWrapper onClick={() => open(<RetakeModal />)} width={1}>
                    <RetakeLinkContent {...props} />
                </LinkWrapper>
            )}
        </>
    )
}

export default RetakeLink
