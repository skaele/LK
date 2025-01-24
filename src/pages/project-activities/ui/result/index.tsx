import React from 'react'

import { Project } from '@shared/api/model/project-activites'
import { Title } from '@shared/ui/title'

import { ScoreItem } from '../score-item'

type Props = {
    data: Project | null | undefined
}

const Result = ({ data }: Props) => {
    const lastSemestr = Number.parseInt(data?.arrear_balls ?? '0')
    const currentSemestr = Number.parseInt(data?.current_semestr_balls ?? '0')

    return (
        <div>
            <Title size={4} align="left" bottomGap>
                Итог
            </Title>
            {data?.arrear !== '0' && (
                <ScoreItem
                    title="Баллы в счет погашения долга "
                    score={lastSemestr}
                    scoreText={data?.arrear_result ?? ''}
                    color={data?.arrear_result === 'зачтено' ? 'var(--green)' : 'var(--red)'}
                />
            )}
            <ScoreItem
                title="За текущий семестр баллов "
                score={currentSemestr}
                scoreText={data?.current_semestr_result ?? ''}
            />
        </div>
    )
}

export default Result
