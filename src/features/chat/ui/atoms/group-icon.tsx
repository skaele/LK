import React from 'react'
import { FiUsers } from 'react-icons/fi'

import { Icon } from '@features/all-pages'

type GroupIconProps = {
    size?: number
    marginRight?: string
}

export function GroupIcon({ size, marginRight }: GroupIconProps) {
    return (
        <Icon marginRight={marginRight} borderRadius="100%" size={size ?? 25} color="lightBlue">
            <FiUsers />
        </Icon>
    )
}
