import { articleModel } from '@entities/science'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { ColumnProps } from '@shared/ui/table/types'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useParams } from 'react-router'

const Article = () => {
    const { id } = useParams<{ id: string }>()
    const [article, loading, pageMounted] = useUnit([
        articleModel.stores.article,
        articleModel.stores.loading,
        articleModel.events.pageMounted,
    ])
    const [articleColumns, setArticleColumns] = useState<ColumnProps[]>([
        {
            title: 'Авторы',
            field: 'authors',
            width: '100px',
            showFull: true,
        },
        {
            title: 'Название пуликации',
            priority: 'one',
            field: 'articleTitle',
            width: '220px',
        },
        {
            title: 'Издательство',
            field: 'sourceTitle',
            width: '150px',
            showFull: true,
        },
        {
            title: 'Год',
            field: 'doi',
            width: '120px',
            align: 'center',
        },
        {
            title: 'Статус',
            field: '',
        },
    ])

    useEffect(() => {
        pageMounted(id)
    }, [])

    if (!article) {
        return null
    }

    return (
        <PageBlock outerPadding="10px">
            <Title align="left" size={2}>
                {article?.articleTitle}
            </Title>
            <Title align="left" size={2}>
                ID публикации
            </Title>
            <Flex jc="space-between">
                <Title align="left" size={2}>
                    {article?.id}
                </Title>
                <Button
                    onClick={() => {
                        setArticleColumns((cols) => [
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
            <Table loading={loading} columns={articleColumns} data={[article]} maxOnPage={7} />
            <Title align="left" size={2}>
                Список авторов из Московского Политеха
            </Title>
            <Table loading={loading} columns={columns} data={null} maxOnPage={7} />
            <Button
                onClick={() => {}}
                text="Добавить"
                background="var(--reallyBlue)"
                textColor="#fff"
                icon={<FiPlus />}
                minWidth="35px"
                height="36px"
            />
            <Flex w="100%" jc="center">
                <Button
                    onClick={() => {}}
                    text="Отобразить все поля данных"
                    background="var(--reallyBlue)"
                    textColor="#fff"
                    minWidth="35px"
                    isActive={false}
                    height="36px"
                />
            </Flex>
        </PageBlock>
    )
}

const columns: ColumnProps[] = [
    {
        title: '№',
        field: 'index',
    },
    {
        title: 'Фамилия',
        field: 'surname',
    },
    {
        title: 'Имя',
        field: 'fistname',
    },
    {
        title: 'Отчество',
        field: 'patronymic',
    },
    {
        title: 'Структурное подразделение',
        field: 'division',
    },
    {
        title: 'Факультет',
        field: 'faculty',
    },
    {
        title: 'WoS researcherID',
        field: 'wosId',
    },
    {
        title: 'Scopus authorID',
        field: 'scopusId',
    },
]

export default Article
