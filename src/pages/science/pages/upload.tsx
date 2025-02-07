import React, { useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'

import { useUnit } from 'effector-react'
import { useModal } from 'widgets'
import { ScienceTable } from 'widgets/science-table'

import { scienceModel } from '@entities/science'

import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'

import { getDefaultColumns } from '../lib/get-default-columns'
import { UploadModal } from '../widgets/upload-modal'

const Science = () => {
    const { open } = useModal()
    const [pageMounted, modalOpened] = useUnit([scienceModel.events.pageMounted, scienceModel.events.modalOpened])

    useEffect(() => {
        pageMounted()
    }, [])
    return (
        <PageBlock
            outerPadding="10px"
            height="100%"
            topRightCornerElement={
                <Button
                    onClick={() => {
                        modalOpened()
                        open(<UploadModal />, 'Загрузить данные')
                    }}
                    text="Загрузить"
                    background="var(--reallyBlue)"
                    textColor="#fff"
                    icon={<FiPlus />}
                    minWidth="35px"
                    height="36px"
                    shrinkTextInMobile
                />
            }
        >
            <ScienceTable columns={getDefaultColumns()} />
            <Flex jc="flex-end" w="100%">
                <Button
                    onClick={() => {}}
                    text="Сохранить"
                    background="var(--reallyBlue)"
                    textColor="#fff"
                    minWidth="35px"
                    height="36px"
                    isActive={false}
                />
            </Flex>
        </PageBlock>
    )
}

export default Science
