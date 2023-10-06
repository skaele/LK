import { Message } from '@shared/ui/message'
import React from 'react'
import { FirstCourseIntroMessage } from './first-course'
import { SecondTillFourthIntroMessage } from './second-fouth-course'
import { useUnit } from 'effector-react'
import { $roles } from '@entities/roles/model'

export const ProjectActivityIntroMessage = () => {
    const roles = useUnit($roles)
    if (roles.size === 0) return null

    return (
        <Message
            lineHeight="1.5rem"
            fontSize="0.86rem"
            type="info"
            title={roles.has('freshman') ? 'Информация для студентов 1 курса!' : 'Вниманию студентов 2-4 курсов!'}
        >
            {roles.has('freshman') ? <FirstCourseIntroMessage /> : <SecondTillFourthIntroMessage />}
        </Message>
    )
}
