import { FileFormats, MAX_FILE_SIZE } from '@shared/constants'
import { popUpMessageModel } from '@entities/pop-up-message'
import { getFileSize } from './get-file-size'
import getFormatName from './get-format-name'
import validateFile from './validate-file'
import { DEFAULT_FILE_FORMATS } from '@shared/ui/file-input/consts'

const loadFiles = (
    loadedFiles: FileList,
    files: File[],
    maxFiles?: number,
    allowedFormats?: FileFormats,
    maxFileMB: number = MAX_FILE_SIZE,
) => {
    if (!!maxFiles && files.length + loadedFiles.length > maxFiles) {
        popUpMessageModel.events.evokePopUpMessage({
            message: `Нельзя загрузить больше ${maxFiles} файлов`,
            type: 'failure',
        })
        return files
    }
    for (let i = 0; i < loadedFiles.length; i++) {
        if (validateFile(loadedFiles[i], allowedFormats)) {
            if (loadedFiles[i].size > getFileSize(maxFileMB)) {
                popUpMessageModel.events.evokePopUpMessage({
                    message: `Размер файла слишком большой. Максимальный размер файла: ${maxFileMB} MB`,
                    type: 'failure',
                    time: 10000,
                })
                return files
            } else {
                return [...files, loadedFiles[i]]
            }
        } else {
            // eslint-disable-next-line no-console
            console.log(loadedFiles[i])

            popUpMessageModel.events.evokePopUpMessage({
                message: `Неверный формат файла. Доступные форматы: ${
                    allowedFormats?.map((format) => getFormatName(format)) ?? DEFAULT_FILE_FORMATS
                }`,
                type: 'failure',
                time: 5000,
            })
            return files
        }
    }
}

export default loadFiles
