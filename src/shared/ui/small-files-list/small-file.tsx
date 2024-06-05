import { Colors } from '@shared/constants'
import React from 'react'
import { FcFile, FcLandscape } from 'react-icons/fc'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'

type SmallFileProps = {
    file: File
    onRemove?(file: File): void
}

export const SmallFile = ({ file, onRemove }: SmallFileProps) => {
    return (
        <Wrapper>
            <Header>
                <Icon>{file.type.includes('image') ? <FcLandscape /> : <FcFile />}</Icon>
                <FileName>{file.name}</FileName>
            </Header>

            {onRemove && <CloseIcon onClick={() => onRemove(file)} />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    gap: 12px;

    max-width: 100%;
`

const Icon = styled.div`
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--theme);
    border-radius: 2px;

    svg {
        width: 15px;
        height: 15px;
    }
`

const Header = styled.div`
    display: flex;
    gap: 4px;
`

const FileName = styled.span`
    font-size: 0.8em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 100%;
`

const CloseIcon = styled(FiX)`
    color: ${Colors.red.main};

    cursor: pointer;
    margin-right: 14px;
`
