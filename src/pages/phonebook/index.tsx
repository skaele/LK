import { Wrapper } from '@pages/pe-student/styled'
import { getDivisions } from '@shared/api/teacher-api'
import { Loader } from '@shared/ui/atoms/loader'
import PageBlock from '@shared/ui/page-block'
import React, { useEffect, useState } from 'react'
import { Subdivisions } from './subdivisions'
import { Staff } from './staff'
import { Grid } from './styled/grid'
import SearchWithHints from '@features/search-with-hints'
import Flex from '@shared/ui/flex'
// import { paginationList } from '@entities/all-teachers'
import Search, { Hint } from '@shared/ui/search'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Subdivision } from '@shared/api/model/phonebook'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { useHistory } from 'react-router'
import useDebounce from '@shared/lib/hooks/use-debounce'

const recursiveSubdivisionSearch = (subdivisions: Subdivision[], searchString: string): Subdivision[] | null => {
    const result: Subdivision[] = []
    const response = subdivisions.find((subdivision) => subdivision.name === searchString)

    if (!response) {
        for (const subdivision of subdivisions) {
            const res = recursiveSubdivisionSearch(subdivision.subdivs, searchString)
            if (res && res.length > 0) result.push(...res, subdivision)
        }
        return result
    } else {
        result.push(response)
    }

    return result
}

const Phonebook = () => {
    const query = useQueryParams()
    const subdivision = query.get('subdivision') || ''
    const fio = query.get('fio') || ''
    const history = useHistory()
    // const [filter, setFilter] = useState<Hint | null>({
    //     id: subdivision,
    //     value: subdivision,
    //     title: subdivision,
    // })
    const [subdivisions, error] = useUnit([phonebookModel.stores.subdivisions, phonebookModel.stores.error])

    // const { load } = paginationList
    // const handleSearch = async (value: string) => {
    //     await load({ filter, search: value })
    // }

    useEffect(() => {
        if (subdivision && subdivisions?.find) {
            onHintClick({ id: subdivision, value: subdivision, title: subdivision })
        }
    }, [subdivisions])

    const onHintClick = (hint: Hint | undefined) => {
        // setFilter(hint ?? null)
        const searched = (subdivisions && recursiveSubdivisionSearch(subdivisions, hint?.value ?? '')) || null
        phonebookModel.events.setSubdivisionPath(searched)
    }

    const { isMobile } = useCurrentDevice()

    const [lastSearch, setLastSearch] = useState('')
    const [searchValue, setSearchValue, loading] = useDebounce({
        onDebounce: (value: string) => {
            history.push({
                search: '?fio=' + value,
            })
        },
        delay: 400,
        defaultValue: fio,
        deps: [fio],
        triggerDelay: 200,
        triggerOn: (val) => {
            setLastSearch(val)
            return val.length > 0 && lastSearch !== val
        },
    })

    return (
        <Wrapper>
            <PageBlock>
                <Flex d="column" gap="15px">
                    <Grid columns={isMobile ? '1fr' : '4fr 7fr'} rows="1fr" columnGap="20px">
                        <SearchWithHints
                            width="100%"
                            value={subdivision}
                            setValue={(value) => {
                                history.push({
                                    search: '?subdivision=' + value,
                                })
                            }}
                            onHintClick={onHintClick}
                            placeholder={'Структура'}
                            request={getDivisions}
                        />
                        {!isMobile && (
                            <Search
                                value={searchValue}
                                setValue={setSearchValue}
                                loading={loading}
                                placeholder={'Сотрудник'}
                            />
                        )}
                    </Grid>
                    <Loader
                        data={subdivisions}
                        error={error}
                        load={() => {
                            phonebookModel.events.getSubdivisions()
                        }}
                        couldBeReloaded
                    >
                        <Grid columns={isMobile ? '1fr' : '4fr 7fr'} rows="1fr" columnGap="20px">
                            <Subdivisions />
                            {!isMobile && <Staff />}
                        </Grid>
                    </Loader>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

export default Phonebook
