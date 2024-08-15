import { Article, Changes, Sort } from '@entities/science/types'
import { $scienceApi } from './config/science-config'

export const uploadArticle = async ({ scopusFile, wosFile }: { scopusFile: File; wosFile: File }) => {
    const formData = new FormData()
    formData.append('scopusFile', scopusFile)
    formData.append('wosFile', wosFile)

    const { data } = await $scienceApi.post<Changes>('/data/upload', formData, {
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
}) => {
    const { data } = await $scienceApi.get<Article[]>(
        `/data/all?${new URLSearchParams({
            limit: limit.toString(),
            offset: offset.toString(),
            sorts: JSON.stringify(sorts),
        })}`,
    )

    return data
}

export const getArticle = async (id: string) => {
    const { data } = await $scienceApi.get<Article>(`/data/${id}`)

    return data
}
