import React from 'react'

import { confirmModel } from '@entities/confirm'

import { FileInputProps } from '@ui/file-input'
import List from '@ui/list'

import File from './ui/file'

type Props = Pick<FileInputProps, 'files' | 'setFiles'> & { hideHeader?: boolean; className?: string }

const ListOfFiles = ({ files, setFiles, hideHeader, className }: Props) => {
    const listProps = hideHeader
        ? {}
        : {
              title: 'Список файлов',
              visible: !!files.length,
              onDelete: () => {
                  confirmModel.events.evokeConfirm({
                      message: 'Вы уверены, что хотите удалить все файлы?',
                      onConfirm: () => setFiles([]),
                  })
              },
          }

    return (
        <List {...listProps} className={className}>
            {files.map((file) => {
                return <File file={file} files={files} setFiles={setFiles} key={file.name} />
            })}
        </List>
    )
}

export default ListOfFiles
