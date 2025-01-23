import React from 'react'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

import { userModel } from '@entities/user'
import TextFieldItem from '@shared/ui/text-field/text-field-item'
import { useUnit } from 'effector-react'
import { useModal } from 'widgets'

import { WorkPlaceAddressModal } from './work-place-address-modal'

type WorkPlaceAddressProps = {
    subDivisionGuidStaff?: string
}

export const WorkPlaceAddress = ({ subDivisionGuidStaff }: WorkPlaceAddressProps) => {
    const {
        user: { currentUser },
    } = useUnit({ user: userModel.stores.user })

    const { open } = useModal()

    if (!currentUser) return null

    const handleClick = () => {
        open(<WorkPlaceAddressModal subDivisionGuidStaff={subDivisionGuidStaff} />, 'Адрес места работы')
    }

    return (
        <TextFieldItem
            icon={<HiOutlineOfficeBuilding />}
            title="Адрес места работы"
            description={currentUser.subdivisions?.map((subdivision) => subdivision.room).join(', ')}
            onClick={handleClick}
        />
    )
}
