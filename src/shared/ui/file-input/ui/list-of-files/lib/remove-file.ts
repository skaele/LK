import { ClickEvent } from '@shared/ui/types'

const removeFile = (e: ClickEvent, name: string, files: File[]) => {
    e.preventDefault()
    e.stopPropagation()
    const tempFiles = files.filter((file) => file.name !== name)

    return [...tempFiles]
}

export default removeFile
