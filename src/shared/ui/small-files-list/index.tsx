import styled from 'styled-components'
import React from 'react'
import { SmallFile } from './small-file'

type SmallFilesListProps = {
    files: File[]
    setFiles?(files: File[]): void
}

export const SmallFilesList = ({ files, setFiles }: SmallFilesListProps) => {
    return (
        <Wrapper>
            {files.map((file) => (
                <SmallFile
                    onRemove={
                        setFiles
                            ? (file) => {
                                  setFiles(files.filter((f) => f.name !== file.name))
                              }
                            : undefined
                    }
                    key={file.name}
                    file={file}
                />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 4px;

    overflow-x: scroll;
    max-width: 100%;
`
