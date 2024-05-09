import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import TextFieldItem from '../../../../shared/ui/text-field/text-field-item'
import { FieldProps } from '@pages/settings/types'

const LinkField = ({ action, ...props }: FieldProps) => {
    return <TextFieldItem onClick={action} {...props} rightIcon={<FiChevronRight />} />
}

export default LinkField
