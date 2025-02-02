import React from 'react'

import { FileFormats } from '@shared/consts'
import List from '@shared/ui/list'

import DragAndDropArea from './ui/drag-and-drop-area'
import ListOfFiles from './ui/list-of-files'

export interface FileInputProps {
    title?: string
    maxFileSizeInMegaBytes?: number
    files: File[]
    setFiles: (args: any) => void
    isActive: boolean
    maxFiles?: number
    formats?: FileFormats
}

const FileInput = (props: FileInputProps) => {
    return (
        <List gap={12}>
            <DragAndDropArea {...props} />
            <ListOfFiles files={props.files} setFiles={props.setFiles} />
        </List>
    )
}

export default FileInput
