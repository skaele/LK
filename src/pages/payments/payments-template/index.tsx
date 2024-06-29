import { ElectronicAgreementList, PageWrapper, PaymentList } from '@features/payments'
import Flex from '@shared/ui/flex'
import { Divider, Title } from '@ui/atoms'
import React from 'react'
import DebtAndQr from './debt-and-qr'
import PaygraphTable from './paygraph-table'
import { PaymentsContract } from '@shared/api/model'
import localizeDate from '@shared/lib/dates/localize-date'

type Props = {
    contracts: PaymentsContract[] | undefined
}

const PaymentsTemplate = ({ contracts }: Props) => {
    if (!contracts) return null

    return (
        <PageWrapper>
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
                        <DebtAndQr data={contract} />
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
        </PageWrapper>
    )
}

export default PaymentsTemplate
