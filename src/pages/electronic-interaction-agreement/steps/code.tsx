import React, { useState } from 'react'

import { thirdPartyInteractionModel } from '@entities/payments'
import { Colors } from '@shared/consts'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import { useModal } from '@shared/ui/modal'
import { useUnit } from 'effector-react'

export const Code = ({ next, guid }: { guid: string; next: () => void }) => {
    const { close } = useModal()
    const [signAgreement] = useUnit([thirdPartyInteractionModel.events.signAgreement])
    const [code, setCode] = useState('')
    return (
        <>
            <Input placeholder="Код" value={code} setValue={setCode} />
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
                        signAgreement({
                            clientGuid: guid,
                            clientPass: code,
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
