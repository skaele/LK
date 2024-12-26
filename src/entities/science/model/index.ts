import { getAllArticles, uploadArticle, UploadReq } from '@shared/api/science-api'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { createMutation } from '@farfetched/core'
import { popUpMessageModel } from '@entities/pop-up-message'
import { getDefaultColumns } from '@pages/science/lib/get-default-columns'
import { ColumnProps } from '@shared/ui/table/types'
import { TABLE_SIZE } from './consts'
import { Article, Filter, Sort } from '../types'
import { IndexRange } from 'react-virtualized'
import { scienceNameMap } from '../lib/nameMap'
import { createInputField } from '@shared/effector/form/create-input-field'
import { createCheckboxField } from '@shared/effector/form/create-checkbox-field'

const pageMounted = createEvent()
const tableOpened = createEvent()
const modalOpened = createEvent()
const setScopusFile = createEvent<File[]>()
const setWosFile = createEvent<File[]>()
const uploadFiles = createEvent<UploadReq>()
const selectArticle = createEvent<number>()
const setColumns = createEvent<ColumnProps[]>()
const getArticles = createEvent<{ offset: number }>()
const fetchArticles = createEvent<IndexRange>()
const sortPressed = createEvent<string>()
const filtersApplied = createEvent()
const filtersReset = createEvent()
const $filtersApplied = createStore(false)
    .on(filtersApplied, () => true)
    .on(filtersReset, () => false)
    .reset([pageMounted])

const fetchArticlesFx = createEffect(
    async ({ offset, sorts, filters }: { offset: number; sorts: Sort[] | null; filters: Filter[] | null }) => {
        return await getAllArticles({
            limit: TABLE_SIZE,
            offset,
            sorts: sorts ? sorts.map(({ field, order }) => ({ field: scienceNameMap[field], order })) : null,
            filters,
        })
    },
)

const articleTitleField = createInputField({ reset: pageMounted })
const publicationYearField = createInputField({ reset: pageMounted })
const publisherField = createInputField({ reset: pageMounted })
const quotesCountField = createInputField({ reset: pageMounted })
const isScopusCheck = createCheckboxField({ reset: pageMounted })
const isWoSCheck = createCheckboxField({ reset: pageMounted })
const uploadArticleMutation = createMutation({ handler: uploadArticle })
const $sorts = createStore<Sort[] | null>(null)
    .on(sortPressed, (sorts, field) => {
        if (!sorts) return [{ field, order: 'ASC' }]

        const existingField = sorts.find((sort) => sort.field === field)
        const filteredSorts = sorts.filter((sort) => sort.field !== field)
        if (existingField)
            return existingField.order === 'ASC'
                ? [...filteredSorts, { field, order: 'DESC' }]
                : filteredSorts.length
                ? filteredSorts
                : null

        return [...sorts, { field, order: 'ASC' }]
    })
    .reset(pageMounted)
const $articles = createStore<Article[]>([])
    .on(fetchArticlesFx.doneData, (store, { data }) => [...store, ...data])
    .reset([$sorts, filtersApplied, filtersReset])

const $totalCount = createStore<number>(0).on(fetchArticlesFx.doneData, (_, { totalCount }) => totalCount)
sample({
    clock: fetchArticlesFx.doneData,
    source: $totalCount,
    filter: (store, { totalCount }) => store !== totalCount,
    fn: (_, { totalCount }) => totalCount,
    target: $totalCount,
})
const $selectedArticles = createStore<Set<number>>(new Set())
    .on(selectArticle, (state, id) => {
        const newState = new Set(state)

        if (newState.has(id)) {
            newState.delete(id)
        } else {
            newState.add(id)
        }

        return newState
    })
    .reset(pageMounted)
const $scopusFile = createStore<File[]>([])
    .on(setScopusFile, (_, value) => value)
    .reset([uploadArticleMutation.finished.success, modalOpened])
const $wosFile = createStore<File[]>([])
    .on(setWosFile, (_, value) => value)
    .reset(uploadArticleMutation.finished.success, modalOpened)
const $filesUploaded = createStore<boolean>(false)
    .on(uploadArticleMutation.finished.success, () => true)
    .reset(modalOpened)
const $columns = createStore<ColumnProps[]>(getDefaultColumns())
    .on(setColumns, (_, value) => value)
    .reset(pageMounted)
sample({
    clock: tableOpened,
    fn: () => ({
        offset: 0,
        sorts: null,
        filters: null,
    }),
    target: fetchArticlesFx,
})

