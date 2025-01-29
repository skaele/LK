import React, { ReactNode } from 'react'
import { FcFile } from 'react-icons/fc'

import { Colors } from '@shared/constants'
import FileWrapper from '@shared/ui/file-input/ui/list-of-files/ui/file/style'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import styled from 'styled-components'

export const Docs = ({ children, title }: { children: ReactNode; title?: string }) => {
    return (
        <DocsWrapper d="column" w="fit-content" gap="0.5rem" jc="flex-start" p="0.5rem">
            <DocsTitle>
                <Title size={5} align="left">
                    {title ?? 'Документы'}
                </Title>
            </DocsTitle>
            {children}
        </DocsWrapper>
    )
}

const DocsWrapper = styled(Flex)`
    position: relative;
    border: 1px solid ${Colors.grey.transparent3};
    border-radius: 0.5rem;
`

const DocsTitle = styled.div`
    position: absolute;
    top: -0.6lh;
    left: 0.5rem;
    background: var(--block);

    @media (max-width: 766px) {
        background: var(--theme);
    }
`

export const File = ({ link, title }: { link: string; title: string }) => (
    <a href={link} style={{ width: 250, zIndex: 1 }}>
        <FileWrapper>
            <div className="file-body">
                <div className="image-container">
                    <FcFile />
                </div>
                <div className="name-and-size">
                    <b className="file-name">{title}</b>
                </div>
            </div>
        </FileWrapper>
    </a>
)
