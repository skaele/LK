import { scienceModel } from '@entities/science'
import { SubmitButton } from '@shared/ui/atoms'
import FileInput from '@shared/ui/file-input'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useModal } from 'widgets'

export const UploadModal = () => {
    return (
        <Flex d="column" gap="0.5rem">
            <Flex gap="1rem" ai="flex-start">
                <ScopusFileInput />
                <WosFileInput />
            </Flex>
            <Submit />
        </Flex>
    )
}

const ScopusFileInput = () => {
    const [scopusFiles, setScopusFiles] = useUnit([scienceModel.stores.scopusFile, scienceModel.events.setScopusFile])
    return (
        <Flex d="column" w="50%">
            <Title size={4} align="left">
                Scopus
            </Title>
            <FileInput
                files={scopusFiles}
                isActive={true}
                setFiles={setScopusFiles}
                maxFiles={1}
                formats={['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']}
            />
        </Flex>
    )
}

const WosFileInput = () => {
    const [wosFiles, setWosFiles] = useUnit([scienceModel.stores.wosFile, scienceModel.events.setWosFile])
    return (
        <Flex d="column" w="50%">
            <Title size={4} align="left">
                WoS
            </Title>
            <FileInput
                files={wosFiles}
                isActive={true}
                setFiles={setWosFiles}
                maxFiles={1}
                formats={['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']}
            />
        </Flex>
    )
}

const Submit = () => {
    const { close } = useModal()

    const [scopusFiles, wosFiles, uploadFiles, filesUploaded, loading] = useUnit([
        scienceModel.stores.scopusFile,
        scienceModel.stores.wosFile,
        scienceModel.events.uploadFiles,
        scienceModel.stores.filesUploaded,
        scienceModel.stores.uploadLoading,
    ])

    useEffect(() => {
        if (filesUploaded) close()
    }, [filesUploaded])

    return (
        <SubmitButton
            text="Загрузить"
            action={() => {
                uploadFiles({ scopusFile: scopusFiles[0], wosFile: wosFiles[0] })
            }}
            completed={filesUploaded}
            isLoading={loading}
            popUpFailureMessage="Необходимо загрузить оба файла!"
            background="var(--reallyBlue)"
            height="36px"
            width="108px"
            isActive={scopusFiles.length > 0 && wosFiles.length > 0}
        />
    )
}
