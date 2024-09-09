import React from 'react'
import { TeacherModal } from 'widgets/user/ui'
import { PhonebookModal } from './phonebook-modal'
import { userModel } from '@entities/user'
import { findEmployeeByFio } from '../lib/find-employee-by-fio'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { getEmployeeInfo } from '../lib/get-employee-info'
import { UserProps } from 'widgets/user/types'

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
