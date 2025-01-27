import { createQuery } from '@farfetched/core'
import { getArticle, getArticleDetails } from '@shared/api/science-api'
import { createEvent, sample } from 'effector'

const getDetailsClicked = createEvent<string>()
const pageMounted = createEvent<string>()
const getArticleQuery = createQuery({ handler: getArticle })
const getArticleDetailsQuery = createQuery({ handler: getArticleDetails })

sample({
    clock: pageMounted,
    target: getArticleQuery.start,
})

sample({
    clock: getDetailsClicked,
    target: getArticleDetailsQuery.start,
})

export const events = {
    pageMounted,
    getDetailsClicked,
}

export const stores = {
    article: getArticleQuery.$data,
    details: getArticleDetailsQuery.$data,
    loading: getArticleQuery.$pending,
    detailsLoading: getArticleDetailsQuery.$pending,
}
