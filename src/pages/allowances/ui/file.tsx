import { AttachedFile } from '@entities/allowances/types'
import { downloadFile } from '@shared/api/model/allowances'
import getFileSize from '@shared/lib/get-file-size'
import FileWrapper from '@shared/ui/file-input/ui/list-of-files/ui/file/style'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { FcFile, FcLandscape } from 'react-icons/fc'

export const File = ({ file }: { file: AttachedFile }) => {
    return (
        <FileWrapper onClick={(e) => e.preventDefault()}>
            <div className="file-body" onClick={() => downloadFile(file.id)}>
                <div className="image-container">
                    {file.contentType.includes('image') ? <FcLandscape /> : <FcFile />}
                </div>
                <div className="name-and-size">
                    <b className="file-name">{file.name}</b>
                    <Subtext fontSize="0.7em">{getFileSize(1024 * 10 * 1024)}</Subtext>
                </div>
            </div>
        </FileWrapper>
    )
}
