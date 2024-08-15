import { getArticle, getAllArticles, uploadArticle } from '@shared/api/science-api'
import { createEffect, createEvent, createStore } from 'effector'
import { Article } from '../types'
import { createQuery } from '@farfetched/core'

const pageMounted = createEvent()
export const uploadArticleEffect = createEffect(uploadArticle)
export const getArticleEffect = createEffect(getArticle)
const getAllArticlesQuery = createQuery({ handler: getAllArticles })
const $article = createStore<Article | null>(null)

export const stores = {
    article: $article,
    articles: getAllArticlesQuery.$data,
    articlesLoading: getAllArticlesQuery.$pending,
}

export const events = { pageMounted }
