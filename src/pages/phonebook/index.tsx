import { paginationList } from '@entities/all-teachers'
import { userModel } from '@entities/user'
import { PageWrapper } from '@features/payments'
import { SelectPage } from '@features/select'
import { getDivisions } from '@shared/api/teacher-api'
import { Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { useStore } from 'effector-react'
import React from 'react'
import { useRouteMatch } from 'react-router'
import ListOfPeople from 'widgets/list-of-people'

const Phonebook = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { $items } = paginationList
    const route: { params: { filter?: string } } = useRouteMatch()

    const items = useStore($items)
    const filter = route.params.filter ?? user?.subdivisions?.[0].subdivision ?? ''

    const underSearchText = (filter: SelectPage | null) => {
        if (!filter?.title) return null

        return `Кафедра: ${filter?.title} • Всего: ${items?.length ?? 0}`
    }
    return (
        <Wrapper load={() => {}} error={null} data={items}>
            <PageWrapper>
                <PageBlock>
                    <ListOfPeople
                        searchPlaceholder="Поиск сотрудников"
                        paginationList={paginationList}
                        filterRequest={getDivisions}
                        defaultFilter={filter}
                        filterPlaceholder="Подразделения"
                        underSearchText={underSearchText}
                    />
                </PageBlock>
            </PageWrapper>
        </Wrapper>
    )
}

export default Phonebook
