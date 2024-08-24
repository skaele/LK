import { peStudentHealthGroupModel } from '@entities/pe-student/model'
import { HealthGroup } from '@entities/pe-student/types'
import { peTeacherModel } from '@entities/pe-teacher'
import Select, { SelectPage } from '@features/select'
import { Colors } from '@shared/constants'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'

import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
    studentGuid: string
    studentGroup: string
    healthGroup: HealthGroup
}

const Wrapper = styled.div`
    margin-top: auto;
    width: 100%;
`

const selectorData = [
    { id: 'None', title: '-' },
    { id: 'Basic', title: 'Базовая' },
    { id: 'Preparatory', title: 'Подготовительная' },
    { id: 'Special', title: 'Специальная' },
    { id: 'HealthLimitations', title: 'С ограничениями' },
]

const healthGroupToSelector: Record<HealthGroup, (typeof selectorData)[number]> = {
    None: selectorData[0],
    Basic: selectorData[1],
    Preparatory: selectorData[2],
    Special: selectorData[3],
    HealthLimitations: selectorData[4],
}

export const SetPEStudentHealthGroup = ({ studentGuid, studentGroup, healthGroup: currentHealthGroup }: Props) => {
    const [healthGroup, setHealthGroup] = useState<SelectPage | null>(healthGroupToSelector[currentHealthGroup])
    const [isPendingSetHealthGroup, teacher] = useUnit([
        peStudentHealthGroupModel.stores.pendingSetHealthGroup,
        peTeacherModel.stores.peTeacher,
    ])

    const isTeacherCurator = teacher?.groups.includes(studentGroup)

    const handleClick = () => {
        peStudentHealthGroupModel.events.setHealthGroup({ studentGuid, healthGroup: healthGroup!.id as HealthGroup })
    }

    return (
        <Flex gap="4px" ai="flex-start">
            <Select
                isActive={!!isTeacherCurator && !isPendingSetHealthGroup}
                size="big"
                width="100%"
                title="Группа здоровья"
                items={selectorData}
                selected={healthGroup}
                setSelected={setHealthGroup}
            />

            <Wrapper>
                <Button
                    isActive={!!isTeacherCurator && !isPendingSetHealthGroup}
                    text={`Сменить группу здоровья`}
                    width="100%"
                    onClick={handleClick}
                    background={Colors.blue.main}
                    textColor={Colors.white.main}
                />
            </Wrapper>
        </Flex>
    )
}
