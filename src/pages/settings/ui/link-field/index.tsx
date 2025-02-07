import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { FieldProps } from '@shared/ui/text-field/types'

import TextFieldItem from '../../../../shared/ui/text-field/text-field-item'

const LinkField = ({ action, ...props }: FieldProps) => {
    return <TextFieldItem onClick={action} {...props} rightIcon={<FiChevronRight />} />
}

export default LinkField
