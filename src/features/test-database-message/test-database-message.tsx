import React from 'react'
<<<<<<<< HEAD:src/features/test-database-message/test-database-message.tsx
========

import { isProduction } from '@shared/constants'
import { Message } from '@shared/ui/atoms'
>>>>>>>> master:src/pages/allowances/ui/dev-mode-message.tsx

import { isProduction } from '@shared/consts'
import { Message } from '@shared/ui/atoms'

export const DevModeMessage = () => {
    if (isProduction) return null

    return <Message type="alert">Вы работаете с тестовой базой</Message>
}
