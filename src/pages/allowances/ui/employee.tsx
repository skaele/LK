import { allowancesModel } from '@entities/allowances'
import { allowanceConstants } from '@entities/allowances/consts'
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
        (employee?.employeeVerdicts?.every((verdict) => verdict.approvalStatus === 'Согласовано')
            ? 'Approved'
            : employee?.employeeVerdicts?.some((verdict) => verdict.approvalStatus === 'Отклонено')
            ? 'Declined'
            : 'Unknown')
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
                title={allowanceConstants[statusText] || '—'}
                align="left"
                icon={null}
            />
            {role === 'Initiator'.toLowerCase() && (
                <>
                    {employee.employeeVerdicts?.map((verdict) => (
                        <Flex w="100%" jc="space-between" ai="center" key={verdict.approverEmployeeId}>
                            <Subtext>{verdict.approverName}</Subtext>
                            <Message
                                width="180px"
                                type={
                                    verdict.approvalStatus === 'Согласовано'
                                        ? 'success'
                                        : verdict.approvalStatus === 'Отклонено'
                                        ? 'failure'
                                        : 'alert'
                                }
                                title={verdict.approvalStatus}
                            />
                        </Flex>
                    ))}
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
