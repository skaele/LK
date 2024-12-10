import React, { useEffect, useRef } from 'react'
import Flex from '@shared/ui/flex'
import { Header } from './ui/header'
import { AutoSizer, InfiniteLoader, List, ListRowProps } from 'react-virtualized'
import { TABLE_SIZE } from '@entities/science/model/consts'
import { scienceModel } from '@entities/science'
import { Row } from '@shared/ui/table/ui'
import { useUnit } from 'effector-react'
import { ColumnProps } from '@shared/ui/table/types'
import { IndexedProperties } from '@shared/models/indexed-properties'
import styled from 'styled-components'

export const ScienceTable = ({
    columns,
    onRowClick,
}: {
    columns: ColumnProps[]
    onRowClick?: (obj: IndexedProperties) => void
}) => {
    const [select, selected, articles, totalCount, fetchArticles, search, setSearch] = useUnit([
        scienceModel.events.selectArticle,
        scienceModel.stores.selectedArticles,
        scienceModel.stores.articles,
        scienceModel.stores.totalCount,
        scienceModel.events.fetchArticles,
        scienceModel.stores.search,
        scienceModel.events.setSearch,
    ])
    function isRowLoaded({ index }: { index: number }) {
        return index < articles.length
    }

    const rowRenderer = ({ index, key, style }: ListRowProps) => {
        return (
            <div style={style} key={key}>
                {articles[index] ? (
                    <Row
                        onRowClick={onRowClick}
                        padding="10px"
                        columns={columns}
                        el={articles[index]}
                        index={index}
                        selected={selected?.has(index)}
                        select={select}
                        height="100px"
                    />
                ) : (
                    <Flex h="100px" p="0.5rem 1rem" jc="flex-start" ai="center">
                        Загрузка...
                    </Flex>
                )}
            </div>
        )
    }

    const scrollRef = useRef<List | null>(null)
    useEffect(() => {
        if (articles.length === 0) scrollRef.current?.scrollToPosition(0)
    }, [articles])

    return (
        <Wrapper d="column" jc="flex-start" ai="flex-start" position="relative" h="100%" w="100%">
            <Header columns={columns} padding="10px" tableHasSelect />
            <Container>
                <InfiniteLoader
                    minimumBatchSize={TABLE_SIZE}
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={async ({ startIndex, stopIndex }) => {
                        fetchArticles({ startIndex, stopIndex })
                    }}
                    rowCount={totalCount}
                >
                    {({ onRowsRendered, registerChild }) => (
                        <AutoSizer>
                            {({ height, width }) => (
                                <List
                                    ref={(list) => {
                                        scrollRef.current = list
                                        registerChild(list) // Register with InfiniteLoader
                                    }}
                                    onRowsRendered={onRowsRendered}
                                    height={height}
                                    rowCount={totalCount}
                                    rowHeight={100}
                                    rowRenderer={rowRenderer}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    )}
                </InfiniteLoader>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled(Flex)`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`

const Container = styled.div`
    height: 100%;
    width: 100%;
`
