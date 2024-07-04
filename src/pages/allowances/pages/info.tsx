import { allowancesModel } from '@entities/allowances'
import { Role } from '@entities/allowances/types'
import { Loader } from '@shared/ui/atoms/loader'
import PageBlock from '@shared/ui/page-block'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Employee } from '../ui/employee'

const Info = () => {
    const { id, role, jobId } = useParams<{ id: string; role: Role; jobId: string }>()

    const [infoPageMounted, data, pending, error] = useUnit([
        allowancesModel.events.infoPageMounted,
        allowancesModel.queries.allowance.$data,
        allowancesModel.queries.allowance.$pending,
        allowancesModel.queries.allowance.$error,
    ])

    useEffect(() => {
        infoPageMounted({ id, role, userId: jobId })
    }, [])
    return (
        <PageBlock>
            <Loader load={() => {}} data={data} loading={pending} error={error ? (error as Error).message : null}>
                {data?.map((employee) => (
                    <Employee key={employee.id} employee={employee} role={role} userId={jobId} id={id} />
                ))}
            </Loader>
        </PageBlock>
    )
}

export default Info
