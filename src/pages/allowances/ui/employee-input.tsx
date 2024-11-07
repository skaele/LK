import { allowancesModel } from '@entities/allowances'
import { Subordnate } from '@entities/allowances/types'
import Checkbox from '@shared/ui/checkbox'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'

export const EmployeeInput = ({
    subordinate: { employeeId, employeeName, divisionName, position, employmentType, rate },
}: {
    subordinate: Subordnate
}) => {
    const { addItem, removeItem, setValue, value: employees } = useUnit(allowancesModel.fields.employees)
    const employee = employees.find((employee) => employee.id === employeeId)
    const isActive = !!employee

    return (
        <Flex
            gap="0.5rem"
            onClick={() => (isActive ? removeItem(employeeId) : addItem(employeeId))}
            cursor="pointer"
            brad="0.5rem"
            hoverBackground="var(--theme-5)"
            p="0.5rem"
            ai="flex-start"
        >
            <Checkbox checked={isActive} setChecked={() => (isActive ? removeItem(employeeId) : addItem(employeeId))} />
            <Flex gap="0.5rem" d="column" ai="flex-start">
                <Title align="left" size={4}>
                    {employeeName}
                </Title>
                <Subtext>{divisionName}</Subtext>
                <Subtext>{position}</Subtext>
                <Subtext>
                    {employmentType}
                    {rate && ` (ставка: ${rate})`}
                </Subtext>
                {isActive && (
                    <Flex
                        jc="space-between"
                        ai="flex-end"
                        gap="0.5rem"
                        onClick={(e) => e.stopPropagation()}
                        cursor="auto"
                    >
                        <Input
                            title="Сумма"
                            value={employee?.sum || ''}
                            setValue={(value) => {
                                if (!employee) return
                                setValue({ ...employee, sum: value })
                            }}
                            type="number"
                            required
                            width="38%"
                            placeholder="Сумма выплаты"
                            isActive={isActive}
                        />
                        <Input
                            title="Дата начала"
                            value={employee?.startDate || ''}
                            setValue={(value) => {
                                if (!employee) return
                                setValue({ ...employee, startDate: value })
                            }}
                            type="date"
                            required
                            width="30%"
                            isActive={isActive}
                        />
                        <Input
                            title="Дата окончания"
                            value={employee?.endDate || ''}
                            setValue={(value) => {
                                if (!employee) return
                                setValue({ ...employee, endDate: value })
                            }}
                            type="date"
                            required
                            width="30%"
                            minValue={employee?.startDate}
                            isActive={isActive}
                        />
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}
