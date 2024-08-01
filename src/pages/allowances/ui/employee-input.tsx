import { Employee } from '@entities/allowances/types'
import Select, { SelectPage } from '@features/select'
import { Colors } from '@shared/constants'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
import React, { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

export const EmployeeInput = ({
    remove,
    setEmployee,
    employee,
    employees,
    index,
}: {
    employee: Employee
    setEmployee: ({ employee, index }: { employee: Employee; index: number }) => void
    remove: () => void
    index: number
    employees: SelectPage[]
}) => {
    const [id, setId] = useState<SelectPage | null>(findCurrentInSelect(employees, employee.id))
    const [sum, setSum] = useState(employee.sum.toString())
    const [startDate, setStartDate] = useState(employee.startDate)
    const [endDate, setEndDate] = useState(employee.endDate)

    useEffect(() => {
        setEmployee({ employee: { id: id?.id.toString() || '', sum: Number(sum), startDate, endDate }, index })
    }, [id, sum, startDate, endDate])

    return (
        <Flex gap="0.5rem" d="column">
            <Flex gap="0.5rem" ai="flex-end">
                <Select
                    title="Сотрудник"
                    items={employees}
                    selected={id}
                    required
                    setSelected={setId}
                    width="100%"
                    withSearch
                />
                <Button
                    icon={<IoCloseCircleOutline />}
                    onClick={() => {
                        remove()
                    }}
                    textColor={Colors.red.main}
                    background="transparent"
                    hoverBackground={Colors.red.transparent3}
                />
            </Flex>
            <Flex jc="space-between" ai="flex-end">
                <Input title="Сумма" value={sum} setValue={setSum} type="number" required width="33%" />
                <Input title="Дата начала" value={startDate} setValue={setStartDate} type="date" required width="33%" />
                <Input title="Дата окончания" value={endDate} setValue={setEndDate} type="date" required width="33%" />
            </Flex>
            {/* <DateInterval
                title="Дата окончания"
                required
                dates={value as string[]}
                setDates={(dates: string[]) => handleDates(dates)}
                valid={validDates}
                setValid={setValidDates}
                minValue={minValueInput}
                diff={diff}
            /> */}
        </Flex>
    )
}
