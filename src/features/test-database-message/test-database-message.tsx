import React from 'react'

import { isProduction } from '@shared/consts'
import { Message } from '@shared/ui/atoms'

export const DevModeMessage = () => {
    if (isProduction) return null

    return <Message type="alert">Вы работаете с тестовой базой</Message>
}
