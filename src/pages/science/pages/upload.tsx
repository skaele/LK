import PageBlock from '@shared/ui/page-block'
import React, { useEffect } from 'react'
import { useUnit } from 'effector-react'
import { scienceModel } from '@entities/science'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import Flex from '@shared/ui/flex'
import { useModal } from 'widgets'
import { UploadModal } from '../widgets/upload-modal'
import { ScienceTable } from 'widgets/science-table'
import { getDefaultColumns } from '../lib/get-default-columns'

const Science = () => {
    const { open } = useModal()
    const [pageMounted, totalCount, modalOpened] = useUnit([
        scienceModel.events.pageMounted,
        scienceModel.stores.totalCount,
        scienceModel.events.modalOpened,
    ])

    useEffect(() => {
        pageMounted()
    }, [])

    if (!totalCount) {
        return null
    }
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
