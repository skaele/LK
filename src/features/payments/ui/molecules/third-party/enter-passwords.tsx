import { thirdPartyAgreementModel } from '@entities/payments'
import { Grid } from '@pages/all-staff/styled/grid'
import { Agreement } from '@shared/api/model'
import { Button, Title } from '@shared/ui/atoms'
import Input from '@shared/ui/input'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'

export const EnterPasswords = ({ agreement }: { agreement: Agreement }) => {
    const [userPass, setUserPass] = useState('')
    const [clientPass, setClientPass] = useState('')
    const [signAgreement] = useUnit([thirdPartyAgreementModel.events.signAgreement])
    return (
        <>
            <Grid columns="1fr 1fr" rows="1fr 1fr" rowGap="8px" columnGap="8px">
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
