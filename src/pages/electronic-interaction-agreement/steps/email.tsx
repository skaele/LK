import React, { useState } from 'react'

import { useUnit } from 'effector-react'
import { useModal } from 'widgets'

import { thirdPartyInteractionModel } from '@entities/payments'

import { Colors } from '@shared/constants'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'

export const Email = ({ next, guid, defaultEmail }: { defaultEmail: string; guid: string; next: () => void }) => {
    const { close } = useModal()
    const [sendCodes] = useUnit([thirdPartyInteractionModel.events.sendCodes])
    const [email, setEmail] = useState(defaultEmail)
    return (
        <>
            <Input type="email" placeholder="E-mail заказчика" value={email} setValue={setEmail} />
            <Flex jc="space-between" p="8px 0 0 0">
                <Button
                    text="Отмена"
                    onClick={() => {
                        close()
                    }}
                    textColor={Colors.red.main}
                    background="transparent"
                    hoverBackground={Colors.red.transparent3}
                />
                <Button
                    text="Подтвердить"
                    onClick={() => {
                        sendCodes({
                            clientEmail: email,
                            clientGuid: guid,
                        })
                        next()
                    }}
                    textColor={Colors.blue.main}
                    background="transparent"
                    hoverBackground={Colors.blue.transparent3}
                />
            </Flex>
        </>
    )
}
