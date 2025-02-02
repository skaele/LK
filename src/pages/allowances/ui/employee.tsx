import React from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { allowancesModel } from '@entities/allowances'
import { getStatusType } from '@entities/allowances/lib/get-status'

import { approvalStatus, orderStatus } from '@shared/api/allowances/consts'
import { AllowanceEmployee, Role } from '@shared/api/allowances/types'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button, Message } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'

export const Employee = ({
    employee,
    role,
    userId,
    id,
}: {
    employee: AllowanceEmployee
    role: Role
    userId: string
    id: string
}) => {
    const [approve, reject] = useUnit([allowancesModel.events.approve, allowancesModel.events.reject])

    const statusText =
        employee?.approvalStatus ||
        (employee?.employeeVerdicts?.every((verdict) => verdict.approvalStatus === 'Approved') &&
        employee.zkguApprovalStatus === 'Approved' &&
        employee.selfApprovalStatus === 'Approved' &&
        employee.orderStatus === 'Ready'
            ? 'Approved'
            : employee?.employeeVerdicts?.some((verdict) => verdict.approvalStatus === 'Declined') ||
                employee.zkguApprovalStatus === 'Declined' ||
                employee.selfApprovalStatus === 'Declined'
              ? 'Declined'
              : 'InProgress')
    return (
        <Layout>
            <Title align="left" size={4}>
                {employee.initials}
            </Title>
            <Title align="left" size={5}>
                {employee.divisionName}, {employee.position}
            </Title>
            {employee.paymentIdentifier && <Subtext>{employee.paymentIdentifier.name}</Subtext>}
            <Subtext>Сумма: {employee.sum} руб.</Subtext>
            <Subtext>
                Период: {localizeDate(employee.startDate)} - {localizeDate(employee.endDate)}
            </Subtext>
            <Message
                type={statusText === 'Approved' ? 'success' : statusText === 'Declined' ? 'failure' : 'alert'}
                title={approvalStatus[statusText] || '—'}
                align="left"
                icon={null}
            >
                {employee.commentary}
            </Message>
            {role === 'Initiator' && (
                <>
                    {employee.employeeVerdicts?.map((verdict) => (
                        <Flex w="100%" jc="space-between" ai="center" key={verdict.approverEmployeeId}>
                            <Flex d="column" ai="flex-start">
                                <Subtext fontSize="0.9rem">{verdict.approverPosition}</Subtext>
                                <Subtext>{verdict.approverName}</Subtext>
                            </Flex>
                            <Message
                                minWidth="180px"
                                width="180px"
                                type={getStatusType(verdict.approvalStatus)}
                                icon={verdict.approvalStatus === 'Unknown' ? null : undefined}
                                title={approvalStatus[verdict.approvalStatus] || '—'}
                                align={verdict.approvalStatus === 'Unknown' ? 'center' : 'left'}
                            />
                        </Flex>
                    ))}
                    <Flex w="100%" jc="space-between" ai="center">
                        <Subtext fontSize="0.9rem">Должностное лицо УЭФ</Subtext>
                        <Message
                            width="180px"
                            type={getStatusType(employee.zkguApprovalStatus)}
                            icon={employee.zkguApprovalStatus === 'Unknown' ? null : undefined}
                            title={approvalStatus[employee.zkguApprovalStatus] || '—'}
                            align={employee.zkguApprovalStatus === 'Unknown' ? 'center' : 'left'}
                        />
                    </Flex>
                    <Flex w="100%" jc="space-between" ai="center">
                        <Flex d="column" ai="flex-start">
                            <Subtext fontSize="0.9rem">Работник (получатель надбавки)</Subtext>
                            <Subtext>{employee.initials}</Subtext>
                        </Flex>
                        <Message
                            minWidth="180px"
                            width="180px"
                            type={getStatusType(employee.selfApprovalStatus)}
                            icon={employee.selfApprovalStatus === 'Unknown' ? null : undefined}
                            title={approvalStatus[employee.selfApprovalStatus] || '—'}
                            align={employee.selfApprovalStatus === 'Unknown' ? 'center' : 'left'}
                        />
                    </Flex>
                    {employee.orderStatus && (
                        <Flex w="100%" jc="space-between" ai="center">
                            <Flex d="column" ai="flex-start">
                                <Subtext fontSize="0.9rem">Статус приказа</Subtext>
                            </Flex>
                            <Message
                                minWidth="180px"
                                width="180px"
                                type={employee.orderStatus === 'Ready' ? 'success' : 'alert'}
                                title={orderStatus[employee.orderStatus] || '—'}
                            />
                        </Flex>
                    )}
                </>
            )}
            {role === 'Approver' && statusText !== 'Approved' && statusText !== 'Declined' && (
                <Flex jc="space-between">
                    <Button
                        text="Отказать"
                        background="var(--red)"
                        textColor="white"
                        onClick={() => {
                            reject({
                                allowanceId: id,
                                approverEmployeeId: userId,
                                employeeId: employee.id,
                            })
                        }}
                    ></Button>
                    <Button
                        text="Согласовать"
                        background="var(--green)"
                        textColor="white"
                        onClick={() => {
                            approve({
                                allowanceId: id,
                                approverEmployeeId: userId,
                                employeeId: employee.id,
                            })
                        }}
                    ></Button>
                </Flex>
            )}
        </Layout>
    )
}

const Layout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--block-content);
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
`
