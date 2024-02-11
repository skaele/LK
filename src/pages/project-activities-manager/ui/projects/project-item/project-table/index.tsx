import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Flex from '@ui/flex'
import { StudentActivityData } from '@features/table-project-activities-manager'
import { Button, Spacing } from '@ui/atoms'
import PrevSemesterTable from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/prev-semester-table'
import CurrentSemesterTable from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'
import { Colors } from '@shared/constants'
import {
    StyledLoader,
    StyledToggle,
    TableContainer,
    ToggleContainer,
} from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/ui'

type Props = {
    projectId: number
}

const ProjectTable = ({ projectId }: Props) => {
    const {
        currentSemesterState,
        prevSemesterState,
        currentSemesterStore,
        prevSemesterStore,
        currentSemesterSaving,
        prevSemesterSaving,
        updateData,
    } = useProjectItemStateContext()

    const [isPrevSemester, setIsPrevSemester] = useState(false)

    const toggleIsPrevSemester = useCallback(() => {
        setIsPrevSemester((prev) => !prev)
    }, [])

    const { loading: currentSemesterStoreLoading } = currentSemesterStore.selectors.useData()
    const { loading: prevSemesterStoreLoading } = prevSemesterStore.selectors.useData()

    useEffect(() => {
        if (isPrevSemester && !prevSemesterState.data) {
            prevSemesterStore.effects.getFx().then(({ data: { activities } }) => updateData(true, activities))
        }

        if (!isPrevSemester && !currentSemesterState.data) {
            currentSemesterStore.effects.getFx().then(({ data: { activities } }) => updateData(false, activities))
        }
    }, [currentSemesterState.data, prevSemesterState.data, isPrevSemester])

    const onClickSave = async () => {
        if (currentSemesterSaving || prevSemesterSaving) {
            return
        }

        if (isPrevSemester) {
            const updated: { data: { activities: StudentActivityData[] } } = await prevSemesterStore.effects.postFx({
                initialData: prevSemesterState.data ?? [],
                editedData: prevSemesterState.editedData,
            })

            updateData(true, updated.data.activities)

            return
        }

        const updated: { data: { activities: StudentActivityData[] } } = await currentSemesterStore.effects.postFx({
            initialData: currentSemesterState.data ?? [],
            editedData: currentSemesterState.editedData,
        })

        updateData(false, updated.data.activities)
    }

    const hasDataToSave = useMemo(() => {
        if (!isPrevSemester) {
            return Object.keys(currentSemesterState.editedData).length > 0
        }

        return Object.keys(prevSemesterState.editedData).length > 0
    }, [isPrevSemester, currentSemesterState.editedData, prevSemesterState.editedData])

    return (
        <>
            <Flex jc="space-between">
                <ToggleContainer>
                    <StyledToggle
                        id={String(projectId)}
                        title="Предыдущий семестр"
                        state={isPrevSemester}
                        action={toggleIsPrevSemester}
                        disabled={
                            currentSemesterStoreLoading ||
                            prevSemesterStoreLoading ||
                            prevSemesterSaving ||
                            currentSemesterSaving
                        }
                    />
                </ToggleContainer>
                {hasDataToSave && (
                    <Button
                        text="Сохранить"
                        background={Colors.green.light2}
                        textColor={Colors.grey.dark3}
                        minWidth="120px"
                        onClick={onClickSave}
                    />
                )}
            </Flex>
            <Spacing />
            <TableContainer>
                <div>
                    {isPrevSemester && !prevSemesterState.data && <StyledLoader />}
                    {isPrevSemester && prevSemesterState.data && <PrevSemesterTable />}

                    {!isPrevSemester && !currentSemesterState.data && <StyledLoader />}
                    {!isPrevSemester && currentSemesterState.data && <CurrentSemesterTable />}
                </div>
            </TableContainer>
        </>
    )
}

export default ProjectTable
