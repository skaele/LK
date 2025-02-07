import React, { useState } from 'react'
import { FcFile, FcLandscape } from 'react-icons/fc'

import { AttachedFile } from '@shared/api/allowances/types'
import { ALLOWANCES_URL } from '@shared/api/config/allowances-config'
import { getJwtToken } from '@shared/api/session/jwt-token'
import getFileSize from '@shared/lib/get-file-size'
import FileWrapper from '@shared/ui/file-input/ui/list-of-files/ui/file/style'
import { Loading } from '@shared/ui/loading'
import { popUpMessageModel } from '@shared/ui/pop-up-message'
import Subtext from '@shared/ui/subtext'

export const File = ({ file }: { file: AttachedFile }) => {
    const [loading, setLoading] = useState(false)
    return (
        <FileWrapper onClick={(e) => e.preventDefault()}>
            <div
                className="file-body"
                onClick={() => {
                    if (file.sizeB) {
                        setLoading(true)
                        fetch(`${ALLOWANCES_URL}files?${new URLSearchParams({ fileId: file.id })}`, {
                            headers: {
                                Authorization: `Bearer ${getJwtToken()}`,
                            },
                        })
                            .then((response) => response.blob())
                            .then((blob) => {
                                window.open(window.URL.createObjectURL(blob), '_blank')?.focus() // window.open + focus
                            })
                            .catch((err) => {
                                // eslint-disable-next-line no-console
                                console.log(err)
                            })
                            .finally(() => setLoading(false))
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message: 'Файл недоступен',
                            type: 'failure',
                        })
                    }
                }}
            >
                <div className="image-container">
                    {loading ? (
                        <Loading width="16px" height="16px" />
                    ) : file.contentType.includes('image') ? (
                        <FcLandscape />
                    ) : (
                        <FcFile />
                    )}
                </div>
                <div className="name-and-size">
                    <b className="file-name">
                        {file.name}.{file.extension}
                    </b>
                    {file.digitalSignature && <Subtext fontSize="0.7em">Подпись: {file.digitalSignature}</Subtext>}
                    {!!file.sizeB && <Subtext fontSize="0.7em">{getFileSize(file.sizeB)}</Subtext>}
                </div>
            </div>
        </FileWrapper>
    )
}
