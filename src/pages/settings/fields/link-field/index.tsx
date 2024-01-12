import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { FieldProps } from '../../model'
import TextFieldItem from '../text-field/text-field-item'

const LinkField = ({ action, ...props }: FieldProps) => {
    return <TextFieldItem onClick={action} {...props} rightIcon={<FiChevronRight />} />
}

export default LinkField
