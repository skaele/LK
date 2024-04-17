import Flex from '@shared/ui/flex'
import React from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { Loader } from '@shared/ui/atoms/loader'
import { useModal } from 'widgets'
import { PhonebookModal } from './ui/phonebook-modal'

export const Staff = () => {
    const { subdivision, error } = useUnit({
        subdivision: phonebookModel.stores.$chosenSubdivision,
        error: phonebookModel.stores.$error,
    })

    const { open } = useModal()
    if (!subdivision) return null

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
                                    title={subdivision.name}
                                    info={[
                                        {
                                            attributes: [
                                                { title: 'Руководитель', text: subdivision.head.fio },
                                                { title: 'Номер телефона', text: subdivision.phone },
                                                { title: 'Электронная почта', text: subdivision.email },
                                                { title: 'Адрес', text: subdivision.address },
                                                { title: 'Кабинет', text: subdivision.room },
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
                            const phone =
                                employee!.phone_direct && employee!.phone_inner
                                    ? {
                                          title: 'Служебный телефон (прямой/дополнительный)',
                                          text: employee!.phone_direct + '/' + employee!.phone_inner,
                                      }
                                    : employee!.phone_direct
                                    ? {
                                          title: 'Служебный телефон (прямой)',
                                          text: employee!.phone_direct,
                                      }
                                    : {
                                          title: 'Служебный телефон (дополнительный)',
                                          text: employee!.phone_inner,
                                      }
                            open(
                                <PhonebookModal
                                    title={employee!.fio}
                                    info={[
                                        {
                                            subtitle: employee!.post,
                                            attributes: [
                                                // {
                                                //     title: 'Тип работы',
                                                //     text: job.mainJob ? 'Основное место работы' : 'По совместительству',
                                                // },
                                                { title: 'Электронная почта', text: employee!.email },
                                                phone,
                                                { title: 'Служебный мобильный телефон', text: employee!.phone_mobile },
                                                { title: 'Адрес', text: employee!.address },
                                                { title: 'Кабинет', text: employee!.room },
                                            ],
                                        },
                                    ]}
                                    isEmployee
                                />,
                            )
                        }}
                    />
                )}
                {subdivision.staff.length > 0 && (
                    <SubdivisionItem
                        title="Сотрудники"
                        items={subdivision.staff}
                        action={(employee) => {
                            open(
                                <PhonebookModal
                                    title={employee!.fio}
                                    info={[
                                        {
                                            subtitle: employee!.post,
                                            attributes: [
                                                // {
                                                //     title: 'Тип работы',
                                                //     text: employee!.mainJob
                                                //         ? 'Основное место работы'
                                                //         : 'По совместительству',
                                                // },
                                                { title: 'Электронная почта', text: employee!.email },
                                                {
                                                    title: 'Служебный телефон (прямой/дополнительный)',
                                                    text:
                                                        employee!.phone_direct + employee!.phone_inner
                                                            ? '/' + employee!.phone_inner
                                                            : '',
                                                },
                                                { title: 'Служебный мобильный телефон', text: employee!.phone_mobile },
                                                { title: 'Адрес', text: employee!.address },
                                                { title: 'Кабинет', text: employee!.room },
                                            ],
                                        },
                                    ]}
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
