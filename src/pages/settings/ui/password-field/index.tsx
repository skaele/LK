import React from 'react'

import ChangePassword from '@features/change-password'
import { useModal } from 'widgets'

import TextFieldItem from '../../../../shared/ui/text-field/text-field-item'
import { FieldProps } from '../../types'

const PasswordField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => open(<ChangePassword />)
    return <TextFieldItem {...props} onClick={handleClick} />
}

export default PasswordField
