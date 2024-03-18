// import { paginationList } from '@entities/all-teachers'
// import { userModel } from '@entities/user'
// import { SelectPage } from '@features/select'
import { Wrapper } from '@pages/pe-student/styled'
import { getDivisions } from '@shared/api/teacher-api'
import { Loader } from '@shared/ui/atoms/loader'
import PageBlock from '@shared/ui/page-block'
// import { useStore } from 'effector-react'
import React, { useState } from 'react'
// import { useRouteMatch } from 'react-router'
// import ListOfPeople from 'widgets/list-of-people'
import { Subdivisions } from './subdivisions'
import { Staff } from './staff'
import { Grid } from './styled/grid'
import GlobalSearch from '@shared/ui/global-search'
import SearchWithHints from '@features/search-with-hints'
import Flex from '@shared/ui/flex'

const Phonebook = () => {
    // const {
    //     data: { user },
    // } = userModel.selectors.useUser()
    // const route: { params: { filter?: string } } = useRouteMatch()

    // const items = useStore(paginationList.$items)
    // const filter = route.params.filter ?? user?.subdivisions?.[0].subdivision ?? ''

    // const underSearchText = (filter: SelectPage | null) => {
    //     if (!filter?.title) return null

    //     return `Кафедра: ${filter?.title} • Всего: ${items?.length ?? 0}`
    // }
    const [chosen, setChosen] = useState('')
    return (
        <Wrapper>
            <PageBlock>
                <Flex d="column" gap="15px">
                    <Grid columns="4fr 7fr" rows="1fr" columnGap="20px">
                        <SearchWithHints
                            width="100%"
                            value={''}
                            setValue={() => {}}
                            onHintClick={() => {}}
                            placeholder={'Структура'}
                            request={getDivisions}
                        />
                        <GlobalSearch placeholder={'Поиск'} searchApi={() => {}} validationCheck />
                    </Grid>
                    <Loader data={!null} error={null} load={() => {}}>
                        <Grid columns="4fr 7fr" rows="1fr" columnGap="20px">
                            <Subdivisions chosen={chosen} setChosen={setChosen} />
                            <Staff title={chosen} />
                        </Grid>
                    </Loader>
                </Flex>
                {/* <ListOfPeople
                    searchPlaceholder="Поиск сотрудников"
                    paginationList={paginationList}
                    filterRequest={getDivisions}
                    defaultFilter={filter}
                    filterPlaceholder="Подразделения"
                    underSearchText={underSearchText}
                /> */}
            </PageBlock>
        </Wrapper>
    )
}

export default Phonebook
