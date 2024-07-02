import useDebounce from '@shared/lib/hooks/use-debounce'
import { Message } from '@shared/ui/atoms'
import Search from '@shared/ui/search'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import Table from '@shared/ui/table'
import { getAllowancesColumns } from '../lib/get-allowances-columns'
import { initiatorAllowancesQuery } from '@entities/allowances/model/allowances-query'
import Flex from '@shared/ui/flex'

export const Initiator = () => {
    const [allowances] = useUnit([initiatorAllowancesQuery.$data])

    const [lastSearch, setLastSearch] = useState('')
    const [fio, setFio] = useState('')
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
        <Flex gap="16px" d="column">
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Роль: Инициатор</p>
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            <Search value={searchValue} setValue={setSearchValue} loading={loading} placeholder={'Сотрудник'} />
            <Table
                // loading={!Allowances}
                loading={false}
                columns={getAllowancesColumns()}
                data={allowances}
                maxOnPage={7}
            />
        </Flex>
    )
}
