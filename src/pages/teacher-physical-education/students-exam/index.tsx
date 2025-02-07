import React, { useEffect } from 'react'
import { FiUsers } from 'react-icons/fi'

import { useUnit } from 'effector-react'

import { EndSemester } from '@features/physical-education/end-semester'

import { studentApi } from '@shared/api'
import { Colors } from '@shared/consts'
import Masks from '@shared/lib/masks'
import { Button } from '@shared/ui/button'
import { confirmModel } from '@shared/ui/confirm'
import { Message } from '@shared/ui/message'
import { useModal } from '@shared/ui/modal'
import SearchWithHints from '@shared/ui/search-with-hints'
import Table from '@shared/ui/table'

import { peExamStudentModel } from '../../../features/physical-education/end-semester/pe-exam-student-model'
import { examPeStudentColumns } from './constants'
import { pageLoaded } from './model'
import { TableHeader, TableWrapper, Wrapper } from './styled'

export const StudentsExam = () => {
    const { open, close } = useModal()

    const { students, loading, selectedGroup } = useUnit({
        students: peExamStudentModel.stores.$pEStudents,
        loading: peExamStudentModel.stores.$loading,
        selectedGroup: peExamStudentModel.stores.$selectedGroup,
    })

    const isGroupStudentsLoaded = Boolean(students.length && !loading && selectedGroup)

    const handleEndSemester = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы уверены, что хотите завершить семестр?',
            onConfirm: () => {
                peExamStudentModel.events.endSemesterForGroup()
                open(<EndSemester />)
            },
            onReject: () => {
                close()
                peExamStudentModel.events.reset()
            },
        })
    }

    useEffect(() => {
        pageLoaded()
        return () => {
            peExamStudentModel.events.reset()
        }
    }, [])

    return (
        <Wrapper>
            {!isGroupStudentsLoaded && <Message type="alert">Выберите группу чтобы провести зачет</Message>}
            <TableWrapper>
                <TableHeader d="row" jc="space-between" p={'8px'}>
                    <SearchWithHints
                        leftIcon={<FiUsers />}
                        placeholder={'Номер группы'}
                        value={selectedGroup}
                        setValue={peExamStudentModel.events.selectedGroupChanged}
                        customMask={Masks.groupMask}
                        onValueEmpty={() => peExamStudentModel.events.selectedGroupChanged('')}
                        onHintClick={(hint) => hint && peExamStudentModel.events.selectedGroupChanged(hint.id)}
                        request={studentApi.getGroups}
                        size={'big'}
                    />
                    {isGroupStudentsLoaded && (
                        <Button
                            text={`Завершить семестр для ${selectedGroup}`}
                            width="210px"
                            background={Colors.green.main}
                            textColor={Colors.white.main}
                            onClick={handleEndSemester}
                        />
                    )}
                </TableHeader>
                {isGroupStudentsLoaded && <Table loading={loading} data={students} columns={examPeStudentColumns} />}
            </TableWrapper>
        </Wrapper>
    )
}
