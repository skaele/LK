import Flex from '@shared/ui/flex'
import React, { useEffect, useMemo } from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { Loader } from '@shared/ui/atoms/loader'
import { useModal } from 'widgets'
import { SubdivisionModal } from './subdivision-modal'
import { EmployeeModal } from './employee-modal'

const head = 'Антонова Антонина Антоновна'

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

    if (!title) return null
    const { open } = useModal()

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
                        action={() => {
                            open(<SubdivisionModal subdivision={subdivision} />)
                        }}
                    />
                )}
                {head && (
                    <SubdivisionItem
                        title="Руководитель"
                        items={[subdivision?.head || '-']}
                        action={(fio) => {
                            open(<EmployeeModal fio={fio} />)
                        }}
                    />
                )}
                {!!staff?.length && staff.length > 0 && (
                    <SubdivisionItem
                        title="Сотрудники"
                        items={staff}
                        action={(fio) => {
                            open(<EmployeeModal fio={fio} />)
                        }}
                    />
                )}
            </Flex>
        </Loader>
    )
}
