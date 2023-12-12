import React, { useCallback, useMemo, useState } from 'react'
import Table from '@ui/table'
import { SwitchToggle } from '@ui/molecules'
import ToggleItem from '@ui/toggle-item'
import Flex from '@ui/flex'
import {
    StudentActivitiesColumn,
    StudentActivityData,
    StudentActivityDataCurrentSemesterRow,
    StudentActivityResult,
} from '@features/table-project-activities-manager'
import { Button, Input, Spacing } from '@ui/atoms'
import ScrollContainer from 'react-indiana-drag-scroll'
import { TeacherSelect } from '@features/teacher-select/ui'
import { TeacherGroupSearch } from '@features/teacher-group-search'
import { TeacherSearch } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/teacher-search'
import PrevSemesterTable from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/prev-semester-table'
import CurrentSemesterTable from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'
import { Colors } from '@shared/constants'
import {
    StyledToggle,
    TableContainer,
    ToggleContainer,
} from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/ui'

const MOCK_CURRENT_SEMESTER: StudentActivityData[] = [
    {
        studentId: 1,
        expelled: false,
        isPrevSemester: false,
        [StudentActivitiesColumn.subproject]: 'Подпроект1',
        [StudentActivitiesColumn.manager]: 'Куратор1',
        [StudentActivitiesColumn.group]: '222-222',
        [StudentActivitiesColumn.name]: 'Иванов Иван Иванович',
        [StudentActivitiesColumn.email]: 'ivanov@ivan.iva',
        [StudentActivitiesColumn.firstValidation]: 15,
        [StudentActivitiesColumn.secondValidation]: 20,
        [StudentActivitiesColumn.defensePoints]: 30,
        [StudentActivitiesColumn.resultPoints]: 65,
        [StudentActivitiesColumn.result]: StudentActivityResult.passed,
        [StudentActivitiesColumn.stars]: 2,
    },
    {
        studentId: 2,
        expelled: true,
        isPrevSemester: false,
        [StudentActivitiesColumn.subproject]: 'Подпроект123',
        [StudentActivitiesColumn.manager]: 'Куратор1',
        [StudentActivitiesColumn.group]: '111-111',
        [StudentActivitiesColumn.name]: 'Петров Пётр Петрович',
        [StudentActivitiesColumn.email]: 'petrov@pete.pet',
        [StudentActivitiesColumn.firstValidation]: 10,
        [StudentActivitiesColumn.secondValidation]: 15,
        [StudentActivitiesColumn.defensePoints]: 20,
        [StudentActivitiesColumn.resultPoints]: 45,
        [StudentActivitiesColumn.result]: StudentActivityResult.notPassed,
        [StudentActivitiesColumn.stars]: 1,
    },
]

const MOCK_PREV_SEMESTER: StudentActivityData[] = [
    {
        studentId: 1,
        expelled: false,
        isPrevSemester: true,
        [StudentActivitiesColumn.subproject]: 'Подпроект1',
        [StudentActivitiesColumn.manager]: 'Куратор1',
        [StudentActivitiesColumn.group]: '222-222',
        [StudentActivitiesColumn.name]: 'Иванов Иван Иванович',
        [StudentActivitiesColumn.email]: 'ivanov@ivan.iva',
        [StudentActivitiesColumn.transferredPoints]: 15,
        [StudentActivitiesColumn.retaking]: 45,
        [StudentActivitiesColumn.resultPoints]: 60,
        [StudentActivitiesColumn.result]: StudentActivityResult.passed,
        [StudentActivitiesColumn.stars]: 1,
    },
    {
        studentId: 2,
        expelled: true,
        isPrevSemester: true,
        [StudentActivitiesColumn.subproject]: 'Подпроект1123',
        [StudentActivitiesColumn.manager]: 'Куратор123',
        [StudentActivitiesColumn.group]: '222-211',
        [StudentActivitiesColumn.name]: 'Иванов Иван Иванович',
        [StudentActivitiesColumn.email]: 'ivanov@ivan.iva',
        [StudentActivitiesColumn.transferredPoints]: 15,
        [StudentActivitiesColumn.retaking]: 45,
        [StudentActivitiesColumn.resultPoints]: 60,
        [StudentActivitiesColumn.result]: StudentActivityResult.notPassed,
        [StudentActivitiesColumn.stars]: 1,
    },
]

type Props = {
    projectId: number
}

const ProjectTable = ({ projectId }: Props) => {
    const {
        state: { currentSemester, prevSemester },
    } = useProjectItemStateContext()

    const [isPrevSemester, setIsPrevSemester] = useState(false)

    const setIsToggled = useCallback(() => {
        setIsPrevSemester((prev) => !prev)
    }, [])

    const hasDataToSave = useMemo(() => {
        if (!isPrevSemester) {
            return Object.keys(currentSemester.editedData).length > 0
        }

        return Object.keys(prevSemester.editedData).length > 0
    }, [isPrevSemester, currentSemester.editedData, prevSemester.editedData])

    return (
        <>
            <Flex jc="space-between">
                <ToggleContainer>
                    <StyledToggle title="Предыдущий семестр" state={isPrevSemester} action={setIsToggled} />
                </ToggleContainer>
                {hasDataToSave && (
                    <Button
                        text="Сохранить"
                        background={Colors.green.light2}
                        textColor={Colors.grey.dark3}
                        minWidth="120px"
                    />
                )}
            </Flex>
            <Spacing />
            <TableContainer>
                <div>
                    {isPrevSemester ? (
                        <PrevSemesterTable data={MOCK_PREV_SEMESTER} />
                    ) : (
                        <CurrentSemesterTable data={MOCK_CURRENT_SEMESTER} />
                    )}
                </div>
            </TableContainer>
        </>
    )
}

export default ProjectTable
