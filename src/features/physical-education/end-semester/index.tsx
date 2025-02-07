import React from 'react'

import { useUnit } from 'effector-react'

import { peExamStudentModel } from '@features/physical-education/end-semester/pe-exam-student-model'

import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'

import { peStudentEndSemesterModel } from '../student/pe-student-end-semester'
import { Status } from '../student/pe-student-end-semester/model'
import { STATUSES_TEXT, STATUS_ICON } from './constants'
import { Title } from './styled'

export const EndSemester = () => {
    const [statuses, students] = useUnit([
        peStudentEndSemesterModel.stores.statuses,
        peExamStudentModel.stores.$pEStudents,
    ])

    return (
        <Flex p="30px" d="column" jc="space-between">
            {students.map((student) => (
                <Flex key={student.studentGuid} w="100%" gap="16px" ai="flex-start" jc="space-between">
                    <Title>{student.fullName}</Title>
                    <Flex gap="8px" w="auto">
                        <Subtext align="center">
                            {STATUSES_TEXT[statuses[student.studentGuid] ?? Status.LOADING]}
                        </Subtext>
                        {STATUS_ICON[statuses[student.studentGuid] ?? Status.LOADING]}
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
}
