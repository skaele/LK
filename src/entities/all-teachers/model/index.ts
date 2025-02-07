import { createEffect } from 'effector'

import { teacherApi } from '@shared/api'
import { TTeacher } from '@shared/api/model'
import { createPaginationList } from '@shared/effector/create-pagination-list'
import { SelectPage } from '@shared/ui/select'

const getFetchTeachersFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<ServerListResponse<TTeacher>> => {
        const { search, page, limit, filter } = request
        const group = filter?.title === 'Все' ? '' : (filter?.title ?? '')

        const { data } = await teacherApi.get(search ?? '', group, page, limit)
        return { results: data.items }
    },
)

const paginationList = createPaginationList({
    getFx: getFetchTeachersFx,
    limit: 50,
})

export default paginationList
