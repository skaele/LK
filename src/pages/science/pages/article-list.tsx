import PageBlock from '@shared/ui/page-block'
import React, { useEffect, useState } from 'react'
import Table from '@shared/ui/table'
import Flex from '@shared/ui/flex'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import { scienceModel } from '@entities/science'
import { useUnit } from 'effector-react'
import { useHistory } from 'react-router'
import { ARTICLES } from '@app/routes/teacher-routes'
import { TABLE_SIZE } from '@entities/science/model/consts'

const PublicationList = () => {
    const history = useHistory()
    const [pageMounted, select, selected, articles, loading, columns, setPage] = useUnit([
        scienceModel.events.pageMounted,
        scienceModel.events.selectArticle,
        scienceModel.stores.selectedArticles,
        scienceModel.stores.articles,
        scienceModel.stores.articlesLoading,
        scienceModel.stores.columns,
        scienceModel.events.setPage,
    ])
    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <PageBlock outerPadding="10px">
            <Header />
            <Table
                loading={loading}
                columns={columns}
                data={articles?.data}
                maxOnPage={TABLE_SIZE}
                select={select}
                selected={selected}
                onRowClick={(row) => {
                    history.push(ARTICLES + `/${row.id}`)
                }}
                pagination={{
                    pages: articles?.totalCount || 0,
                    setPage: setPage,
                }}
            />
        </PageBlock>
    )
}

const Header = () => {
    const [select, selected, articles, columns, setColumns] = useUnit([
        scienceModel.events.selectArticle,
        scienceModel.stores.selectedArticles,
        scienceModel.stores.articles,
        scienceModel.stores.columns,
        scienceModel.events.setColumns,
    ])
    const [allSelected, setAllSelected] = useState(false)
    return (
        <Flex jc="space-between" w="100%">
            <Flex gap="1.5rem">
                <Button
                    onClick={() => {
                        if (allSelected) {
                            articles?.data?.map((_, index) => {
                                if (!selected.has(index)) {
                                    select(index)
                                }
                            })
                            setAllSelected(true)
                        } else {
                            articles?.data?.map((_, index) => {
                                select(index)
                            })
                            setAllSelected(false)
                        }
                    }}
                    text="Выбрать все"
                    background="var(--reallyBlue)"
                    textColor="#fff"
                    minWidth="35px"
                    height="36px"
                />
                <Button
                    onClick={() => {}}
                    text="Экспорт отчета"
                    background="var(--reallyBlue)"
                    textColor="#fff"
                    minWidth="35px"
                    height="36px"
                    isActive={false}
                />
            </Flex>
            <Button
                onClick={() => {
                    setColumns([
                        ...columns,
                        {
                            title: 'Новое поле',
                            field: '',
                            showFull: true,
                        },
                    ])
                }}
                text="Добавить поле"
                background="var(--reallyBlue)"
                textColor="#fff"
                minWidth="150px"
                height="36px"
                icon={<FiPlus />}
            />
        </Flex>
    )
}

export default PublicationList
