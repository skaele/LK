import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import React, { useEffect } from 'react'
import { useUnit } from 'effector-react'
import { scienceModel } from '@entities/science'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import Flex from '@shared/ui/flex'
import { getScienceColumns } from '../lib/get-columns'

const Science = () => {
    const [pageMounted, select, selected, articles, loading] = useUnit([
        scienceModel.events.pageMounted,
        scienceModel.events.selectArticle,
        scienceModel.stores.selectedArticles,
        scienceModel.stores.articles,
        scienceModel.stores.articlesLoading,
    ])

    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <PageBlock
            topRightCornerElement={
                <Button
                    onClick={() => {}}
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
                data={articles}
                maxOnPage={7}
                select={select}
                selected={selected}
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
