import { Wrapper } from '@pages/pe-student/styled'
import { getDivisions } from '@shared/api/teacher-api'
import { Loader } from '@shared/ui/atoms/loader'
import PageBlock from '@shared/ui/page-block'
import React, { useState } from 'react'
import { Subdivisions } from './subdivisions'
import { Staff } from './staff'
import { Grid } from './styled/grid'
import GlobalSearch from '@shared/ui/global-search'
import SearchWithHints from '@features/search-with-hints'
import Flex from '@shared/ui/flex'
import { paginationList } from '@entities/all-teachers'
import { Hint } from '@shared/ui/search'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import useResize from '@shared/lib/hooks/use-resize'

const Phonebook = () => {
    const [subdivisionSearch, setSubdivisionSearch] = useState('')
    const [filter, setFilter] = useState<Hint | null>({
        id: subdivisionSearch,
        value: subdivisionSearch,
        title: subdivisionSearch,
    })

    const { load } = paginationList
    const handleSearch = async (value: string) => {
        await load({ filter, search: value })
    }

    const onHintClick = (hint: Hint | undefined) => {
        setFilter(hint ?? null)
    }

    const subdivisions = useUnit(phonebookModel.stores.$subdivisions)
    const { width } = useResize()
    width
    return (
        <Wrapper>
            <PageBlock>
                <Flex d="column" gap="15px">
                    <Grid columns={width <= 800 ? '1fr' : '4fr 7fr'} rows="1fr" columnGap="20px">
                        <SearchWithHints
                            width="100%"
                            value={subdivisionSearch}
                            setValue={setSubdivisionSearch}
                            onHintClick={onHintClick}
                            placeholder={'Структура'}
                            request={getDivisions}
                        />
                        {width > 800 && (
                            <GlobalSearch
                                triggerSearchOn={[filter?.id ?? '']}
                                placeholder={'Поиск'}
                                searchApi={handleSearch}
                                validationCheck
                            />
                        )}
                    </Grid>
                    <Loader
                        data={subdivisions}
                        error={null}
                        load={() => {
                            phonebookModel.events.getSubdivisions({})
                        }}
                    >
                        <Grid columns={width <= 800 ? '1fr' : '4fr 7fr'} rows="1fr" columnGap="20px">
                            <Subdivisions />
                            {width > 800 && <Staff />}
                        </Grid>
                    </Loader>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

export default Phonebook