sample({
    clock: fetchArticles,
    source: {
        pending: fetchArticlesFx.inFlight,
        filtersApplied: $filtersApplied,
        sorts: $sorts,
        isWoSCheck: isWoSCheck.value,
        isScopusCheck: isScopusCheck.value,
        articleTitle: articleTitleField.value,
        publicationYear: publicationYearField.value,
        publisher: publisherField.value,
        quotesCount: quotesCountField.value,
    },
    filter: ({ pending }) => !pending,
    fn: (
        { sorts, filtersApplied, isWoSCheck, isScopusCheck, articleTitle, publicationYear, publisher, quotesCount },
        { startIndex },
    ) => {
        return {
            offset: startIndex,
            sorts,
            filters: filtersApplied
                ? [
                      ...(articleTitle
                          ? [
                                {
                                    field: 'ArticleTitle',
                                    operation: 'Like' as const,
                                    value: articleTitle,
                                },
                            ]
                          : []),
                      ...(isWoSCheck
                          ? [
                                {
                                    field: 'IsWoS',
                                    operation: 'Eq' as const,
                                    value: isWoSCheck,
                                },
                            ]
                          : []),
                      ...(isScopusCheck
                          ? [
                                {
                                    field: 'IsScopus',
                                    operation: 'Eq' as const,
                                    value: isScopusCheck,
                                },
                            ]
                          : []),
                      ...(publicationYear
                          ? [
                                {
                                    field: 'PublicationYear',
                                    operation: 'Eq' as const,
                                    value: Number(publicationYear),
                                },
                            ]
                          : []),
                      ...(publisher
                          ? [
                                {
                                    field: 'SourceTitle',
                                    operation: 'Like' as const,
                                    value: publisher,
                                },
                            ]
                          : []),
                      ...(quotesCount
                          ? [
                                {
                                    field: 'QuotesCount',
                                    operation: 'Eq' as const,
                                    value: Number(quotesCount),
                                },
                            ]
                          : []),
                  ]
                : null,
        }
    },
    target: fetchArticlesFx,
})
sample({
    clock: [$sorts, filtersApplied, filtersReset],
    source: {
        sorts: $sorts,
        filtersApplied: $filtersApplied,
        isWoSCheck: isWoSCheck.value,
        isScopusCheck: isScopusCheck.value,
        articleTitle: articleTitleField.value,
        publicationYear: publicationYearField.value,
        publisher: publisherField.value,
        quotesCount: quotesCountField.value,
    },
    fn: ({
        sorts,
        filtersApplied,
        isWoSCheck,
        isScopusCheck,
        publicationYear,
        publisher,
        quotesCount,
        articleTitle,
    }) => ({
        offset: 0,
        sorts,
        filters: filtersApplied
            ? [
                  ...(articleTitle
                      ? [
                            {
                                field: 'ArticleTitle',
                                operation: 'Like' as const,
                                value: articleTitle,
                            },
                        ]
                      : []),
                  ...(isWoSCheck
                      ? [
                            {
                                field: 'IsWoS',
                                operation: 'Eq' as const,
                                value: isWoSCheck,
                            },
                        ]
                      : []),
                  ...(isScopusCheck
                      ? [
                            {
                                field: 'IsScopus',
                                operation: 'Eq' as const,
                                value: isScopusCheck,
                            },
                        ]
                      : []),
                  ...(publicationYear
                      ? [
                            {
                                field: 'PublicationYear',
                                operation: 'Eq' as const,
                                value: Number(publicationYear),
                            },
                        ]
                      : []),
                  ...(publisher
                      ? [
                            {
                                field: 'SourceTitle',
                                operation: 'Like' as const,
                                value: publisher,
                            },
                        ]
                      : []),
                  ...(quotesCount
                      ? [
                            {
                                field: 'QuotesCount',
                                operation: 'Eq' as const,
                                value: Number(quotesCount),
                            },
                        ]
                      : []),
              ]
            : null,
    }),
    target: fetchArticlesFx,
})
sample({
    clock: uploadFiles,
    target: uploadArticleMutation.start,
})

sample({
    clock: uploadArticleMutation.finished.success,
    fn: () => ({
        message: 'Статья успешно загружена',
        type: 'success' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
sample({
    clock: uploadArticleMutation.finished.failure,
    fn: () => ({
        message: 'Произошла ошибка',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const stores = {
    articles: $articles,
    articlesLoading: fetchArticlesFx.inFlight,
    totalCount: $totalCount,
    selectedArticles: $selectedArticles,
    filesUploaded: $filesUploaded,
    scopusFile: $scopusFile,
    wosFile: $wosFile,
    uploadLoading: uploadArticleMutation.$pending,
    columns: $columns,

    sorts: $sorts,
    filtersApplied: $filtersApplied,

    articleTitle: articleTitleField.value,
    publicationYear: publicationYearField.value,
    publisher: publisherField.value,
    quotesCount: quotesCountField.value,
    isScopusCheck: isScopusCheck.value,
    isWoSCheck: isWoSCheck.value,
}

export const events = {
    tableOpened,
    pageMounted,
    selectArticle,
    uploadFiles,
    modalOpened,
    setScopusFile,
    setWosFile,
    setColumns,
    getArticles,
    fetchArticles,

    sortPressed,

    setArticleTitle: articleTitleField.setValue,
    setPublicationYear: publicationYearField.setValue,
    setPublisher: publisherField.setValue,
    setQuotesCount: quotesCountField.setValue,
    setIsScopusCheck: isScopusCheck.setValue,
    setIsWoSCheck: isWoSCheck.setValue,

    filtersApplied,
    filtersReset,
}
