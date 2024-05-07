import useQueryParams from '@shared/lib/hooks/use-query-params'
import React from 'react'
import useDebounce from '@shared/lib/hooks/use-debounce'
import { useHistory } from 'react-router'
import Search from '@shared/ui/search'

export const MobileSearch = () => {
    const history = useHistory()
    const query = useQueryParams()
    // I use one query param 'cause there is no space for two search fields on mobile devices
    const search = query.get('search') || '/'
    const [subdivision, fio] = search.split('/')
    const searchFormatted = fio ? (subdivision ? search : search.slice(1)) : search.slice(0, -1)
    const setSearch = (value: string) => {
        history.push({ search: new URLSearchParams({ search: value }).toString() })
    }

    const [searchQuery, setSearchQuery, loading] = useDebounce({
        onDebounce: setSearch,
        delay: 400,
        defaultValue: searchFormatted,
        triggerDelay: 200,
        onClear: setSearch,
    })

    return <Search width="100%" value={searchQuery} setValue={setSearchQuery} loading={loading} placeholder={'Поиск'} />
}
