import React, { useEffect } from 'react'
import { FiUsers } from 'react-icons/fi'

import { useUnit } from 'effector-react'
import { useModal } from 'widgets'

import { EndSemester } from '@features/physical-education/end-semester'
import SearchWithHints from '@features/search-with-hints'

import { confirmModel } from '@entities/confirm'

import { studentApi } from '@shared/api'
import { Colors } from '@shared/constants'
import Masks from '@shared/lib/masks'
import { Button } from '@shared/ui/button'
import { Message } from '@shared/ui/message'
import Table from '@shared/ui/table'

import { examPeStudentColumns } from './constants'
import { pageLoaded } from './model'
import { peExamStudentModel } from './pe-exam-student-model'
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
