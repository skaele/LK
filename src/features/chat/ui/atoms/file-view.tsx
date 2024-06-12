import { ChatFile } from '@entities/chat-messages/type'
import { Colors } from '@shared/constants'
import { downloadFile } from '@shared/lib/download-file'
import React from 'react'
import { FcFile } from 'react-icons/fc'
import styled from 'styled-components'

type FileProps = {
    file: ChatFile | File
}

export const FileView = ({ file }: FileProps) => {
    return (
        <FileWrapper>
            <div
                className="file-body"
                onClick={() => {
                    if ('url' in file && file.url) {
                        window.open(file.url, '_blank')
                    }

                    if (file instanceof File) {
                        downloadFile(file)
                    }
                }}
            >
                <div className="image-container">
                    <FcFile />
                </div>
                <div className="name-and-size">
                    <b className="file-name">{file.name}</b>
                </div>
            </div>
        </FileWrapper>
    )
}

const FileWrapper = styled.div`
    width: 100%;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Colors.grey.transparent3};
    border-radius: var(--brLight);
    overflow: hidden;

    .file-body {
        display: flex;
        gap: 8px;
        align-items: center;
        cursor: pointer;

        .name-and-size {
            display: flex;
            flex-direction: column;

            .file-name {
                font-size: 0.8em;
                word-break: break-all;
            }
        }

        .image-container {
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--theme);
            border-radius: var(--brLight);

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`
