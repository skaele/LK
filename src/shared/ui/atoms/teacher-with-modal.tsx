import { StaffModal } from '@pages/all-staff/ui/staff-modal'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

const TeacherWithModalWrapper = styled.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

interface Props {
    fio: string
}

const TeacherWithModal = ({ fio }: Props) => {
    const { open } = useModal()

    return <TeacherWithModalWrapper onClick={() => open(<StaffModal name={fio} />)}>{fio}</TeacherWithModalWrapper>
}

export default TeacherWithModal
