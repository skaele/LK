import { Wrapper } from '@pages/pe-student/styled'
import { getDivisions } from '@shared/api/teacher-api'
import { Loader } from '@shared/ui/atoms/loader'
import PageBlock from '@shared/ui/page-block'
import React, { useEffect, useState } from 'react'
import { Subdivisions } from './subdivisions'
import { Staff } from './staff'
import { Grid } from '../../shared/ui/grid'
import SearchWithHints from '@features/search-with-hints'
import Flex from '@shared/ui/flex'
import Search, { Hint } from '@shared/ui/search'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { useHistory } from 'react-router'
import useDebounce from '@shared/lib/hooks/use-debounce'
import { setSubdivisionPath } from './lib/set-subdivision-path'
import { ALL_TEACHERS_ROUTE } from '@app/routes/general-routes'

const AllStaff = () => {
    const query = useQueryParams()
    const subdivision = query.get('subdivision') || ''
    const fio = query.get('fio') || ''
    const history = useHistory()
    const [subdivisions, error, subdivisionsLoading] = useUnit([
        phonebookModel.stores.subdivisions,
        phonebookModel.stores.error,
        phonebookModel.stores.pedningGetSubdividions,
    ])

    useEffect(() => {
        if (subdivision && subdivisions?.find) {
            onHintClick({ id: subdivision, value: subdivision, title: subdivision })
        }
    }, [subdivisions])

    const onHintClick = (hint: Hint | undefined) => {
        if (subdivisions) {
            setSubdivisionPath(subdivisions, hint?.value ?? '')
        }
    }

    const { isMobile } = useCurrentDevice()

    const [lastSearch, setLastSearch] = useState('')
    const setFio = (value: string) => {
        history.push({ search: new URLSearchParams({ subdivision, fio: value }).toString() })
    }
    const [searchValue, setSearchValue, loading] = useDebounce({
        onDebounce: setFio,
        delay: 400,
        defaultValue: fio,
        triggerDelay: 200,
        triggerOn: (val) => {
            setLastSearch(val)
            return lastSearch !== val
        },
        onClear: setFio,
    })

    // TODO: remove after all-staff mobile version is ready
    // #ASM
    if (isMobile) history.push(`${ALL_TEACHERS_ROUTE}/${subdivision}`)

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
                                    search: new URLSearchParams({ subdivision: value, fio }).toString(),
                                })
                                if (value === '' && subdivisions) {
                                    setSubdivisionPath(subdivisions, value)
                                }
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
                        loading={subdivisionsLoading}
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

export default AllStaff
