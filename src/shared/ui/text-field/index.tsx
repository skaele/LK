import React from 'react'

import { FieldProps } from '@pages/settings/types'
import { useModal } from 'widgets'

import TextFieldItem from './text-field-item'
import TextFieldModal from './text-field-modal'

const TextField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => {
        if (!props.disabled) open(<TextFieldModal {...props} />)
    }

    return <TextFieldItem {...props} onClick={handleClick} />
}

export default TextField
