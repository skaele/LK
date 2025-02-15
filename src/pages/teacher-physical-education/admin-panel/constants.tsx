import React from 'react'

import { peStudentCompetitionModel } from '@entities/pe-student/model'

import { Button } from '@shared/ui/button'

export const columns = [
    { field: 'name', title: 'Название' },
    {
        field: 'name',
        title: '',
        render: (value: string) => {
            return <Button onClick={() => peStudentCompetitionModel.events.remove(value)} text="Удалить" />
        },
    },
]
