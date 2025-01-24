import React from 'react'

import { Message } from '@shared/ui/message'

const TechicalErrorMessage = () => {
    return (
        <Message type="tip" lineHeight="1.7rem" maxWidth="700px" fontSize="0.83rem">
            <p>
                По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на
                почту <a href="mailto:info@mospolytech.ru">info@mospolytech.ru</a>
            </p>
        </Message>
    )
}

export default TechicalErrorMessage
