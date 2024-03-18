import Flex from '@shared/ui/flex'
import React, { useEffect, useMemo } from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { Loader } from '@shared/ui/atoms/loader'

const head = 'Хуснулина Дария Рашитовна'

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

    return (
        <Loader
            load={() => {
                phonebookModel.events.getSubdivisionData({ search: title })
            }}
            data={subdivision}
            error={error}
        >
            <Flex d="column" ai="flex-start" jc="flex-start" gap="20px">
                <SubdivisionItem title="Информация" items={[title]} />
                {head && <SubdivisionItem title="Руководитель" items={[head]} />}
                {!!staff?.length && staff.length > 0 && <SubdivisionItem title="Сотрудники" items={staff} />}
            </Flex>
        </Loader>
    )
}
