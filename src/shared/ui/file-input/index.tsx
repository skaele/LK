import React from 'react'

import List from '@ui/list'

import { FileFormats } from '@shared/constants'

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
