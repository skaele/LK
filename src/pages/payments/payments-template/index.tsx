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

const MIN_AGREEMENT_DATE = new Date(2022, 0, 1)

type Props = {
    contractsWithDebt: PaymentsContract[]
    contractsWithoutDebt: PaymentsContract[]
}

const PaymentsTemplate = ({ contractsWithDebt, contractsWithoutDebt }: Props) => {
    const roles = useUnit(tutorialModel.stores.roles)
    const length = contractsWithDebt?.length + contractsWithoutDebt?.length
    if (!contractsWithDebt && !contractsWithoutDebt) return null

    return (
        <PageWrapperTutorial
            tutorialModule={{
                id: 'payments',
                step: !roles.includes('dormitory') || !roles.includes('education') ? 0 : -1,
                params: { position: 'top', noScroll: true },
            }}
        >
            {contractsWithDebt?.map((contract, i) => (
                <>
                    <Contract contract={contract} index={i} />
                    {i !== length - 1 && <Divider margin="0" width="100%" />}
                </>
            ))}
            {contractsWithoutDebt?.map((contract, i) => (
                <>
                    <Contract contract={contract} index={i} />
                    {contractsWithDebt.length + i !== length - 1 && <Divider margin="0" width="100%" />}
                </>
            ))}
        </PageWrapperTutorial>
    )
}

function Contract({ contract, index }: { contract: PaymentsContract; index: number }) {
    const { agreements, number, paygraph, payments, signed_user_date, type } = contract
    // Временная мера. Потом апи будет раздавать точную информацию о статусе договора.
    const isSigned = true
    const electronicAgreements = agreements.filter((item) => new Date(item?.date) > MIN_AGREEMENT_DATE)
    const isDormitory = type === 'Общежитие'
    return (
        <React.Fragment key={number}>
            <Flex gap="8px">
                <Flex w="fit-content">
                    <Title size={3} align="left">
                        Договор № {number} от {localizeDate(signed_user_date, 'numeric')}
                    </Title>
                </Flex>
            </Flex>
            <DebtAndQr data={contract} index={index} isDormitory={isDormitory} />
            <PaymentList payments={payments ?? []} />
            <PaygraphTable paygraph={paygraph} />
            <ElectronicAgreementList isContractSigned={isSigned} electronicAgreements={electronicAgreements} />
        </React.Fragment>
    )
}

export default PaymentsTemplate
