import React, { useState } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import Select, { SelectPage } from '@features/select'

import { peStudentSpecializationModel } from '@entities/pe-student/model'
import { Specialization } from '@entities/pe-student/types'

import { Colors } from '@shared/constants'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'

interface Props {
    studentGuid: string
    specialization: Specialization
}

const Wrapper = styled.div`
    margin-top: auto;
    width: 100%;
`

const selectorData = [
    { id: 'None', title: '-' },
    { id: 'Basketball', title: 'Баскетбол' },
    { id: 'Volleyball', title: 'Волейбол' },
    { id: 'Aerobics', title: 'Аэробика' },
    { id: 'PowerLiftingAndCrossfit', title: 'Пауэрлифтинг и кроссфит' },
    { id: 'StreetLiftingAndArmLifting', title: 'Стритлифтинг и армлифтинг' },
    { id: 'GeneralPhysicalTraining', title: 'ОФП' },
    { id: 'GeneralPhysicalTrainingGym', title: 'ОФП (тренажерный зал)' },
    { id: 'FootRoom', title: 'Футзал' },
    { id: 'SMG', title: 'СМГ' },
    { id: 'TableTennis', title: 'СМГ настольный теннис' },
    { id: 'NordicWalking', title: 'СМГ скандинавская ходьба' },
    { id: 'InternalTeam', title: 'Сборная' },
]

const specializationToSelector: Record<Specialization, (typeof selectorData)[number]> = {
    None: selectorData[0],
    Basketball: selectorData[1],
    Volleyball: selectorData[2],
    Aerobics: selectorData[3],
    PowerLiftingAndCrossfit: selectorData[4],
    StreetLiftingAndArmLifting: selectorData[5],
    GeneralPhysicalTraining: selectorData[6],
    GeneralPhysicalTrainingGym: selectorData[7],
    FootRoom: selectorData[8],
    SMG: selectorData[9],
    TableTennis: selectorData[10],
    NordicWalking: selectorData[11],
    InternalTeam: selectorData[12],
}

export const SetPEStudentSpecialization = ({ studentGuid, specialization: currentSpecialization }: Props) => {
    const [specialization, setSpecialization] = useState<SelectPage | null>(
        specializationToSelector[currentSpecialization],
    )
    const [isPendingSetHealthGroup] = useUnit([peStudentSpecializationModel.stores.pendingSetSpecialization])

    const handleClick = () => {
        peStudentSpecializationModel.events.setSpecialization({
            studentGuid,
            specialization: specialization!.id as Specialization,
        })
    }

    return (
        <Flex gap="4px" ai="flex-start">
            <Select
                isActive={!isPendingSetHealthGroup}
                size="big"
                width="100%"
                title="Специализация"
                items={selectorData}
                selected={specialization}
                setSelected={setSpecialization}
            />

            <Wrapper>
                <Button
                    isActive={!isPendingSetHealthGroup}
                    text={`Сменить специализацию`}
                    width="100%"
                    onClick={handleClick}
                    background={Colors.blue.main}
                    textColor={Colors.white.main}
                />
            </Wrapper>
        </Flex>
    )
}
