import React, { useState } from 'react'
import { BiWallet } from 'react-icons/bi'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { Contract } from '@features/payments'
import { DebtTutorial } from '@features/tutorials/debt-tutorial'

import { PaymentsContract } from '@shared/api/model'
import { Colors } from '@shared/consts'
import localizeDate from '@shared/lib/dates/localize-date'
import { tutorialModel } from '@shared/tutorial'
import { Button, LinkButton } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import { useModal } from '@shared/ui/modal'
import Notification from '@shared/ui/notification'
import Slider from '@shared/ui/slider'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'

import { PaymentButtonTutorial } from './payment-button-animated'

const DebtAndQrWrapper = styled.div`
    width: 100%;
`

const DebtAndQrStyled = styled.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`

const DebtAndQrContentStyled = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

const ButtonsList = styled.div`
    display: flex;
    align-items: center;
    gap: 1.1rem;
    height: 35px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        height: fit-content;
    }
`

const ContractButtonWrapper = styled.div`
    position: relative;
`

type Props = {
    data: PaymentsContract
    index?: number
    isDormitory?: boolean
}

const DebtAndQr = (props: Props) => {
    const { data, index, isDormitory } = props
    const { balance_currdate, balance, endDatePlan, can_sign, bill, bill_next, qr_current, qr_total } = data
    const roles = useUnit(tutorialModel.stores.roles)
    const { open } = useModal()
    const [currentPage, setCurrentPage] = useState(0)
    const chosenDebt = currentPage === 0 ? +balance_currdate : +balance
    const hasDebt = chosenDebt > 0
    const text = hasDebt
        ? currentPage === 0
            ? `Долг по договору`
            : `Остаток по договору`
        : chosenDebt < 0
          ? `Переплата по договору`
          : 'У вас нет долга'
    const dateText = currentPage === 0 ? `На ${localizeDate(new Date())}` : `До ${localizeDate(endDatePlan)}`

    const showTutorial =
        index === 0 &&
        ((roles.includes('dormitory') && roles.includes('education') && isDormitory) ||
            roles.includes('dormitory') === isDormitory)

    const handleOpenContract = () => {
        open(<Contract contract={data} />, 'Реквизиты договора')
    }

    return (
        <DebtAndQrWrapper>
            <Title icon={<BiWallet />} size={4} align="left" bottomGap>
                Задолженность
            </Title>
            <DebtAndQrStyled>
                <Slider
                    pages={[{ title: 'Текущая' }, { title: 'Общая' }]}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    appearance={false}
                />
                <DebtAndQrContentStyled>
                    <Flex d="column" gap="12px" ai="flex-start">
                        <DebtTutorial
                            debt={chosenDebt}
                            tutorialModule={showTutorial ? { id: 'payments', step: 1 } : undefined}
                        />

                        <Flex d="column" gap="4px" ai="flex-start">
                            <Title size={3} align="left">
                                {text}
                            </Title>
                            <Subtext>{dateText}</Subtext>
                        </Flex>
                    </Flex>
                    <PaymentButtonTutorial
                        currentPage={currentPage}
                        hasDebt={hasDebt}
                        qr_current={qr_current}
                        qr_total={qr_total}
                        tutorialModule={
                            showTutorial
                                ? {
                                      id: 'payments',
                                      step: 2,
                                      params: { position: 'left' },
                                  }
                                : undefined
                        }
                    />
                </DebtAndQrContentStyled>
                <ButtonsList>
                    {bill && (
                        <LinkButton
                            text="Квитанция на оплату"
                            background="transparent"
                            textColor={Colors.grey.main}
                            align="left"
                            width="fit-content"
                            href={bill}
                            padding="0"
                        />
                    )}
                    {bill_next && (
                        <LinkButton
                            text="Квитанция на оплату следующего периода"
                            background="transparent"
                            textColor={Colors.grey.main}
                            align="left"
                            width="fit-content"
                            href={bill_next}
                            padding="0"
                        />
                    )}
                    <ContractButtonWrapper>
                        <Button
                            onClick={handleOpenContract}
                            text="Реквизиты договора"
                            background="transparent"
                            textColor={Colors.grey.main}
                            width="fit-content"
                            padding="0"
                            align="left"
                        />
                        <Notification right="-25px" top="10px" visible={can_sign} pulsing>
                            1
                        </Notification>
                    </ContractButtonWrapper>
                    {/* {!isMobile && <Divider direction="vertical" />} */}
                    {/* <Button
                        onClick={handleQrTutorial}
                        text="Как оплатить с помощью QR?"
                        background="transparent"
                        textColor={Colors.grey.main}
                        width="fit-content"
                        padding="0"
                        align="left"
                    /> */}
                </ButtonsList>
            </DebtAndQrStyled>
        </DebtAndQrWrapper>
    )
}

export default DebtAndQr
