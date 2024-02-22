import { Button } from '@shared/ui/atoms'
import { ColumnProps } from '@ui/table/types'
import React from 'react'
import { Colors } from '@shared/constants'
import { ApplicationFileOutput } from '@shared/api/model'
import getApplicationsColumns from './get-applications-columns'

export const getExtendedApplicationsColumns = (): ColumnProps[] => {
    return [
        ...getApplicationsColumns(),
        {
            title: 'Файлы для скачивания',
            align: 'center',
            field: 'files_output',
            priority: 'five',
            width: '150px',
            render: (value) =>
                !!value.length && (
                    <Button
                        onClick={() => downloadFiles(value)}
                        text={'Скачать'}
                        background="transparent"
                        textColor={Colors.green.main}
                        width={'100%'}
                    />
                ),
        },
    ]
}

const downloadFiles = (links: ApplicationFileOutput[]) => {
    links.map((item) => {
        const a = document.createElement('a')
        a.href = item.url
        a.download = item.name
        a.target = '_blank'
        a.click()
        a.remove()
    })
}
