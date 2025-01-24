import React, { useMemo } from 'react'

import { useUnit } from 'effector-react'
import { useModal } from 'widgets'

import { phonebookModel } from '@entities/phonebook'

import useQueryParams from '@shared/lib/hooks/use-query-params'

import { findEmployeeByFio } from './lib/find-employee-by-fio'
import { getEmployeeInfo } from './lib/get-employee-info'
import { getSubdivisionInfo } from './lib/get-subdivision-info'
import { ScrollWrapper } from './styled'
import { SubdivisionItem } from './subdivision-item'
import { PhonebookModal } from './ui/phonebook-modal'

export const Staff = () => {
    const query = useQueryParams()
    const fio = query.get('fio') || ''
    const subdivision = query.get('subdivision') || ''
    const { subdivisionPath, subdivisions } = useUnit({
        subdivisionPath: phonebookModel.stores.subdivisionPath,
        subdivisions: phonebookModel.stores.subdivisions,
    })

    const chosenSubdivision = subdivisionPath?.[0]

    const { open } = useModal()

    const searchedEmployees = useMemo(() => {
        if (fio && subdivisions) {
            const employees = findEmployeeByFio(chosenSubdivision ? [chosenSubdivision] : subdivisions, fio)
            return employees
        }
        return []
    }, [fio, subdivision, subdivisions])

    if (fio && subdivisions) {
        return (
            <ScrollWrapper d="column" ai="flex-start" jc="flex-start" gap="20px">
                <SubdivisionItem
                    title="Сотрудники"
                    items={searchedEmployees}
                    action={(employee) => {
                        open(
                            <PhonebookModal
                                title={employee!.fio}
                                info={getEmployeeInfo(employee!)}
                                avatar={employee!.avatar}
                                isEmployee
                            />,
                        )
                    }}
                />
            </ScrollWrapper>
        )
    }

    if (!chosenSubdivision) return null

    return (
        <ScrollWrapper d="column" ai="flex-start" jc="flex-start" gap="20px">
            <SubdivisionItem
                title="Информация"
                items={[chosenSubdivision]}
                action={() => {
                    open(<PhonebookModal title={chosenSubdivision.name} info={getSubdivisionInfo(chosenSubdivision)} />)
                }}
            />
            {chosenSubdivision?.head?.fio && (
                <SubdivisionItem
                    title="Руководитель"
                    items={[chosenSubdivision.head]}
                    action={(employee) => {
                        open(
                            <PhonebookModal
                                title={employee!.fio}
                                info={getEmployeeInfo(employee!)}
                                avatar={employee!.avatar}
                                isEmployee
                            />,
                        )
                    }}
                />
            )}
            {chosenSubdivision.staff.filter((person) => person.fio !== chosenSubdivision.head.fio).length > 0 && (
                <SubdivisionItem
                    title="Сотрудники"
                    items={chosenSubdivision.staff}
                    action={(employee) => {
                        open(
                            <PhonebookModal
                                title={employee!.fio}
                                info={getEmployeeInfo(employee!)}
                                avatar={employee!.avatar}
                                isEmployee
                            />,
                        )
                    }}
                />
            )}
        </ScrollWrapper>
    )
}
