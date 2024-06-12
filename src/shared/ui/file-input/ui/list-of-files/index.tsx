import { FileInputProps } from '@ui/file-input'
import List from '@ui/list'
import File from './ui/file'
import React from 'react'
import { confirmModel } from '@entities/confirm'

type Props = Pick<FileInputProps, 'files' | 'setFiles'> & { hideHeader?: boolean }

const ListOfFiles = ({ files, setFiles, hideHeader }: Props) => {
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
        <List {...listProps}>
            {files.map((file) => {
                return <File file={file} files={files} setFiles={setFiles} key={file.name} />
            })}
        </List>
    )
}

export default ListOfFiles
