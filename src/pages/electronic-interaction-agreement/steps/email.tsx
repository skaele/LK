import { Colors } from '@shared/constants'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import React, { useState } from 'react'
import { useModal } from 'widgets'

export const Email = ({ next }: { next: () => void }) => {
    const { close } = useModal()
    const [email, setEmail] = useState('')
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
                    onClick={next}
                    textColor={Colors.blue.main}
                    background="transparent"
                    hoverBackground={Colors.blue.transparent3}
                />
            </Flex>
        </>
    )
}
