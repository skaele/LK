import { phonebookModel } from '@entities/phonebook'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { setSubdivisionPath } from '../lib/set-subdivision-path'
import Search, { Hint } from '@shared/ui/search'
import useDebounce from '@shared/lib/hooks/use-debounce'
import SearchWithHints from '@features/search-with-hints'
import { getDivisions } from '@shared/api/teacher-api'

export const SearchBar = () => {
    const query = useQueryParams()
    // I use one query param 'cause there is no space for two search fields on mobile devices
    const search = query.get('search') || '/'
    const [subdivision, fio] = search.split('/')
    const history = useHistory()
    const subdivisions = useUnit(phonebookModel.stores.subdivisions)
    useEffect(() => {
        if (subdivision && subdivisions?.find) {
            onHintClick({ id: subdivision, value: subdivision, title: subdivision })
        }
    }, [subdivisions])

    const onHintClick = (hint?: Hint) => {
        if (subdivisions) {
            setSubdivisionPath(subdivisions, hint?.value ?? '')
        }
    }
    const [lastSearch, setLastSearch] = useState('')
    const setFio = (value: string) => {
        history.push({ search: new URLSearchParams({ search: subdivision + '/' + value }).toString() })
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
    return (
        <>
            <SearchWithHints
                width="100%"
                value={subdivision}
                setValue={(value) => {
                    history.push({
                        search: new URLSearchParams({ search: value + '/' + fio }).toString(),
                    })
                    if (value === '' && subdivisions) {
                        setSubdivisionPath(subdivisions, value)
                    }
                }}
                onHintClick={onHintClick}
                placeholder={'Структура'}
                request={getDivisions}
            />

            <Search value={searchValue} setValue={setSearchValue} loading={loading} placeholder={'Сотрудник'} />
        </>
    )
}
