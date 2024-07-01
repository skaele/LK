import { peStudentCompetitionModel } from '@entities/pe-student/model'
import { AddCompetition } from '@features/physical-education/admin-panel/add-competition/ui'

import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useModal } from 'widgets'
import { columns } from './constants'
import { CompWrapper, Wrapper } from './styled'

export const AdminPanel = () => {
    const [competitions] = useUnit([peStudentCompetitionModel.stores.$competitions])

    const { open } = useModal()

    const handleAddCompetition = () => {
        open(<AddCompetition />)
    }

    useEffect(() => {
        peStudentCompetitionModel.events.load()
    }, [])

    return (
        <Wrapper>
            <CompWrapper>
                <Title align="left" size={4}>
                    Соревнования
                </Title>
                <Button onClick={handleAddCompetition} text={'Добавить соревнование'} />
                <Table
                    data={competitions.map((c) => ({
                        name: c,
                    }))}
                    columns={columns}
                    onRowClick={() => {}}
                />
            </CompWrapper>
        </Wrapper>
    )
}
