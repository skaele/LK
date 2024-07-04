import { Message } from '@shared/ui/atoms'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { getAllowancesColumns } from '../lib/get-allowances-columns'
import Flex from '@shared/ui/flex'
import { allowancesModel } from '@entities/allowances'
import Select, { SelectPage } from '@features/select'

export const Approver = () => {
    const [allowances, jobs] = useUnit([allowancesModel.stores.allowances, allowancesModel.queries.role.$data])

    const [job, setJob] = useState<SelectPage | null>(
        jobs
            ? {
                  id: jobs[0].employeeId,
                  title: jobs[0].division,
              }
            : null,
    )

    if (!jobs) return null
    return (
        <Flex gap="16px" d="column">
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Роль: Согласующий</p>
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            <Flex d="column" jc="flex-start" ai="flex-start">
                <Select
                    items={jobs.map((item) => ({ id: item.employeeId, title: item.division })) as SelectPage[]}
                    selected={job}
                    setSelected={setJob}
                />
            </Flex>
            <Table
                loading={!allowances}
                columns={getAllowancesColumns()}
                data={job && allowances ? allowances[job.id].approverAllowances : null}
                maxOnPage={7}
            />
        </Flex>
    )
}
