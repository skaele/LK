import React from 'react'

import { IColors } from '@shared/consts'
import { Icon } from '@shared/ui/icon'

export const IconWrapper = ({ color, children }: { color: keyof IColors; children: JSX.Element }) => {
    return <Icon color={color}>{children}</Icon>
}
