// import useDebounce from '@shared/lib/hooks/use-debounce'
// import Search from '@shared/ui/search'
import { Message } from '@shared/ui/atoms'
import { useUnit } from 'effector-react'
import React, { useMemo, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import Table from '@shared/ui/table'
import { getAllowancesColumns } from '../lib/get-allowances-columns'
import Flex from '@shared/ui/flex'
import { allowancesModel } from '@entities/allowances'
import Select, { SelectPage } from '@features/select'
import { useHistory } from 'react-router'
import { ALLOWANCES } from '@app/routes/teacher-routes'

export const Initiator = () => {
    const history = useHistory()
    const [allowances, jobs] = useUnit([allowancesModel.stores.allowances, allowancesModel.queries.role.$data])

    // const [lastSearch, setLastSearch] = useState('')
    // const [fio, setFio] = useState('')
    const [job, setJob] = useState<SelectPage | null>(() => {
        const job = jobs && jobs.find((job) => job.roles.includes('Initiator'))
        if (!job) return null
        return {
            id: job.employeeId,
            title: job.division,
        }
    })
    // const [searchValue, setSearchValue, loading] = useDebounce({
    //     onDebounce: setFio,
    //     delay: 400,
    //     defaultValue: fio,
    //     triggerDelay: 200,
    //     triggerOn: (val) => {
    //         setLastSearch(val)
    //         return lastSearch !== val
    //     },
    //     onClear: setFio,
    // })

    // const filteredAllowances = useMemo(() => {
    //     if (!allowances || !job) return null
    //     return allowances[job.id].initiatorAllowances.filter(allowance => allowance.employees.some(employee => employee.fio.includes(searchValue)))
    // }, [allowances, fio, job?.id])

    const jobItems = useMemo(() => {
        if (!jobs) return []
        return jobs
            .filter((job) => job.roles.includes('Approver'))
            .map((item) => ({ id: item.employeeId, title: item.division })) as SelectPage[]
    }, [jobs])
    if (!jobs) return null

    return (
        <Flex gap="16px" d="column">
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Роль: Инициатор</p>
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            {jobItems.length > 1 && (
                <Flex d="column" jc="flex-start" ai="flex-start">
                    <Select
                        items={
                            jobs
                                .filter((job) => job.roles.includes('Initiator'))
                                .map((item) => ({ id: item.employeeId, title: item.division })) as SelectPage[]
                        }
                        selected={job}
                        setSelected={setJob}
                    />
                </Flex>
            )}
            {/* <Search value={searchValue} setValue={setSearchValue} loading={loading} placeholder={'Сотрудник'} /> */}
            <Table
                loading={!allowances}
                columns={getAllowancesColumns()}
                data={job && allowances ? allowances[job.id].initiatorAllowances : null}
                maxOnPage={7}
                onRowClick={(allowance) => {
                    history.push(ALLOWANCES + `/info/${job?.id}/initiator/${allowance.id}`)
                }}
            />
        </Flex>
    )
}
