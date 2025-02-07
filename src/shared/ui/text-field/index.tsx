import React from 'react'

import { useModal } from '@shared/ui/modal'

import TextFieldItem from './text-field-item'
import TextFieldModal from './text-field-modal'
import { FieldProps } from './types'

const TextField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => {
        if (!props.disabled) open(<TextFieldModal {...props} />)
    }

    return <TextFieldItem {...props} onClick={handleClick} />
}

export default TextField
