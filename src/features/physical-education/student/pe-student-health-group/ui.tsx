import { peStudentHealthGroupModel } from '@entities/pe-student/model'
import { HealthGroup } from '@entities/pe-student/types'
import Select, { SelectPage } from '@features/select'
import { Colors } from '@shared/constants'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'

import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
    studentGuid: string
    healthGroup: HealthGroup
}

const Wrapper = styled.div`
    margin-top: auto;
    width: 100%;
`

const selectorData = [
    { id: 'None', title: '-' },
    { id: 'Basic', title: 'Основная' },
    { id: 'Preparatory', title: 'Подготовительная' },
    { id: 'SpecialA', title: 'Специальная А' },
    { id: 'SpecialB', title: 'Специальная Б' },
    { id: 'HealthLimitations', title: 'ОВЗ' },
    { id: 'Disabled', title: 'Инвалид' },
]

const healthGroupToSelector: Record<HealthGroup, (typeof selectorData)[number]> = {
    None: selectorData[0],
    Basic: selectorData[1],
    Preparatory: selectorData[2],
    SpecialA: selectorData[3],
    SpecialB: selectorData[4],
    HealthLimitations: selectorData[5],
    Disabled: selectorData[6],
}

export const SetPEStudentHealthGroup = ({ studentGuid, healthGroup: currentHealthGroup }: Props) => {
    const [healthGroup, setHealthGroup] = useState<SelectPage | null>(healthGroupToSelector[currentHealthGroup])
    const isPendingSetHealthGroup = useUnit(peStudentHealthGroupModel.stores.pendingSetHealthGroup)

    const handleClick = () => {
        peStudentHealthGroupModel.events.setHealthGroup({ studentGuid, healthGroup: healthGroup!.id as HealthGroup })
    }

    return (
        <Flex gap="4px" ai="flex-start">
            <Select
                isActive={!isPendingSetHealthGroup}
                size="big"
                width="100%"
                title="Группа здоровья"
                items={selectorData}
                selected={healthGroup}
                setSelected={setHealthGroup}
            />

            <Wrapper>
                <Button
                    isActive={!isPendingSetHealthGroup}
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
