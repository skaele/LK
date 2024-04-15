import Flex from '@shared/ui/flex'
import React, { useEffect, useMemo } from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { Loader } from '@shared/ui/atoms/loader'
import { useModal } from 'widgets'
import { PhonebookModal } from './ui/phonebook-modal'
import { Employee } from '@shared/api/model/phonebook'

const head = 'Антонова Антонина Антоновна'
const employee: Employee = {
    fio: 'Антонова Антонина Антоновна',
    jobs: [
        {
            post: 'Главный бухгалтер',
            phone: '+7 800 300 40 50',
            email: 'a.n.surname@mospolytech.ru',
            address: 'г. Москва, ул. Ленина, д. 1',
            cabinet: 'ПР 1101',
            extPhone: '1004',
        },
        {
            post: 'Главный бухгалтер2',
            phone: '+7 800 300 40 50',
            email: 'a.n.surname@mospolytech.ru',
            address: 'г. Москва, ул. Ленина, д. 1',
            cabinet: 'ПР 1101',
            extPhone: '1004',
        },
    ],
}
export const Staff = () => {
    const { title, subdivision, error } = useUnit({
        title: phonebookModel.stores.$chosenSubdivision,
        subdivision: phonebookModel.stores.$subdivisionData,
        error: phonebookModel.stores.$error,
    })
    const items = useUnit(phonebookModel.stores.$subdivisionData)
    const staff = useMemo(() => items && items.staff.map((item) => item.fio), [items])

    useEffect(() => {
        phonebookModel.events.getSubdivisionData({ filter: { title: title || '', id: '' } })
    }, [title])

    const { open } = useModal()
    if (!title) return null

    return (
        <Loader
            load={() => {
                phonebookModel.events.getSubdivisionData({ search: title })
            }}
            data={subdivision}
            error={error}
        >
            <Flex d="column" ai="flex-start" jc="flex-start" gap="20px">
                {subdivision && (
                    <SubdivisionItem
                        title="Информация"
                        items={[title]}
                        // head: string
                        // phone?: string
                        // extPhone?: string
                        // email?: string
                        // address?: string
                        // cabinet?: string
                        // staff: Employee[]
                        action={() => {
                            open(
                                <PhonebookModal
                                    title={title}
                                    info={[
                                        {
                                            attributes: [
                                                { title: 'Руководитель', text: subdivision.head },
                                                { title: 'Номер телефона', text: subdivision.phone },
                                                { title: 'Электронная почта', text: subdivision.email },
                                                { title: 'Адрес', text: subdivision.address },
                                                { title: 'Кабинет', text: subdivision.cabinet },
                                            ],
                                        },
                                    ]}
                                />,
                            )
                        }}
                    />
                )}
                {head && (
                    <SubdivisionItem
                        title="Руководитель"
                        items={[subdivision?.head || '-']}
                        action={(fio) => {
                            open(
                                <PhonebookModal
                                    title={fio}
                                    info={employee.jobs.map((job) => ({
                                        subtitle: job.post,
                                        attributes: [
                                            { title: 'Электронная почта', text: job.email },
                                            { title: 'Номер телефона', text: job.phone },
                                            { title: 'Добавочный номер', text: job.extPhone },
                                            { title: 'Адрес', text: job.address },
                                            { title: 'Кабинет', text: job.cabinet },
                                        ],
                                    }))}
                                    isEmployee
                                />,
                            )
                        }}
                    />
                )}
                {!!staff?.length && staff.length > 0 && (
                    <SubdivisionItem
                        title="Сотрудники"
                        items={staff}
                        action={(fio) => {
                            open(
                                <PhonebookModal
                                    title={fio}
                                    info={employee.jobs.map((job) => ({
                                        subtitle: job.post,
                                        attributes: [
                                            { title: 'Электронная почта', text: job.email },
                                            { title: 'Номер телефона', text: job.phone },
                                            { title: 'Добавочный номер', text: job.extPhone },
                                            { title: 'Адрес', text: job.address },
                                            { title: 'Кабинет', text: job.cabinet },
                                        ],
                                    }))}
                                    isEmployee
                                />,
                            )
                        }}
                    />
                )}
            </Flex>
        </Loader>
    )
}
