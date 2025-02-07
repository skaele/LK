import React from 'react'

import { useModal } from 'widgets'

import ChangePassword from '@features/change-password'

import TextFieldItem from '../../../../shared/ui/text-field/text-field-item'
import { FieldProps } from '../../types'

const PasswordField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => open(<ChangePassword />)
    return <TextFieldItem {...props} onClick={handleClick} />
}

export default PasswordField
