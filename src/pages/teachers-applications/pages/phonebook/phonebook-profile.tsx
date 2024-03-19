import { PHONEBOOK_BUFFER } from '@app/routes/teacher-routes'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import React from 'react'
import { useHistory } from 'react-router'

export const PhonebookProfile = () => {
    const history = useHistory()
    return (
        <Flex d="column" gap="20px">
            <p>
                Отображение контактных данных скоро станет доступным. Для того, чтобы в дальнейшем увидеть эти данные,
                необходимо их актуализировать.
            </p>
            <Button
                background="var(--reallyBlue)"
                textColor="#fff"
                text="Перейти к заполнению контактных данных"
                minWidth={'35px'}
                height="36px"
                onClick={() => {
                    history.replace(PHONEBOOK_BUFFER)
                }}
            />
        </Flex>
    )
}
