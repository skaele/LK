import React from 'react'

import { StaffModal } from '@pages/all-staff/ui/staff-modal'
import styled from 'styled-components'
import { useModal } from 'widgets'

const TeacherWithModalWrapper = styled.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

interface Props {
    id: number | string
    fio: string
}

const TeacherWithModal = ({ fio, id }: Props) => {
    const { open } = useModal()

    return (
        <TeacherWithModalWrapper onClick={() => open(<StaffModal id={id} name={fio} />)}>{fio}</TeacherWithModalWrapper>
    )
}

export default TeacherWithModal
