import React, { ChangeEventHandler, useRef } from 'react'
import { Button } from '../atoms'
import { GrAttachment } from 'react-icons/gr'

type UploadFileButtonProps = {
    setFiles(files: File[] | null): void
    // files: File[] | null
    className?: string
}

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
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleChange}
            />
            <Button icon={<GrAttachment />} className={className} onClick={handleClick} />
        </>
    )
}
