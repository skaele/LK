import PageBlock from '@shared/ui/page-block'
import React, { useEffect, useState } from 'react'
import Table from '@shared/ui/table'
import Flex from '@shared/ui/flex'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import { scienceModel } from '@entities/science'
import { useUnit } from 'effector-react'
import { ColumnProps } from '@shared/ui/table/types'
import { useHistory } from 'react-router'
import { ARTICLES } from '@app/routes/teacher-routes'

const PublicationList = () => {
    const history = useHistory()
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

    const [allSelected, setAllSelected] = useState(false)

    const [columns, setColumns] = useState<ColumnProps[]>([
        {
            title: 'Название пуликации',
            priority: 'one',
            field: 'articleTitle',
            width: '220px',
        },
        {
            title: 'Авторы',
            field: 'authors',
            width: '100px',
            showFull: true,
        },
        {
            title: 'Год',
            field: 'doi',
            width: '120px',
            align: 'center',
            catalogs: [
                { id: '2020', title: '2020' },
                { id: '2021', title: '2021' },
                { id: '2022', title: '2022' },
                { id: '2023', title: '2023' },
                { id: '2024', title: '2024' },
            ],
        },
        {
            title: 'Издательство',
            field: 'sourceTitle',
            width: '150px',
            showFull: true,
        },
    ])

    return (
        <PageBlock>
            <Flex jc="space-between" w="100%">
                <Flex gap="1.5rem">
                    <Button
                        onClick={() => {
                            if (allSelected) {
                                articles?.map((_, index) => {
                                    if (!selected.has(index)) {
                                        select(index)
                                    }
                                })
                                setAllSelected(true)
                            } else {
                                articles?.map((_, index) => {
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
                        setColumns((cols) => [
                            ...cols,
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
            <Table
                loading={loading}
                columns={columns}
                data={articles}
                maxOnPage={7}
                select={select}
                selected={selected}
                onRowClick={(row) => {
                    history.push(ARTICLES + `/${row.id}`)
                }}
            />
        </PageBlock>
    )
}

export default PublicationList
