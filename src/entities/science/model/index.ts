import { getArticle, getAllArticles, uploadArticle } from '@shared/api/science-api'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { Article } from '../types'
import { createQuery } from '@farfetched/core'

const pageMounted = createEvent()
const selectArticle = createEvent<number>()

export const uploadArticleEffect = createEffect(uploadArticle)
export const getArticleEffect = createEffect(getArticle)
const getAllArticlesQuery = createQuery({ handler: getAllArticles })

const $article = createStore<Article | null>(null)
const $selectedArticles = createStore<Set<number>>(new Set()).on(selectArticle, (state, id) => {
    const newState = new Set(state)

    if (newState.has(id)) {
        newState.delete(id)
    } else {
        newState.add(id)
    }

    return newState
})

sample({
    clock: pageMounted,
    fn: () => ({
        limit: 10,
        offset: 0,
        sorts: null,
    }),
    target: getAllArticlesQuery.start,
})

export const stores = {
    article: $article,
    articles: getAllArticlesQuery.$data,
    articlesLoading: getAllArticlesQuery.$pending,
    selectedArticles: $selectedArticles,
}

export const events = { pageMounted, selectArticle }
