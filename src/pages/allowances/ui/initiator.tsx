import useDebounce from '@shared/lib/hooks/use-debounce'
import { Message } from '@shared/ui/atoms'
import Search from '@shared/ui/search'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import Table from '@shared/ui/table'
import { getAllowancesColumns } from '../lib/get-allowances-columns'
import Flex from '@shared/ui/flex'
import { allowancesModel } from '@entities/allowances'
import Select, { SelectPage } from '@features/select'

export const Initiator = () => {
    const [allowances, jobs] = useUnit([allowancesModel.stores.allowances, allowancesModel.queries.role.$data])

    const [lastSearch, setLastSearch] = useState('')
    const [fio, setFio] = useState('')
    const [job, setJob] = useState<SelectPage | null>(
        jobs
            ? {
                  id: jobs[0].employeeId,
                  title: jobs[0].division,
              }
            : null,
    )
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

    if (!jobs) return null

    return (
        <Flex gap="16px" d="column">
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Роль: Инициатор</p>
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            <Flex d="column" jc="flex-start" ai="flex-start">
                <Select
                    items={jobs.map((item) => ({ id: item.employeeId, title: item.division })) as SelectPage[]}
                    selected={job}
                    setSelected={setJob}
                />
            </Flex>
            <Search value={searchValue} setValue={setSearchValue} loading={loading} placeholder={'Сотрудник'} />
            <Table
                loading={!allowances}
                columns={getAllowancesColumns()}
                data={job && allowances ? allowances[job.id].initiatorAllowances : null}
                maxOnPage={7}
            />
        </Flex>
    )
}
