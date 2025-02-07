import React from 'react'

import { useUnit } from 'effector-react'
<<<<<<<< HEAD:src/features/all-staff/staff-modal.tsx

import { TeacherModal } from '@features/user/ui'

import { phonebookModel } from '@entities/phonebook'

import { userModel } from '@shared/session'
import { UserProps } from '@shared/ui/user-header/types'

import { findEmployeeByFio } from './lib/find-employee-by-fio'
import { getEmployeeInfo } from './lib/get-employee-info'
import { PhonebookModal } from './ui/phonebook-modal'
========
import { UserProps } from 'widgets/user/types'
import { TeacherModal } from 'widgets/user/ui'

import { phonebookModel } from '@entities/phonebook'
import { userModel } from '@entities/user'

import { findEmployeeByFio } from '../lib/find-employee-by-fio'
import { getEmployeeInfo } from '../lib/get-employee-info'
import { PhonebookModal } from './phonebook-modal'
>>>>>>>> master:src/pages/all-staff/ui/staff-modal.tsx

type Props = Pick<UserProps, 'name' | 'division' | 'avatar' | 'id'>

export const StaffModal = ({ name, ...props }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const isStaff = user?.user_status === 'staff'
    const { subdivisions } = useUnit({
        subdivisions: phonebookModel.stores.subdivisions,
    })

    if (!isStaff || !subdivisions) return <TeacherModal name={name} {...props} />
    const employee = findEmployeeByFio(subdivisions, name)[0]
    return (
        <PhonebookModal
            id={props.id}
            title={employee.fio}
            info={getEmployeeInfo(employee)}
            avatar={employee.avatar}
            isEmployee
        />
    )
}
