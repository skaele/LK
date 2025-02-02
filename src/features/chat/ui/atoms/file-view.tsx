import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { FcFile, FcImageFile } from 'react-icons/fc'

import styled from 'styled-components'

import { ChatFile } from '@entities/chat-messages/type'

import { Colors } from '@shared/consts'
import { downloadFile } from '@shared/lib/download-file'

type FileProps = {
    file: ChatFile | File
    isYourMessage: boolean
}

const ICONS = {
    pdf: <FaFilePdf color="#c54646" />,
    docx: <FcFile />,
    doc: <FcFile />,
    jpeg: <FcImageFile />,
    jpg: <FcImageFile />,
    png: <FcImageFile />,
}

export const FileView = ({ file, isYourMessage }: FileProps) => {
    const format = file.name.split('.').pop() ?? 'doc'

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()

        if ('url' in file && file.url) {
            window.open(file.url, '_blank')
        }

        if (file instanceof File) {
            downloadFile(file)
        }
    }

    return (
        <FileWrapper onClick={handleClick}>
            <div className="file-body">
                <div className="image-container">{ICONS[format as keyof typeof ICONS] ?? <FcFile />}</div>
                <div className="name-and-size">
                    <b className="file-name" style={{ color: isYourMessage ? Colors.white.main : 'var(--text)' }}>
                        {file.name}
                    </b>
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
    background: ${Colors.grey.transparent2};
    border-radius: var(--brLight);
    overflow: hidden;
    cursor: pointer;

    &:hover {
        filter: brightness(0.95);
    }

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
                font-weight: 500;
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
