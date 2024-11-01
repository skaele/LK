import Checkbox from '@shared/ui/checkbox'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'
import { holidayWorkModel } from '../model'
import Select, { SelectPage } from '@features/select'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
import { Subordinate } from '@pages/hr-applications/types'
import styled from 'styled-components'
import getRightGenderWord from '@shared/lib/get-right-gender-word'

const workHours = [
    {
        id: 0,
        title: '1',
    },
    {
        id: 1,
        title: '2',
    },
    {
        id: 2,
        title: '3',
    },
    {
        id: 3,
        title: '4',
    },
    {
        id: 4,
        title: '5',
    },
    {
        id: 5,
        title: '6',
    },
    {
        id: 6,
        title: '7',
    },
    {
        id: 7,
        title: '8',
    },
]

export const EmployeeInput = ({
    subordinate: { employeeId, employeeName, divisionName, position, employmentType, rate, kedoAgreed, sex },
}: {
    subordinate: Subordinate
}) => {
    const { addItem, removeItem, setValue, value: employees } = useUnit(holidayWorkModel.fields.employees)
    const employee = employees.find((employee) => employee.employeeGuid === employeeId)
    const isActive = !!employee

    return (
        <Flex
            position="relative"
            gap="0.5rem"
            onClick={() => {
                if (kedoAgreed) isActive ? removeItem(employeeId) : addItem(employeeId)
            }}
            cursor={isActive ? 'pointer' : undefined}
            borderRadius="0.5rem"
            hoverBackground={isActive ? 'var(--theme-5)' : undefined}
            p="0.5rem"
            ai="flex-start"
        >
            <Checkbox
                isActive={!!kedoAgreed}
                checked={isActive}
                setChecked={() => (isActive ? removeItem(employeeId) : addItem(employeeId))}
            />
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
                    <Flex jc="flex-start" ai="flex-end" gap="0.5rem" onClick={(e) => e.stopPropagation()} cursor="auto">
                        <Input
                            title="Дата выхода"
                            value={employee?.weekendWorkDate || ''}
                            setValue={(value) => {
                                if (!employee) return
                                setValue({ ...employee, weekendWorkDate: value })
                            }}
                            type="date"
                            required
                            width="45%"
                            isActive={isActive}
                        />
                        <Select
                            title="Время работы, ч"
                            items={workHours}
                            selected={findCurrentInSelect(workHours, employee?.hoursToWork.toString())}
                            setSelected={(value: SelectPage | null) => {
                                if (!employee) return
                                setValue({ ...employee, hoursToWork: Number(value?.title || 0) })
                            }}
                            required
                            width="45%"
                            isActive={isActive}
                            placeholder="Время работы"
                        />
                    </Flex>
                )}
                {!kedoAgreed && (
                    <KedoNotAgreed>Не {getRightGenderWord(sex, 'согласен', 'согласна')} на КЭДО</KedoNotAgreed>
                )}
            </Flex>
        </Flex>
    )
}

const KedoNotAgreed = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
`
