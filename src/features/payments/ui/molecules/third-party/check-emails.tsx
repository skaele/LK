import React, { useState } from 'react'
import { Agreement } from '@shared/api/model'
import { Grid } from '@pages/all-staff/styled/grid'
import Input from '@shared/ui/input'
import { Button, Message, Title } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import { Colors } from '@shared/constants'
import { useModal } from 'widgets'
import { thirdPartyAgreementModel } from '@entities/payments'
import { useUnit } from 'effector-react'

export const CheckEmails = ({ agreement }: { agreement: Agreement }) => {
    const [clientEditedEmail, userEditedEmail] = useUnit([
        thirdPartyAgreementModel.stores.clientEmail,
        thirdPartyAgreementModel.stores.userEmail,
    ])
    const [userEmail, setUserEmail] = useState(userEditedEmail || agreement.user_email)
    const [clientEmail, setClientEmail] = useState(clientEditedEmail || agreement.client_email)
    const { close } = useModal()

    const handleConfirm = () => {
        thirdPartyAgreementModel.events.emailsApproved({
            clientEmail,
            userEmail,
        })
    }

    return (
        <>
            <Message type="info">
                Проверьте e-mail, при необходимости откорректируйте, в случае отсутствия введите
            </Message>
            <Grid columns="1fr 1fr" rows="1fr 1fr" rowGap="8px" columnGap="8px">
                <Title align="left" size={4}>
                    {agreement.user_fio}:
                </Title>
                <Input type="email" placeholder="Ваш e-mail" value={userEmail} setValue={setUserEmail} />
                <Title align="left" size={4}>
                    {agreement.client_fio}:
                </Title>
                <Input type="email" placeholder="E-mail заказчика" value={clientEmail} setValue={setClientEmail} />
            </Grid>
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
                    onClick={handleConfirm}
                    textColor={Colors.blue.main}
                    background="transparent"
                    hoverBackground={Colors.blue.transparent3}
                />
            </Flex>
        </>
    )
}
