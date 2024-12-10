export type Changes = Record<
    string,
    Record<
        string,
        {
            old: object | null
            new: object | null
        }
    >
>
export type Article = {
    id: string
    doi: string
    authors: string
    articleTitle: string
    isWoS: boolean
    isScopus: boolean
    publisher: string
    pageNumber: string
    publicationType: string
    fundingSource: string
    publicationYear: string
    quotesCount: string
}
export type Sort = {
    field: string
    order?: 'asc' | 'desc'
}
