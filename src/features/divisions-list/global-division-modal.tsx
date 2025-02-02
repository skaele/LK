import React from 'react'

import { useUnit } from 'effector-react'

import { getSubdivisionInfo } from '@features/all-staff/lib/get-subdivision-info'
import { getSubdivisionPath } from '@features/all-staff/lib/get-subdivision-path'
import { PhonebookModal } from '@features/all-staff/ui/phonebook-modal'

import { phonebookModel } from '@entities/phonebook'

import { userModel } from '@shared/session'

import DivisionModal from './division-modal'

export const GlobalDivisionModal = ({ division }: { division: string }) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

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
