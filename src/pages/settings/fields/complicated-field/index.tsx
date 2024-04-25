import React from 'react'
import { useModal } from 'widgets'
import { FieldProps } from '../../model'
import TextFieldItem from '../text-field/text-field-item'
import { ComplicatedModal } from './complicated-field-modal'

export const ComplicatedField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => {
        open(<ComplicatedModal {...props} />)
    }

    return <TextFieldItem {...props} onClick={handleClick} />
}
