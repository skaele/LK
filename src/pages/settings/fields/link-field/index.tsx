import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { FieldProps } from '../../model'
import TextFieldItem from '../text-field/text-field-item'

const LinkField = (props: FieldProps) => {
    const handleClick = () => props?.action?.()
    return <TextFieldItem {...props} rightIcon={<FiChevronRight />} onClick={handleClick} />
}

export default LinkField
