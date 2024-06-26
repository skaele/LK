import { Payments, PaymentsContract } from '@api/model'
import { PAYMENTS_ROUTE } from '@app/routes/general-routes'
import { IColors, MEDIA_QUERIES } from '@shared/constants'
import { paymentsModel } from '@entities/payments'
import PaymentButton from '@features/payment-button'
import Debt from '@features/payments/debt'
import Subtext from '@shared/ui/subtext'
import { Button } from '@ui/button'
import { Error } from '@ui/error'
import { Message } from '@ui/message'
import { SkeletonShape } from '@ui/skeleton-shape'
import React from 'react'
import { FiCheck, FiInfo } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

const PaymentsWidgetWrapper = styled.div<{ background?: keyof IColors }>`
    max-width: 400px;
    min-width: calc(100% / 3);
    width: 100%;
    height: 156px;
    background: var(--theme-2);
    border-radius: 15px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 6px;

    .payment-info {
        width: 100%;
        height: 100%;
        background: var(--block);
        border-radius: 11px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .top-info {
            a {
                position: absolute;
                top: 6px;
                right: 6px;
            }
        }
    }

    ${MEDIA_QUERIES.isMobile} {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`

const SkeletonLoading = () => {
    return (
        <PaymentsWidgetWrapper>
            <div className="payment-info education">
                <div>
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '100px',
                            height: '10px',
                        }}
                        margin="0 0 6px 0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '150px',
                            height: '25px',
                        }}
                        margin="0"
                    />
                </div>
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '100%',
                        height: '35px',
                    }}
                    margin="0"
                />
            </div>
        </PaymentsWidgetWrapper>
    )
}

const ErrorMessage = () => {
    return (
        <PaymentsWidgetWrapper>
            <Error text={'Ошибка '} size="70px" />
        </PaymentsWidgetWrapper>
    )
}

const TopMessage = ({
    data,
    balance,
    section,
}: {
    data: Payments['dormitory'] | Payments['education']
    balance: number
    section: 'Обучение' | 'Общежитие'
}) => {
    if (!data.length) return null

    const { qr_current, qr_total } = data[0]

    return (
        <div className="payment-info">
            <div className="top-info">
                <Subtext>{section}</Subtext>
                <Debt size="middle" debt={balance} />
                <Link to={PAYMENTS_ROUTE}>
                    <Button icon={<FiInfo />} background="transparent" />
                </Link>
            </div>
            {balance > 0 && <PaymentButton qr_current={qr_current} qr_total={qr_total} />}
            {balance <= 0 && (
                <Message type="success" title={'Оплачено'} width="100%" align="center" icon={<FiCheck />} />
            )}
        </div>
    )
}

const countPayment = (contracts: PaymentsContract[]) => {
    if (contracts.some((contract) => Number(contract.balance_currdate) > 0)) {
        return contracts.reduce(
            (sum, contract) => (Number(contract.balance_currdate) > 0 ? Number(contract.balance_currdate) + sum : sum),
            0,
        )
    }
    return contracts.reduce((sum, contract) => Number(contract.balance_currdate) + sum, 0)
}

const PaymentsWidget = ({ forwardedRef }: TutorialComponent) => {
    const [payments, error] = useUnit([paymentsModel.stores.$paymentsStore, paymentsModel.stores.$error])

    if (error) return <ErrorMessage />

    if (!payments) return <SkeletonLoading />

    if (!!payments && !payments.dormitory.length && !payments.education.length) return null
    const dormPayment = countPayment(payments?.dormitory)
    const eduPayment = countPayment(payments?.education)

    const hasToPay = dormPayment > 0 || eduPayment > 0

    return (
        <PaymentsWidgetWrapper ref={forwardedRef} background={hasToPay ? 'red' : 'green'}>
            <TopMessage data={payments.dormitory} balance={dormPayment} section={'Общежитие'} />
            <TopMessage data={payments.education} balance={eduPayment} section={'Обучение'} />
        </PaymentsWidgetWrapper>
    )
}

export default PaymentsWidget
