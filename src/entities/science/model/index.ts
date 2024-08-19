import { getAllArticles, uploadArticle, UploadReq } from '@shared/api/science-api'
import { createEvent, createStore, sample } from 'effector'
import { createMutation, createQuery } from '@farfetched/core'
import { popUpMessageModel } from '@entities/pop-up-message'

const pageMounted = createEvent()
const modalOpened = createEvent()
const setScopusFile = createEvent<File[]>()
const setWosFile = createEvent<File[]>()
const uploadFiles = createEvent<UploadReq>()
const selectArticle = createEvent<number>()

export const uploadArticleMutation = createMutation({ handler: uploadArticle })
const getAllArticlesQuery = createQuery({ handler: getAllArticles })

const $selectedArticles = createStore<Set<number>>(new Set()).on(selectArticle, (state, id) => {
    const newState = new Set(state)

    if (newState.has(id)) {
        newState.delete(id)
    } else {
        newState.add(id)
    }

    return newState
})
const $scopusFile = createStore<File[]>([])
    .on(setScopusFile, (_, value) => value)
    .reset([uploadArticleMutation.finished.success, modalOpened])
const $wosFile = createStore<File[]>([])
    .on(setWosFile, (_, value) => value)
    .reset(uploadArticleMutation.finished.success, modalOpened)
const $filesUploaded = createStore<boolean>(false)
    .on(uploadArticleMutation.finished.success, () => true)
    .reset(modalOpened)

sample({
    clock: pageMounted,
    fn: () => ({
        limit: 10,
        offset: 0,
        sorts: null,
    }),
    target: getAllArticlesQuery.start,
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
    articles: getAllArticlesQuery.$data,
    articlesLoading: getAllArticlesQuery.$pending,
    selectedArticles: $selectedArticles,
    filesUploaded: $filesUploaded,
    scopusFile: $scopusFile,
    wosFile: $wosFile,
    uploadLoading: uploadArticleMutation.$pending,
}

export const events = { pageMounted, selectArticle, uploadFiles, modalOpened, setScopusFile, setWosFile }
