import { selectedPEStudentModel } from '@entities/pe-student/model'

import { peTeacherModel } from '@entities/pe-teacher'
import { sliderData } from '@features/physical-education/student/pe-student-visits/constants'
import { CenterPage, Error } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Slider from 'widgets/slider'
import { ContentWrapper, UserData } from './styled'
import { UserDataBlock } from './ui/user-data-block'
import { userModel } from '@entities/user'

import { SetPEStudentHealthGroup } from '@features/physical-education/student/pe-student-health-group/ui'
import { SetPEStudentSpecialization } from '@features/physical-education/student/pe-student-specialization/ui'
import { healthGroupToTitle, specializationToTitle } from '@entities/pe-student/types'

const PEStudent = () => {
    const { studentId: studentIdFromParams } = useParams<{ studentId: string }>()
    const [student, { currentUser }, isTeacherLoading, isStudentLoading, peTeacher] = useUnit([
        selectedPEStudentModel.stores.$selectedStudent,
        userModel.stores.user,
        peTeacherModel.stores.isLoading,
        selectedPEStudentModel.stores.$loading,
        peTeacherModel.stores.peTeacher,
    ])

    const studentId = currentUser?.user_status === 'staff' ? studentIdFromParams : currentUser?.guid ?? ''
    const [currentPage, setCurrentPage] = useState<number>(0)

    useEffect(() => {
        selectedPEStudentModel.events.setCurrentStudentId(studentId)

        peTeacherModel.events.load()

        return () => selectedPEStudentModel.events.resetStudentId()
    }, [studentId])

    if (!student && studentId && !isTeacherLoading && !isStudentLoading) {
        return <Error text="Нет данных" />
    }

    if (!student) return null

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Title size={3} align="left">
                    {student.fullName}
                </Title>

                <UserData>
                    <UserDataBlock label="Группа" value={student.groupNumber} />
                    <UserDataBlock label="Баллы" value={student.totalPoints.toString()} />
                    <UserDataBlock label="Курс" value={student.course.toString()} />
                    <UserDataBlock label="ЛМС" value={student.lmsPoints.toString()} />
                    <UserDataBlock label="Куратор" value={student.curator?.fullName ?? '-'} />
                    <UserDataBlock
                        label="Группа здоровья"
                        value={
                            student.healthGroup == 'None'
                                ? '-'
                                : `${healthGroupToTitle[student.healthGroup]} (${
                                      student.healthGroupTeacher?.fullName ?? ''
                                  })`
                        }
                    />
                    <UserDataBlock label="Специализация" value={specializationToTitle[student.specialization]} />
                    <UserDataBlock label="Долг" value={student.hasDebt ? 'Есть' : 'Нет'} />
                </UserData>

                {!!peTeacher?.permissions?.length && (
                    <>
                        <SetPEStudentSpecialization
                            studentGuid={student.studentGuid}
                            specialization={student.specialization}
                        />
                        <SetPEStudentHealthGroup studentGuid={student.studentGuid} healthGroup={student.healthGroup} />
                    </>
                )}

                <Slider
                    appearance={false}
                    pages={sliderData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ContentWrapper>{sliderData[currentPage].content}</ContentWrapper>
            </PageBlock>
        </CenterPage>
    )
}

export default PEStudent
