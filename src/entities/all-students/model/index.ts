import { createEffect } from 'effector'

import { studentApi } from '@shared/api'
import { TStudent } from '@shared/api/model'
import { createPaginationList } from '@shared/effector/create-pagination-list'
import { SelectPage } from '@shared/ui/select'

const getFetchStudentsFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<ServerListResponse<TStudent>> => {
        const { search = '', page, limit, filter } = request
        const { data } = await studentApi.get(search, filter?.id.toString() ?? '', page, limit)
        return { results: data.items }
    },
)

const paginationList = createPaginationList({
    getFx: getFetchStudentsFx,
    limit: 50,
})

export default paginationList
