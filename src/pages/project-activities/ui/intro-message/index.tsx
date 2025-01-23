import React from 'react'

import { BoldText } from '@shared/ui/atoms/BoldText'
import { Message } from '@shared/ui/message'

import { GeneralPAMessage } from './general'

export const ProjectActivityIntroMessage = () => {
    return (
        <Message lineHeight="1.5rem" fontSize="0.86rem" type="info" title={<BoldText>Уважаемые студенты!</BoldText>}>
            <GeneralPAMessage />
        </Message>
    )
}
