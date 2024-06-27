import React from 'react'
import { Initiator } from '../ui/initiator'
import { Approver } from '../ui/approver'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { allowancesQuery } from '@entities/allowances/model/allowances-query'
import { Loader } from '@shared/ui/atoms/loader'
import { userModel } from '@entities/user'

const Allowances = () => {
    const [pageMounted, role, Allowances, loading, error, user] = useUnit([
        allowancesModel.events.pageMounted,
        allowancesModel.queries.role.$data,
        allowancesQuery.$data,
        allowancesQuery.$pending,
        allowancesQuery.$error,

        userModel.stores.user,
    ])

    if (role && user?.currentUser?.guid) {
        return (
            <>
                <Loader
                    load={() => pageMounted({ role: role[0], userId: user.currentUser?.guid ?? '' })}
                    loading={loading}
                    error={error ? (error as Error).message : null}
                    data={Allowances}
                    couldBeReloaded
                >
                    {role.some((r) => r === 'initiator') ? <Initiator /> : <Approver />}
                </Loader>
            </>
        )
    }

    return null
}

export default Allowances
