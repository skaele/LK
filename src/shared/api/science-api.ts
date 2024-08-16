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
    // return [
    //     {
    //         id: '1',
    //         articleTitle: 'test',
    //         authors: 'test',
    //         doi: 'test',
    //         documentType: 'test',
    //         isScopus: true,
    //         isWos: true,
    //         sourceTitle: 'test',
    //     },
    //     {
    //         id: '2',
    //         articleTitle: 'test',
    //         authors: 'test',
    //         doi: 'test',
    //         documentType: 'test',
    //         isScopus: true,
    //         isWos: true,
    //         sourceTitle: 'test',
    //     },
    // ]
    const { data } = await $scienceApi.get<Article[]>(
        `/data/all?${new URLSearchParams({
            limit: limit.toString(),
            offset: offset.toString(),
            sorts: JSON.stringify(sorts),
        })}`,
    )
    return data
}

export const getArticle = async (id: string): Promise<Article> => {
    // return {
    //     articleTitle: 'test',
    //     authors: 'test',
    //     doi: 'test',
    //     documentType: 'test',
    //     isScopus: true,
    //     isWos: true,
    //     sourceTitle: 'test',
    //     id: '0001',
    // }
    const { data } = await $scienceApi.get<Article>(`/data/${id}`)

    return data
}
