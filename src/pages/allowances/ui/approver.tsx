import { Message } from '@shared/ui/atoms'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { getAllowancesColumns } from '../lib/get-allowances-columns'
import Flex from '@shared/ui/flex'
import { allowancesModel } from '@entities/allowances'
import Select, { SelectPage } from '@features/select'
import { ALLOWANCES } from '@app/routes/teacher-routes'
import { useHistory } from 'react-router'

export const Approver = () => {
    const history = useHistory()
    const [allowances, jobs] = useUnit([allowancesModel.stores.allowances, allowancesModel.queries.role.$data])

    const [job, setJob] = useState<SelectPage | null>(() => {
        const job = jobs && jobs.find((job) => job.roles.includes('Approver'))
        if (!job) return null
        return {
            id: job.employeeId,
            title: job.division,
        }
    })

    if (!jobs) return null
    return (
        <Flex gap="16px" d="column">
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Роль: Согласующий</p>
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            <Flex d="column" jc="flex-start" ai="flex-start">
                <Select
                    items={
                        jobs
                            .filter((job) => job.roles.includes('Approver'))
                            .map((item) => ({ id: item.employeeId, title: item.division })) as SelectPage[]
                    }
                    selected={job}
                    setSelected={setJob}
                />
            </Flex>
            <Table
                loading={!allowances}
                columns={getAllowancesColumns()}
                data={job && allowances ? allowances[job.id].approverAllowances : null}
                maxOnPage={7}
                onRowClick={(allowance) => {
                    history.push(ALLOWANCES + `/info/${job?.id}/approver/${allowance.id}`)
                }}
            />
        </Flex>
    )
}
