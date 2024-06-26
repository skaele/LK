import ChangePassword from '@features/change-password'
import { FieldProps } from '../../types'
import React from 'react'
import { useModal } from 'widgets'
import TextFieldItem from '../../../../shared/ui/text-field/text-field-item'

const PasswordField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => open(<ChangePassword />)
    return <TextFieldItem {...props} onClick={handleClick} />
}

export default PasswordField
