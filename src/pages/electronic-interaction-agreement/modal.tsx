import React, { useState } from 'react'

import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import { useModal } from 'widgets'

import { Code } from './steps/code'
import { Email } from './steps/email'

export const Modal = ({ guid, email }: { guid: string; email: string }) => {
    const [step, setStep] = useState(0)

    const { close } = useModal()
    const { isMobile, isTablet } = useCurrentDevice()

    return (
        <Flex w={isMobile || isTablet ? '100%' : '600px'} d="column">
            <Title align="left" size={3} width="530px">
                {titles[step]}
            </Title>
            <Flex d="column" gap="24px">
                {step === 0 && (
                    <Email
                        guid={guid}
                        defaultEmail={email}
                        next={() => {
                            setStep(1)
                        }}
                    />
                )}
                {step === 1 && (
                    <Code
                        guid={guid}
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
