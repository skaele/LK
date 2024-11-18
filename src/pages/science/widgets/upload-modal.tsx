import { scienceModel } from '@entities/science'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { SubmitButton } from '@shared/ui/atoms'
import FileInput from '@shared/ui/file-input'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useModal } from 'widgets'

export const UploadModal = () => {
    const { isMobile } = useCurrentDevice()
    return (
        <Flex d="column" gap="0.5rem" mw="calc(800px + 1rem)">
            <Flex gap="1rem" ai="flex-start" d={isMobile ? 'column' : 'row'}>
                <ScopusFileInput />
                <WosFileInput />
            </Flex>
            <Submit />
        </Flex>
    )
}

const ScopusFileInput = () => {
    const { isMobile } = useCurrentDevice()
    const [scopusFiles, setScopusFiles] = useUnit([scienceModel.stores.scopusFile, scienceModel.events.setScopusFile])
    return (
        <Flex d="column" w={isMobile ? '100%' : '50%'} mw={isMobile ? '100%' : '400px'}>
            <Title size={4} align="left">
                Scopus
            </Title>
            <FileInput files={scopusFiles} isActive={true} setFiles={setScopusFiles} maxFiles={1} formats={['csv']} />
        </Flex>
    )
}

const WosFileInput = () => {
    const { isMobile } = useCurrentDevice()
    const [wosFiles, setWosFiles] = useUnit([scienceModel.stores.wosFile, scienceModel.events.setWosFile])
    return (
        <Flex d="column" w={isMobile ? '100%' : '50%'} mw={isMobile ? '100%' : '400px'}>
            <Title size={4} align="left">
                WoS
            </Title>
            <FileInput files={wosFiles} isActive={true} setFiles={setWosFiles} maxFiles={1} formats={['csv']} />
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
