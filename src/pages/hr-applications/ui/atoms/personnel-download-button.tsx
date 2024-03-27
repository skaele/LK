import downloadFile from '@pages/hr-applications/lib/get-file'
import { Button, ButtonProps } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import { Loading } from '@shared/ui/loading'
import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'

export const PersonnelDownloadButton = ({
    documentGuid,
    type,
    service,
}: {
    documentGuid: string
    type: '0' | '1'
    service: 'Vacation' | 'MedicalExamination'
} & ButtonProps) => {
    const [loading, setloading] = useState(false)

    return (
        <Flex jc="center">
            {loading ? (
                <Loading height="40px" />
            ) : (
                <Flex
                    onClick={(e) => {
                        e.stopPropagation()
                        setloading(true)
                        downloadFile(documentGuid, type, service).finally(() => {
                            setloading(false)
                        })
                    }}
                >
                    <p>{type === '0' ? 'Заявление' : 'Приказ'}</p>
                    <Button icon={<FiDownload />} background="transparent" align="center" height="40px" />
                </Flex>
            )}
        </Flex>
    )
}
