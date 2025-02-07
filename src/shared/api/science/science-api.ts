<<<<<<<< HEAD:src/shared/api/science/science-api.ts
import { Article, Changes, Filter, Sort } from '@shared/api/science/types'

import { $scienceApi } from '../config/science-config'
========
import { Article, Changes, Filter, Sort } from '@entities/science/types'

import { $scienceApi } from './config/science-config'
>>>>>>>> master:src/shared/api/science-api.ts

export type UploadReq = { scopusFile: File; wosFile: File }

export const uploadArticle = async ({ scopusFile, wosFile }: UploadReq) => {
    const formData = new FormData()
    formData.append('scopusFile', scopusFile)
    formData.append('wosFile', wosFile)

    const { data } = await $scienceApi.post<Changes>('/data', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data
}

export const getAllArticles = async (params: {
    limit: number
    offset: number
    sorts: Sort[] | null
    filters: Filter[] | null
}) => {
    const { data } = await $scienceApi.post<{ data: Article[]; totalCount: number }>(`/article/all`, params)
    return data
}

export const getArticle = async (id: string) => {
    const { data } = await $scienceApi.get<{ data: Article }>(`/article/${id}`)

    return data.data
}

export const getArticleDetails = async (id: string) => {
    const { data } = await $scienceApi.get(`/article/${id}/details`)

    return {
        titles: {
            scopus: convertKeysToLowerCase(data.titles.scopus),
            wos: convertKeysToLowerCase(data.titles.wos),
        },
        data: {
            scopus: convertKeysToLowerCase(data.data.scopus),
            wos: convertKeysToLowerCase(data.data.wos),
        },
    }
}
function convertKeysToLowerCase(obj: Record<string, any>): Record<string, any> {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key.toLowerCase()] = obj[key]
            return acc
        },
        {} as Record<string, any>,
    )
}
