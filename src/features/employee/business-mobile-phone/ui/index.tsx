import React from 'react'
import { FiPhone } from 'react-icons/fi'

import { useUnit } from 'effector-react'
import { useModal } from 'widgets'

import { userModel } from '@entities/user'

import TextFieldItem from '@shared/ui/text-field/text-field-item'

import { BusinessMobilePhoneModal } from './business-mobile-phone-modal'

export const BusinessMobilePhone = () => {
    const {
        user: { currentUser },
    } = useUnit({ user: userModel.stores.user })

    const { open } = useModal()

    if (!currentUser) return null

    const handleClick = () => {
        open(<BusinessMobilePhoneModal />, 'Служебный мобильный телефон')
    }

    return (
        <TextFieldItem
            icon={<FiPhone />}
            title="Служебный мобильный телефон"
            description={currentUser.phone_staff}
            onClick={handleClick}
        />
    )
}
