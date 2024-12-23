import { peTeacherModel } from '@entities/pe-teacher'
import { PeTeacherPermission } from '@entities/pe-teacher/types'
import { CenterPage, Error } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import Slider from 'widgets/slider'
import { AdminPanel } from './admin-panel'
import { MyGroups } from './my-groups'
import { $page, pageIndexChanged, pageLoaded } from './page-model'
import { StudentsList } from './students-list'
import { StudentsExam } from './students-exam'

const TeacherPhysicalEducation = () => {
    const [peTeacher, currentPageIndex, serviceUnavailable] = useUnit([
        peTeacherModel.stores.peTeacher,
        $page,
        peTeacherModel.stores.unavailable,
    ])

    useEffect(() => {
        pageLoaded()
    }, [])
    if (serviceUnavailable) return <Error text="Сервис временно недоступен. Попробуйте позже" />

    const pages = [PeTeacherPermission.AdminAccess, PeTeacherPermission.SuperUser].some((permission) =>
        peTeacher?.permissions?.includes(permission),
    )
        ? [
              { title: 'Студенты', content: <StudentsList /> },
              { title: 'Управление', content: <AdminPanel /> },
              { title: 'Мои Группы', content: <MyGroups /> },
              { title: 'Проведение зачета', content: <StudentsExam /> },
          ]
        : [
              { title: 'Студенты', content: <StudentsList /> },
              { title: 'Мои Группы', content: <MyGroups /> },
              { title: 'Проведение зачета', content: <StudentsExam /> },
          ]

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Flex d="column" gap="2px" ai="flex-start">
                    <Slider
                        appearance={false}
                        pages={pages}
                        currentPage={currentPageIndex}
                        setCurrentPage={pageIndexChanged}
                    />
                    {pages[currentPageIndex].content}
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

export default TeacherPhysicalEducation
