import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'

import { thirdPartyAgreementModel } from '@entities/payments'
import { Agreement } from '@shared/api/model'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { CheckEmails } from './check-emails'
import { EnterPasswords } from './enter-passwords'
import { GetPasswords } from './get-passwords'

const titles = [
    'Проверьте и подтвердите адреса e-mail',
    'Получите на адреса e-mail пароли для подписания ЭЦП 3-х-стороннего доп.соглашения',
    'Введите пароли для подписания ЭЦП 3-х-стороннего доп.соглашения',
]

export const ThirdPartyModal = ({ agreement }: { agreement: Agreement }) => {
    const { isMobile } = useCurrentDevice()
    const [step, back] = useUnit([thirdPartyAgreementModel.stores.step, thirdPartyAgreementModel.events.goBack])
    const hasBack = step === 1
    return (
        <Flex w={isMobile ? '100%' : '600px'} d="column">
            <Header hasBack={hasBack}>
                {hasBack && (
                    <Button
                        onClick={back}
                        icon={<FiChevronLeft />}
                        background="transparent"
                        textColor={'var(--theme-opposite)'}
                        width="fit-content"
                        align="left"
                        padding="8px"
                        height="fit-content"
                    />
                )}
                <Title align="left" size={3}>
                    {titles[step]}
                </Title>
            </Header>

            <Flex
                d="column"
                gap="24px"
                m={`${step === 0 ? (isMobile ? '2rem' : '0.5rem') : isMobile ? '5rem' : '3rem'} 0 0 0`}
            >
                {step === 0 && <CheckEmails agreement={agreement} />}
                {step === 1 && <GetPasswords agreement={agreement} />}
                {step === 2 && <EnterPasswords agreement={agreement} />}
            </Flex>
        </Flex>
    )
}

const Header = styled.div<{ hasBack?: boolean }>`
    position: absolute;
    display: flex;
    align-items: center;
    top: 16px;
    left: ${({ hasBack }) => (hasBack ? '4px' : '20px')};
    gap: 15px;
    width: 85%;
`
