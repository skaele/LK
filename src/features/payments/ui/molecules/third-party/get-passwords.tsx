import React from 'react'

import { thirdPartyAgreementModel } from '@entities/payments'
import { Agreement } from '@shared/api/model'
import { Colors } from '@shared/constants'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import { Grid } from '@shared/ui/grid'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'

export const GetPasswords = ({ agreement }: { agreement: Agreement }) => {
    const { isMobile } = useCurrentDevice()
    const [clientEmail, userEmail, signButtonActive, sendCodes, enterPasses] = useUnit([
        thirdPartyAgreementModel.stores.clientEmail,
        thirdPartyAgreementModel.stores.userEmail,
        thirdPartyAgreementModel.stores.signButtonActive,
        thirdPartyAgreementModel.events.sendCodes,
        thirdPartyAgreementModel.events.enterPasses,
    ])
    return (
        <>
            <Grid columns={isMobile ? '1fr' : '1fr 1fr'} rows="1fr 1fr" rowGap="8px" columnGap="8px">
                <Title align="left" size={4}>
                    {agreement.user_fio}:
                </Title>
                <Title align="left" size={4}>
                    {userEmail}
                </Title>
                <Title align="left" size={4}>
                    {agreement.client_fio}:
                </Title>
                <Title align="left" size={4}>
                    {clientEmail}
                </Title>
            </Grid>
            <Flex d="column" gap="8px">
                <Button
                    text="Получить пароли на e-mail"
                    onClick={() => sendCodes({ agreementId: agreement.id, userEmail, clientEmail })}
                    textColor={Colors.blue.main}
                    background="transparent"
                    hoverBackground={Colors.blue.transparent3}
                />
                <Button
                    text="Ввести пароли"
                    isActive={signButtonActive}
                    onClick={enterPasses}
                    background="var(--reallyBlue)"
                    textColor="#fff"
                />
            </Flex>
        </>
    )
}
