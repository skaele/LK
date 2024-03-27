import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

const MessageTypes = {
    asd: 'success',
    asdd: 'info',
    azxc: 'failure',
    iosif: 'failure',
} as const

type MessageKey = keyof typeof MessageTypes
function isMessageKey(value: any): value is MessageKey {
    return typeof value === 'string' && value in MessageTypes
}

export const getWorkTransferHistoryColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'creationDate',
            type: 'date',
            sort: true,
        },
        {
            title: 'Статус',
            field: 'documentStatus',
            width: '150px',
            render: (value) => {
                const { orderStatus } = value
                return (
                    <Message
                        type={isMessageKey(orderStatus) ? MessageTypes[orderStatus] : 'alert'}
                        title={orderStatus || '-'}
                        align="center"
                        width="100%"
                        icon={null}
                        maxWidth="150px"
                    />
                )
            },
        },
        {
            title: 'Должность',
            field: 'jobTitle',
            width: '250px',
            sort: true,
        },
        {
            title: 'Перевод',
            field: 'desiredJob',
            width: '250px',
            sort: true,
        },
        // {
        //     title: 'Файл заявления',
        //     priority: 'one',
        //     field: 'downloadable',
        //     type: 'file',
        //     width: '200px',
        //     align: 'center',
        //     render: (value, data) => {
        //         if (data?.documentStatus?.downloadApplication)
        //             return (
        //                 <Button
        //                     text="Скачать файл"
        //                     background="rgb(60,210,136)"
        //                     textColor="#fff"
        //                     id="downloadButton"
        //                     width={'150px'}
        //                     align="center"
        //                     minWidth={'150px'}
        //                     height="30px"
        //                     onClick={(e) => {
        //                         e.stopPropagation()
        //                         downloadFile(data.documentGuid, '0')
        //                     }}
        //                 />
        //             )
        //         else return '-'
        //     },
        // },
    ]
}
