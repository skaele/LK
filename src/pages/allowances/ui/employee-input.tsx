import { allowancesModel } from '@entities/allowances'
import { Subordnate } from '@entities/allowances/types'
import Checkbox from '@shared/ui/checkbox'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'

export const EmployeeInput = ({
    subordinate: { employeeId, employeeName, divisionName },
}: {
    subordinate: Subordnate
}) => {
    const { addItem, removeItem, setValue, value: employees } = useUnit(allowancesModel.fields.employees)
    const employee = employees.find((employee) => employee.id === employeeId)
    const [sum, setSum] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const isActive = !!employee
    useEffect(() => {
        setValue({ id: employeeId, sum, startDate, endDate })
    }, [sum, startDate, endDate])

    useEffect(() => {
        if (isActive) setStartDate(employee.startDate)
    }, [employee?.startDate])
    useEffect(() => {
        if (isActive) setEndDate(employee.endDate)
    }, [employee?.endDate])
    return (
        <Flex gap="0.5rem">
            <Checkbox
                checked={!!employee}
                setChecked={(value) => (value ? addItem(employeeId) : removeItem(employeeId))}
            />
            <Flex gap="0.5rem" d="column" ai="flex-start">
                <Title align="left" size={4}>
                    {employeeName}
                </Title>
                <Subtext>{divisionName}</Subtext>
                <Flex jc="space-between" ai="flex-end" gap="0.5rem">
                    <Input
                        title="Сумма"
                        value={sum}
                        setValue={setSum}
                        type="number"
                        required
                        width="38%"
                        placeholder="Сумма выплаты"
                        isActive={isActive}
                    />
                    <Input
                        title="Дата начала"
                        value={startDate}
                        setValue={setStartDate}
                        type="date"
                        required
                        width="30%"
                        isActive={isActive}
                    />
                    <Input
                        title="Дата окончания"
                        value={endDate}
                        setValue={setEndDate}
                        type="date"
                        required
                        width="30%"
                        minValue={startDate}
                        isActive={isActive}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}
