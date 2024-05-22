import { FieldProps } from '@pages/settings/types'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import TextFieldItem from '@shared/ui/text-field/text-field-item'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

interface LocalProps {
    completed: boolean
}

export const CompletableLinkField = ({ action, ...props }: FieldProps & LocalProps) => {
    const { isMobile, isTablet } = useCurrentDevice()
    return (
        <TextFieldItem
            {...props}
            onClick={action}
            icon={<IoIosCheckmarkCircleOutline />}
            rightIcon={<FiChevronRight />}
            fancyBG={!isMobile && !isTablet}
        />
    )
}
