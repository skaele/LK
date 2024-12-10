import { Article, Changes, Filter, Sort } from '@entities/science/types'
import { $scienceApi } from './config/science-config'

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
