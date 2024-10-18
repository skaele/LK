import { FileFormat, FileFormats, VALID_FORMATS } from '@shared/constants'

const validateFile = (file: File, allowedTypes?: FileFormats) => {
    return (
        (allowedTypes?.map((type) => VALID_FORMATS[type]) ?? Object.values(VALID_FORMATS)).indexOf(
            file.type as FileFormat,
        ) !== -1
    )
}

export default validateFile
