import { phonebookModel } from '@entities/phonebook'
import { userModel } from '@entities/user'
import { useUnit } from 'effector-react'
import React from 'react'
import DivisionModal from './division-modal'
import { PhonebookModal } from '@pages/all-staff/ui/phonebook-modal'
import { getSubdivisionPath } from '@pages/all-staff/lib/get-subdivision-path'
import { getSubdivisionInfo } from '@pages/all-staff/lib/get-subdivision-info'

export const GlobalDivisionModal = ({ division }: { division: string }) => {
    const { currentUser: user } = useUnit(userModel.stores.user)

    const isStaff = user?.user_status === 'staff'
    const { subdivisions } = useUnit({
        subdivisions: phonebookModel.stores.subdivisions,
    })
    if (!isStaff || !subdivisions) return <DivisionModal division={division} />

    const subdivisionPath = getSubdivisionPath(subdivisions, division)
    const subdivision = subdivisionPath && subdivisionPath[0]
    if (!subdivision) return <DivisionModal division={division} />

    return <PhonebookModal title={subdivision.name} info={getSubdivisionInfo(subdivision)} />
}
