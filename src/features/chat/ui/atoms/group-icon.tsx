import { Icon } from '@features/all-pages'
import React from 'react'
import { FiUsers } from 'react-icons/fi'

type GroupIconProps = {
    size?: number
    marginRight?: string
}

export function GroupIcon({ size, marginRight }: GroupIconProps) {
    return (
        <Icon marginRight={marginRight} borderRadius="100%" size={size ?? 30} color="lightBlue">
            <FiUsers />
        </Icon>
    )
}
