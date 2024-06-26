import React from 'react'
import { Initiator } from '../ui/initiator'
import { Approver } from '../ui/approver'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { AllowancesQuery } from '@entities/allowances/model/allowances-query'
import { Loader } from '@shared/ui/atoms/loader'

const Allowances = () => {
    const [pageMounted, role, Allowances, loading, error] = useUnit([
        allowancesModel.events.pageMounted,
        allowancesModel.stores.role,
        AllowancesQuery.$data,
        AllowancesQuery.$pending,
        AllowancesQuery.$error,
    ])

    return (
        <>
            <Loader
                load={pageMounted}
                loading={loading}
                error={error ? (error as Error).message : null}
                data={Allowances}
                couldBeReloaded
            >
                {role === 'initiator' ? <Initiator /> : <Approver />}
            </Loader>
        </>
    )
}

export default Allowances
