import React from 'react'

import ChangePassword from '@features/change-password'

import { useModal } from '@shared/ui/modal'
import { FieldProps } from '@shared/ui/text-field/types'

import TextFieldItem from '../../../../shared/ui/text-field/text-field-item'

const PasswordField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => open(<ChangePassword />)
    return <TextFieldItem {...props} onClick={handleClick} />
}

export default PasswordField
