import { ApplicationsConstants } from '@entities/applications/consts'
import { LinkButton } from '@shared/ui/atoms'
import { Tooltip } from '@shared/ui/tooltip'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'
import Flex from '@shared/ui/flex'
import { FiDownload } from 'react-icons/fi'

const getApplicationsColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Запрос',
            field: 'subject',
            priority: 'one',
            search: true,
            showFull: true,
            render: (val, obj) => {
                return (
                    <Flex jc="space-between">
                        {val}
                        {!!obj?.files_output?.length &&
                            obj.files_output.map((file: { fname: string; url: string }) => (
                                <div key={file.url} onClick={(e) => e.stopPropagation()}>
                                    <Tooltip text={file.fname} direction="left">
                                        <LinkButton icon={<FiDownload />} background="transparent" href={file?.url} />
                                    </Tooltip>
                                </div>
                            ))}
                    </Flex>
                )
            },
        },
        {
            title: 'Дата',
            field: 'created',
            priority: 'two',
            sort: true,
            type: 'date',
            align: 'center',
            width: '120px',
        },
        {
            title: 'Рег. номер',
            field: 'num',
            priority: 'five',
            align: 'center',
            width: '170px',
        },
        {
            title: 'Статус',
            field: 'status',
            priority: 'one',
            width: '130px',
            catalogs: [
                ...(Object.values(ApplicationsConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value) => {
                const newValue = transformStatusApplication(value)
                return (
                    <Message
                        type={newValue === 'Готово' ? 'success' : newValue === 'Отклонено' ? 'failure' : 'alert'}
                        title={newValue || '—'}
                        align="center"
                        width="100%"
                        icon={null}
                        maxWidth="150px"
                    />
                )
            },
        },
        {
            title: 'Структурное подразделение, адрес',
            priority: 'four',
            field: 'response_div',
            showFull: false,
        },
        { title: 'Примечание', field: 'comment', priority: 'five', width: '150px' },
        // {
        //     title: 'Файлы для скачивания',
        //     align: 'center',
        //     field: 'files_output',
        //     priority: 'five',
        //     width: '150px',
        //     render: (value) =>
        //         !!value.length && (
        //             <Button
        //                 onClick={() => downloadFiles(value)}
        //                 text={'Скачать'}
        //                 background="transparent"
        //                 textColor={Colors.green.main}
        //                 width={'100%'}
        //             />
        //         ),
        // },
    ]
}

const transformStatusApplication = (status: string): string => {
    switch (status) {
        case 'На рассмотрении':
            return ApplicationsConstants.pending
        case 'Принято в работу':
            return ApplicationsConstants.pending
        case 'Получено':
            return ApplicationsConstants.ready
        default:
            return status
    }
}

export default getApplicationsColumns
