import { Article, Changes, Sort } from '@entities/science/types'
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

export const getAllArticles = async ({
    limit,
    offset,
    sorts,
}: {
    limit: number
    offset: number
    sorts: Sort[] | null
}): Promise<Article[]> => {
    const { data } = await $scienceApi.post<Article[]>(`/data/all`, {
        limit: limit,
        offset: offset,
        sorts: sorts,
    })
    return data
}

export const getArticle = async (id: string): Promise<Article> => {
    const { data } = await $scienceApi.get<Article>(`/data/${id}`)

    return data
}
