import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline, IoIosRadioButtonOff } from 'react-icons/io'

import { FieldProps } from '@pages/settings/types'

import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import TextFieldItem from '@shared/ui/text-field/text-field-item'

interface LocalProps {
    completed: boolean
}

export const CompletableLinkField = ({ action, ...props }: FieldProps & LocalProps) => {
    const { isMobile, isTablet } = useCurrentDevice()
    return (
        <TextFieldItem
            {...props}
            onClick={action}
            icon={props.completed ? <IoIosCheckmarkCircleOutline /> : <IoIosRadioButtonOff />}
            rightIcon={<FiChevronRight />}
            fancyBG={!isMobile && !isTablet}
        />
    )
}
