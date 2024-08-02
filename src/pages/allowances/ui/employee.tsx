import { allowancesModel } from '@entities/allowances'
import { approvalStatus, orderStatus, selfApprovalStatus } from '@entities/allowances/consts'
import { AllowanceEmployee, Role } from '@entities/allowances/types'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button, Message } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'

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
        (employee?.employeeVerdicts?.every((verdict) => verdict.approvalStatus === 'Approved')
            ? 'Approved'
            : employee?.employeeVerdicts?.some((verdict) => verdict.approvalStatus === 'Declined')
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
            {employee.paymentIdentifier && <Subtext>{employee.paymentIdentifier}</Subtext>}
            <Subtext>Сумма: {employee.sum} руб.</Subtext>
            <Subtext>
                Период: {localizeDate(employee.startDate)} - {localizeDate(employee.endDate)}
            </Subtext>
            <Message
                type={statusText === 'Approved' ? 'success' : statusText === 'Declined' ? 'failure' : 'alert'}
                title={approvalStatus[statusText] || '—'}
                align="left"
                icon={null}
            />
            {role === 'Initiator'.toLowerCase() && (
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
                                type={
                                    verdict.approvalStatus === 'Approved'
                                        ? 'success'
                                        : verdict.approvalStatus === 'Declined'
                                        ? 'failure'
                                        : 'alert'
                                }
                                title={approvalStatus[verdict.approvalStatus] || '—'}
                            />
                        </Flex>
                    ))}
                    <Flex w="100%" jc="space-between" ai="center">
                        <Subtext fontSize="0.9rem">1С ЗКГУ</Subtext>
                        <Message
                            width="180px"
                            type={
                                employee.zkguApprovalStatus === 'Confirmed'
                                    ? 'success'
                                    : employee.zkguApprovalStatus === 'Rejected'
                                    ? 'failure'
                                    : 'alert'
                            }
                            title={selfApprovalStatus[employee.zkguApprovalStatus] || '—'}
                        />
                    </Flex>
                    <Flex w="100%" jc="space-between" ai="center">
                        <Flex d="column" ai="flex-start">
                            <Subtext fontSize="0.9rem">Получатель надбавки</Subtext>
                            <Subtext>{employee.initials}</Subtext>
                        </Flex>
                        <Message
                            minWidth="180px"
                            width="180px"
                            type={
                                employee.selfApprovalStatus === 'Confirmed'
                                    ? 'success'
                                    : employee.selfApprovalStatus === 'Rejected'
                                    ? 'failure'
                                    : 'alert'
                            }
                            title={selfApprovalStatus[employee.selfApprovalStatus] || '—'}
                        />
                    </Flex>
                    {employee.orderStatus && (
                        <Flex w="100%" jc="space-between" ai="center">
                            <Subtext fontSize="0.9rem">Получатель надбавки</Subtext>
                            <Message
                                width="180px"
                                type={
                                    employee.selfApprovalStatus === 'Confirmed'
                                        ? 'success'
                                        : employee.selfApprovalStatus === 'Rejected'
                                        ? 'failure'
                                        : 'alert'
                                }
                                title={orderStatus[employee.orderStatus] || '—'}
                            />
                        </Flex>
                    )}
                </>
            )}
            {role === 'Approver'.toLowerCase() && statusText !== 'Approved' && statusText !== 'Declined' && (
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
