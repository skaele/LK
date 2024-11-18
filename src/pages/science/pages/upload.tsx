import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import React, { useEffect } from 'react'
import { useUnit } from 'effector-react'
import { scienceModel } from '@entities/science'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import Flex from '@shared/ui/flex'
import { getScienceColumns } from '../lib/get-columns'
import { useModal } from 'widgets'
import { UploadModal } from '../widgets/upload-modal'
import { TABLE_SIZE } from '@entities/science/model/consts'

const Science = () => {
    const { open } = useModal()
    const [pageMounted, select, selected, articles, loading, modalOpened, setPage] = useUnit([
        scienceModel.events.pageMounted,
        scienceModel.events.selectArticle,
        scienceModel.stores.selectedArticles,
        scienceModel.stores.articles,
        scienceModel.stores.articlesLoading,
        scienceModel.events.modalOpened,
        scienceModel.events.setPage,
    ])

    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <PageBlock
            outerPadding="10px"
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
            <Table
                loading={loading}
                columns={getScienceColumns()}
                data={articles?.data}
                maxOnPage={TABLE_SIZE}
                select={select}
                selected={selected}
                pagination={{
                    pages: articles?.totalCount || 0,
                    setPage: setPage,
                }}
            />
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
