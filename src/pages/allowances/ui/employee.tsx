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
    return (
        <Layout>
            <Title align="left" size={4}>
                {employee.initials}
            </Title>
            <Title align="left" size={5}>
                {employee.divisionName}, {employee.position}
            </Title>
            <Message
                type={
                    employee.approvalStatus === 'Approved'
                        ? 'success'
                        : employee.approvalStatus === 'Declined'
                        ? 'failure'
                        : 'alert'
                }
                title={allowanceConstants[employee.approvalStatus] || '—'}
                align="left"
                icon={null}
            />
            <Subtext>Сумма: {employee.sum}</Subtext>
            <Subtext>
                Период: {localizeDate(employee.startDate)} - {localizeDate(employee.endDate)}
            </Subtext>
            {role === 'Approver'.toLowerCase() && (
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
                                allowanceId: employee.id,
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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--block-content);
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
`
