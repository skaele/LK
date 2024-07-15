import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import React, { useState } from 'react'
import { useModal } from 'widgets'
import { Email } from './steps/email'
import { Code } from './steps/code'

export const Modal = () => {
    const [step, setStep] = useState(0)

    const { open, close } = useModal()

    return (
        <Flex w="600px" d="column">
            <Title align="left" size={3} width="530px">
                {titles[step]}
            </Title>
            <Flex d="column" gap="24px">
                {step === 0 && (
                    <Email
                        next={() => {
                            setStep(1)
                        }}
                    />
                )}
                {step === 1 && (
                    <Code
                        next={() => {
                            close()
                            setStep(0)
                        }}
                    />
                )}
            </Flex>
        </Flex>
    )
}
const titles = ['Введите e-mail заказчика', 'Введите код, полученный на почту']
