import React from 'react'
import { useModal } from 'widgets'
import { FieldProps } from '../../model'
import TextFieldItem from '../text-field/text-field-item'
import { AddressModal } from './address-field-modal'

export const AddressField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => {
        open(<AddressModal {...props} />)
    }

    return <TextFieldItem {...props} onClick={handleClick} />
}
