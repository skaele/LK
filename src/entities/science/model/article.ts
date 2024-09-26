import { createEvent, sample } from 'effector'
import { createQuery } from '@farfetched/core'
import { getArticle } from '@shared/api/science-api'

const pageMounted = createEvent<string>()
const getArticleQuery = createQuery({ handler: getArticle })

sample({
    clock: pageMounted,
    target: getArticleQuery.start,
})

export const events = {
    pageMounted,
}

export const stores = {
    article: getArticleQuery.$data,
    loading: getArticleQuery.$pending,
}
