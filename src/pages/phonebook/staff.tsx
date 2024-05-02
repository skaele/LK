import React, { useMemo } from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { useModal } from 'widgets'
import { PhonebookInfo, PhonebookModal } from './ui/phonebook-modal'
import { ScrollWrapper } from './styled'
import { Employee } from '@shared/api/model/phonebook'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { findEmployeeByFio } from './lib/find-employee-by-fio'
import { useHistory } from 'react-router'
import { getEmployeeDefaultSubdivision } from './lib/get-employee-default-subdivision'
import { setSubdivisionPath } from './lib/set-subdivision-path'

const getEmployeeInfo = (employee: Employee): PhonebookInfo[] =>
    employee.job.map((job) => ({
        subtitle: job.subdivision + ' • ' + job.post,
        attributes: [
            {
                title: 'Тип работы',
                text: job.jobType,
            },
            {
                id: 'email',
                title: 'Корпоративная электронная почта',
                text: employee.email,
            },
            { id: 'innerPhone', title: 'Внутренний телефон', text: employee.phone_inner },
            { id: 'mobile', title: 'Служебный мобильный телефон', text: employee.phone_direct },
            { title: 'Адрес рабочего места', text: employee.address },
            { title: 'Номер кабинета', text: employee.room },
        ],
    }))

export const Staff = () => {
    const history = useHistory()
    const query = useQueryParams()
    const fio = query.get('fio') || ''
    const { subdivisionPath, subdivisions } = useUnit({
        subdivisionPath: phonebookModel.stores.subdivisionPath,
        subdivisions: phonebookModel.stores.subdivisions,
    })

    const subdivision = subdivisionPath?.[0]

    const { open } = useModal()

    const searchedEmployees = useMemo(() => {
        if (fio && subdivisions) {
            const employees = findEmployeeByFio(subdivision ? [subdivision] : subdivisions, fio.toLowerCase())
            let subdivisionName = ''
            if (employees.length === 1) {
                subdivisionName = getEmployeeDefaultSubdivision(employees[0])
            }
            history.push({
                search: new URLSearchParams({
                    subdivision: subdivisionName,
                    fio,
                }).toString(),
            })
            setSubdivisionPath(subdivisions, subdivisionName)
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

    if (!subdivision) return null

    return (
        <ScrollWrapper d="column" ai="flex-start" jc="flex-start" gap="20px">
            {subdivision && (
                <SubdivisionItem
                    title="Информация"
                    items={[subdivision]}
                    action={() => {
                        open(
                            <PhonebookModal
                                title={subdivision.name}
                                info={[
                                    {
                                        attributes: [
                                            { title: 'Руководитель', text: subdivision.head.fio },
                                            {
                                                title: 'Корпоративная электронная почта подразделения',
                                                text: subdivision.email,
                                            },
                                            {
                                                id: 'innerPhone',
                                                title: 'Внутренний телефон',
                                                text: subdivision.phone_inner,
                                            },
                                            {
                                                id: 'mobile',
                                                title: 'Прямой телефон',
                                                text: subdivision.phone_direct,
                                            },
                                            { title: 'Адрес рабочего места', text: subdivision.address },
                                            { title: 'Номер кабинета', text: subdivision.room },
                                        ],
                                    },
                                ]}
                            />,
                        )
                    }}
                />
            )}
            {subdivision?.head?.fio && (
                <SubdivisionItem
                    title="Руководитель"
                    items={[subdivision.head]}
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
            {subdivision.staff.filter((person) => person.fio !== subdivision.head.fio).length > 0 && (
                <SubdivisionItem
                    title="Сотрудники"
                    items={subdivision.staff}
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
