import Flex from '@shared/ui/flex'
import React, { useEffect, useMemo } from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { Loader } from '@shared/ui/atoms/loader'
import { useModal } from 'widgets'
import { PhonebookModal } from './ui/phonebook-modal'
import { Employee } from '@shared/api/model/phonebook'

export const Staff = () => {
    const { title, subdivision, error } = useUnit({
        title: phonebookModel.stores.$chosenSubdivision,
        subdivision: phonebookModel.stores.$subdivisionData,
        error: phonebookModel.stores.$error,
    })
    const items = useUnit(phonebookModel.stores.$subdivisionData)
    const staff = useMemo(() => items && items.staff.map((item) => item.fio), [items])

    useEffect(() => {
        if (title) phonebookModel.events.getSubdivisionData({ filter: { title: title, id: '' } })
    }, [title])

    const { open } = useModal()
    if (!title) return null

    return (
        <Loader load={() => {}} data={subdivision} error={error}>
            <Flex d="column" ai="flex-start" jc="flex-start" gap="20px">
                {subdivision && (
                    <SubdivisionItem
                        title="Информация"
                        items={[subdivision]}
                        action={() => {
                            open(
                                <PhonebookModal
                                    title={subdivision.title}
                                    info={[
                                        {
                                            attributes: [
                                                { title: 'Руководитель', text: subdivision.head.fio },
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
                {subdivision?.head && (
                    <SubdivisionItem
                        title="Руководитель"
                        items={[subdivision!.head]}
                        action={(employee) => {
                            open(
                                <PhonebookModal
                                    title={(employee as Employee).fio}
                                    info={(employee as Employee).jobs.map((job) => ({
                                        subtitle: job.post,
                                        attributes: [
                                            {
                                                title: 'Тип работы',
                                                text: job.mainJob ? 'Основное место работы' : 'По совместительству',
                                            },
                                            { title: 'Электронная почта', text: job.email },
                                            { title: 'Служебный телефон (прямой/дополнительный)', text: job.phone },
                                            { title: 'Служебный мобильный телефон', text: job.mobilePhone },
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
                        items={items?.staff || []}
                        action={(employee) => {
                            open(
                                <PhonebookModal
                                    title={(employee as Employee).fio}
                                    info={(employee as Employee).jobs.map((job) => ({
                                        subtitle: job.post,
                                        attributes: [
                                            {
                                                title: 'Тип работы',
                                                text: job.mainJob ? 'Основное место работы' : 'По совместительству',
                                            },
                                            { title: 'Электронная почта', text: job.email },
                                            { title: 'Служебный телефон (прямой/дополнительный)', text: job.phone },
                                            { title: 'Служебный мобильный телефон', text: job.mobilePhone },
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
