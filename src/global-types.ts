import { ReactNode } from 'react'

declare global {
    type Nullable<T> = T | null | undefined
    type ChildrenType = Nullable<ReactNode[] | ReactNode | string>

    type EmptyObject = Record<string, never>
    type ServerListResponse<T extends Record<string, unknown> | EmptyObject> = {
        results?: T[]
    }

    type ServerListRequest<TFilter extends Record<string, unknown> | unknown> = {
        filter?: TFilter
        search?: string
        limit?: number
        page?: number
    }

    type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>
    }

    type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
        {
            [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>
        }[Keys]

    /**
     * Выбор типа. Если первый существует, финальный тип будет такой же. Если же нет - как второй
     */
    type TypeChoice<Prefered, Second> = Prefered extends void ? Second : Prefered
}

export {}
