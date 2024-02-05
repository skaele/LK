import { RetakeLink } from '@features/schedule/types/retake-types'
import { LinkItem } from '@shared/ui/link-item'
import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
    width: 400px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 10px;
    }
`

type Props = Pick<RetakeLink, 'fullTitle' | 'links'>

const RetakeModal = ({ links }: Props) => {
    return (
        <Container>
            {links.map(({ href, title }, i) => (
                <LinkItem
                    title={title}
                    isExternalPage
                    key={i + title}
                    id={href}
                    isOpenInNewWindow
                    icon={<FaFilePdf />}
                    path={href}
                    showMore={false}
                    color={'red'}
                />
            ))}
        </Container>
    )
}

export default RetakeModal
