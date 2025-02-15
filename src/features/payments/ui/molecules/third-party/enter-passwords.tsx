import React, { useState } from 'react'

import { useUnit } from 'effector-react'

import { thirdPartyAgreementModel } from '@entities/payments'

import { Agreement } from '@shared/api/model'
import { Button, Title } from '@shared/ui/atoms'
import { Grid } from '@shared/ui/grid'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import Input from '@shared/ui/input'

export const EnterPasswords = ({ agreement }: { agreement: Agreement }) => {
    const { isMobile } = useCurrentDevice()
    const [userPass, setUserPass] = useState('')
    const [clientPass, setClientPass] = useState('')
    const [signAgreement] = useUnit([thirdPartyAgreementModel.events.signAgreement])

    return (
        <>
            <Grid columns={isMobile ? '1fr' : '1fr 1fr'} rows="1fr 1fr" rowGap="8px" columnGap="8px">
                <Title align="left" size={4}>
                    {agreement.user_fio}:
                </Title>
                <Input placeholder="Ваш код" value={userPass} setValue={setUserPass} />
                <Title align="left" size={4}>
                    {agreement.client_fio}:
                </Title>
                <Input placeholder="Код заказчика" value={clientPass} setValue={setClientPass} />
            </Grid>
            <Button
                text="Подписать"
                onClick={() => {
                    signAgreement({ agreementId: agreement.id, userPass, clientPass })
                }}
                background="var(--reallyBlue)"
                textColor="#fff"
            />
        </>
    )
}
