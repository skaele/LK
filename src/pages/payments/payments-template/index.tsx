import { ElectronicAgreementList, PaymentList } from '@features/payments'
import Flex from '@shared/ui/flex'
import { Divider, Title } from '@ui/atoms'
import React from 'react'
import DebtAndQr from './debt-and-qr'
import PaygraphTable from './paygraph-table'
import { PaymentsContract } from '@shared/api/model'
import localizeDate from '@shared/lib/dates/localize-date'
import { PageWrapperTutorial } from 'widgets/tutorial/tutorials/page-wrapper-tutorial'
import { useUnit } from 'effector-react'
import { tutorialModel } from '@entities/tutorial'

type Props = {
    contracts: PaymentsContract[] | undefined
}

const PaymentsTemplate = ({ contracts }: Props) => {
    const roles = useUnit(tutorialModel.stores.roles)
    if (!contracts) return null

    return (
        <PageWrapperTutorial
            tutorialModule={{
                id: 'payments',
                step: !roles.includes('dormitory') || !roles.includes('education') ? 0 : -1,
                params: { position: 'top', noScroll: true },
            }}
        >
            {contracts.map((contract, i) => {
                const { agreements, number, paygraph, payments, signed_user_date } = contract
                // Временная мера. Потом апи будет раздавать точную информацию о статусе договора.
                const isSigned = true
                const electronicAgreements = agreements.filter((item) => new Date(item?.date) > new Date('2022-02-1'))

                return (
                    <React.Fragment key={number}>
                        <Flex gap="8px">
                            <Flex w="fit-content">
                                <Title size={3} align="left">
                                    Договор № {number} от {localizeDate(signed_user_date, 'numeric')}
                                </Title>
                            </Flex>
                        </Flex>
                        <DebtAndQr data={contract} index={i} isDormitory={isDormitory} />
                        <PaymentList payments={payments ?? []} />
                        <PaygraphTable paygraph={paygraph} />
                        <ElectronicAgreementList
                            isContractSigned={isSigned}
                            electronicAgreements={electronicAgreements}
                        />
                        {i !== contracts.length - 1 && <Divider margin="0" width="100%" />}
                    </React.Fragment>
                )
            })}
        </PageWrapperTutorial>
    )
}

export default PaymentsTemplate
