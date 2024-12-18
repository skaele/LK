import { paymentsModel } from '@entities/payments'
import { popUpMessageModel } from '@entities/pop-up-message'
import PageBlock from '@shared/ui/page-block'
import { Error, Message, Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import { SliderPage } from 'widgets'
import PaymentsTemplate from './payments-template'
import { useUnit } from 'effector-react'
import PaymentsWidget from '@features/home/ui/molecules/payments-widget'

const PaymentsPage = () => {
    const [
        error,
        loading,
        payments,
        paymentType,
        contractsWithDebtDorm,
        contractsWithoutDebtDorm,
        contractsWithDebtEdu,
        contractsWithoutDebtEdu,
    ] = useUnit([
        paymentsModel.stores.$error,
        paymentsModel.stores.$loading,
        paymentsModel.stores.$paymentsStore,
        paymentsModel.stores.paymentType,
        paymentsModel.stores.contractsWithDebtDorm,
        paymentsModel.stores.contractsWithoutDebtDorm,
        paymentsModel.stores.contractsWithDebtEdu,
        paymentsModel.stores.contractsWithoutDebtEdu,
    ])

    useEffect(() => {
        popUpMessageModel.events.evokePopUpMessage({
            type: 'alert',
            time: 10000,
            message: 'В связи с техническими работами отображение данных по произведенным оплатам может быть не полным',
        })
    }, [])

    return (
        <Wrapper
            loading={loading}
            load={paymentsModel.effects.getPaymentsFx}
            error={error}
            data={payments}
            noDataCheck={!payments?.dormitory.length}
        >
            <PageBlock>
                <Message type={'alert'} title="Внимание!">
                    Ведутся доработки по информации о долге по оплате и суммам оплат
                </Message>
                <PaymentsWidget fullWidth />
                {paymentType === 'none' && <Error text="Нет данных" />}
                {paymentType === 'both' && (
                    <SliderPage
                        pages={[
                            {
                                title: 'Общежитие',
                                content: (
                                    <PaymentsTemplate
                                        contractsWithDebt={contractsWithDebtDorm}
                                        contractsWithoutDebt={contractsWithoutDebtDorm}
                                    />
                                ),
                            },
                            {
                                title: 'Обучение',
                                content: (
                                    <PaymentsTemplate
                                        contractsWithDebt={contractsWithDebtEdu}
                                        contractsWithoutDebt={contractsWithoutDebtEdu}
                                    />
                                ),
                            },
                        ]}
                        appearance={false}
                    />
                )}
                {paymentType === 'dormitory' && (
                    <PaymentsTemplate
                        contractsWithDebt={contractsWithDebtDorm}
                        contractsWithoutDebt={contractsWithoutDebtDorm}
                    />
                )}
                {paymentType === 'education' && (
                    <PaymentsTemplate
                        contractsWithDebt={contractsWithDebtEdu}
                        contractsWithoutDebt={contractsWithoutDebtEdu}
                    />
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default PaymentsPage
