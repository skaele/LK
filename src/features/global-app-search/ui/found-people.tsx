import React from 'react'

import User from '@features/user'

import { TStudent, TTeacher } from '@shared/api/model'
import { Employee } from '@shared/api/model/phonebook'
import Flex from '@shared/ui/flex'

export const FoundPeople = ({
    people,
    type,
}: {
    people: (TTeacher | TStudent | Employee)[] | null
    type: 'stud' | 'staff'
}) => {
    if (!people || people.length === 0) return null

    return (
        <Flex d="column">
            {people.map((s) => (
                <User
                    id={'guid_person' in s ? s.guid_person : s.id}
                    name={s.fio}
                    type={type}
                    {...s}
                    key={'id' in s ? s.id : s.guid_person}
                    division={
                        'division' in s
                            ? s.division
                            : 'job' in s
                              ? s.job.find((j) => j.post === s.post)?.subdivision
                              : ''
                    }
                />
            ))}
        </Flex>
    )
}
