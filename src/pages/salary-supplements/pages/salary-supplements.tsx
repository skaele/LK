import React from 'react'
import { Initiator } from '../ui/initiator'
import { Approver } from '../ui/approver'
import { useUnit } from 'effector-react'
import { salarySupplementsModel } from '@entities/salary-supplements'
import { salarySupplementsQuery } from '@entities/salary-supplements/model/salary-supplements-query'
import { Loader } from '@shared/ui/atoms/loader'

const SalarySupplements = () => {
    const [pageMounted, role, salarySupplements, loading, error] = useUnit([
        salarySupplementsModel.events.pageMounted,
        salarySupplementsModel.stores.role,
        salarySupplementsQuery.$data,
        salarySupplementsQuery.$pending,
        salarySupplementsQuery.$error,
    ])

    return (
        <>
            <Loader
                load={pageMounted}
                loading={loading}
                error={error ? (error as Error).message : null}
                // data={salarySupplements}
                data={!null}
                couldBeReloaded
            >
                {role === 'initiator' ? <Initiator /> : <Approver />}
            </Loader>
        </>
    )
}

export default SalarySupplements
