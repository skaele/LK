import React, { ChangeEventHandler, useRef } from 'react'
import { GrAttachment } from 'react-icons/gr'

import { Button } from '../atoms'
import { ButtonProps } from '../button'

type UploadFileButtonProps = {
    setFiles(files: File[] | null): void
    // files: File[] | null
    className?: string
} & Pick<ButtonProps, 'isActive'>

export const UploadFileButton = ({ setFiles, className }: UploadFileButtonProps) => {
    const inputFileRef = useRef<HTMLInputElement | null>(null)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setFiles(Array.from(e?.target?.files ?? []))
    }

    const handleClick = () => {
        ;(inputFileRef?.current as unknown as HTMLInputElement)?.click()
    }

    return (
        <>
            <input
                ref={inputFileRef}
                type="file"
                accept=".jpg, .jpeg, .doc, .docx, .xls, .pdf, .png, .rtf, .rar, .zip, .gz, .txt"
                style={{ display: 'none' }}
                onChange={handleChange}
            />
            <Button
                icon={<GrAttachment />}
                width="37px"
                height="37px"
                isActive
                className={className}
                onClick={handleClick}
            />
        </>
    )
}
