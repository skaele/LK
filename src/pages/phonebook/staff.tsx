import React from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { useModal } from 'widgets'
import { PhonebookInfo, PhonebookModal } from './ui/phonebook-modal'
import { ScrollWrapper } from './styled'
import { Employee } from '@shared/api/model/phonebook'

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
            { title: 'Внутренний телефон', text: employee.phone_inner },
            { title: 'Служебный мобильный телефон', text: employee.phone_direct },
            { title: 'Адрес рабочего места', text: employee.address },
            { title: 'Номер кабинета', text: employee.room },
        ],
    }))

export const Staff = () => {
    const { subdivisionPath } = useUnit({
        subdivisionPath: phonebookModel.stores.$subdivisionPath,
        error: phonebookModel.stores.$error,
    })

    const subdivision = subdivisionPath?.[0]

    const { open } = useModal()
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
                                            { title: 'Внутренний телефон', text: subdivision.phone },
                                            { title: 'Корпоративная электронная почта', text: subdivision.email },
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
                        open(<PhonebookModal title={employee!.fio} info={getEmployeeInfo(employee!)} isEmployee />)
                    }}
                />
            )}
            {subdivision.staff.length > 0 && (
                <SubdivisionItem
                    title="Сотрудники"
                    items={subdivision.staff}
                    action={(employee) => {
                        open(<PhonebookModal title={employee!.fio} info={getEmployeeInfo(employee!)} isEmployee />)
                    }}
                />
            )}
        </ScrollWrapper>
    )
}
