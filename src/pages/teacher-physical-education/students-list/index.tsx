import React, { useEffect } from 'react'

import { useUnit } from 'effector-react'

import {
    PEStudentsFilter,
    pEStudentFilterModel,
    pEStudentIsExamModel,
    pEStudentSearchModel,
} from '@features/pe-students-filter'
import { PEStudentModal } from '@features/physical-education/student/pe-student-modal/ui/modal'

import { pEStudentModel } from '@entities/pe-student/model'

import { PEStudent, STUDENT_PAGE_SIZE } from '@shared/api/physical-education'
import { useModal } from '@shared/ui/modal'
import Pagination from '@shared/ui/pagination'
import Search from '@shared/ui/search'
import Table from '@shared/ui/table'

import { examPeStudentColumns, peStudentColumns } from './constants'
import { pageLoaded } from './model'
import { FiltersWrapper, TableWrapper, Wrapper } from './styled'

export const StudentsList = () => {
    const { open } = useModal()

    const { students, totalCount, page, search, loading, isExam } = useUnit({
        students: pEStudentModel.stores.$pEStudents,
        loading: pEStudentFilterModel.stores.$loading,
        totalCount: pEStudentModel.stores.$pEStudentsTotalCount,
        page: pEStudentModel.stores.$pEStudentsPage,
        search: pEStudentSearchModel.stores.$search,
        isExam: pEStudentIsExamModel.stores.$isExam,
    })

    useEffect(() => {
        pageLoaded()
    }, [])

    return (
        <Wrapper>
            <TableWrapper>
                <FiltersWrapper>
                    <Search value={search} setValue={pEStudentSearchModel.events.update} size={'big'} />
                    <PEStudentsFilter />
                </FiltersWrapper>
                <Table
                    loading={loading}
                    data={students}
                    columns={isExam ? examPeStudentColumns : peStudentColumns}
                    onRowClick={(student) => {
                        open(<PEStudentModal student={student as PEStudent} />, (student as PEStudent).fullName)
                    }}
                />
                <Pagination
                    condition
                    align="right"
                    pages={Math.floor(totalCount / STUDENT_PAGE_SIZE)}
                    currentPage={page}
                    setCurrentPage={pEStudentModel.events.setPage}
                />
            </TableWrapper>
        </Wrapper>
    )
}
