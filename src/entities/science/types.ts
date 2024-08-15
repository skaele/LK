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
    doi: string
    authors: string
    articleTitle: string
    sourceTitle: string
    documentType: string
    isWos: boolean
    isScopus: boolean
}
export type Sort = {
    field: string
    order?: 'asc' | 'desc'
}
