import { Button } from '@shared/ui/atoms'
import { ColumnProps } from '@ui/table/types'
import React from 'react'
import { Colors } from '@shared/constants'
import { ApplicationFileOutput } from '@shared/api/model'
import { getCommonApplicationsColumns } from './get-applications-columns'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'

export const getExtendedApplicationsColumns = (): ColumnProps[] => {
    return [
        ...getCommonApplicationsColumns(),
        {
            title: 'Файлы для скачивания',
            align: 'center',
            field: 'files_output',
            priority: 'five',
            width: '150px',
            render: (value: ApplicationFileOutput[]) =>
                !!value.length
                    ? value.map((file) => (
                          <Flex key={file.url} jc="space-between">
                              <Subtext>{file.fname}</Subtext>
                              <Button
                                  onClick={() => downloadFile(file)}
                                  text={'Скачать'}
                                  background="transparent"
                                  textColor={Colors.green.main}
                                  width={'100%'}
                              />
                          </Flex>
                      ))
                    : '-',
        },
    ]
}

const downloadFile = (item: ApplicationFileOutput) => {
    const a = document.createElement('a')
    a.href = item.url
    a.download = item.fname
    a.target = '_blank'
    a.click()
    a.remove()
}
