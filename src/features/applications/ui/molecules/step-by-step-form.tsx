import React, { useEffect, useState } from 'react'

import { Colors } from '@shared/constants'
import { Button } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { Line } from '@ui/timeline/ui'
import checkFormFields from '@utils/check-form-fields'
import styled from 'styled-components'

type HiddenProps = {
    reached?: boolean
    current: boolean
}

const StepCircle = styled.div<HiddenProps>`
    color: #fff;
    cursor: pointer;
    background: ${({ reached }) => (reached ? Colors.green.main : Colors.grey.main)};
    outline: 6px solid
        ${({ reached, current }) =>
            current ? Colors.blue.transparent1 : reached ? Colors.green.transparent3 : Colors.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`

const ListStepForm = styled.div`
    display: flex;
    margin-bottom: -0.5rem;
    overflow-x: auto;
`

const ElementControlStepForm = styled.div<{ lastElement?: boolean }>`
    width: ${({ lastElement }) => (lastElement ? '42px' : `100%`)};
    display: flex;
    align-items: center;
`

type ReachedT = {
    [key: number]: boolean
}

type DataForStepByStep = {
    dataForm: IInputArea
    setDataForm: (data: IInputArea) => void
}

export type StagesConfigsT = DataForStepByStep[][]

type Props = {
    stagesConfig: StagesConfigsT
}

const StepByStepForm = ({ stagesConfig }: Props) => {
    const [indexActiveForm, setIndexActiveForm] = useState<number>(0)
    const [listReached, setListReached] = useState<ReachedT>({})
    useEffect(() => {
        changeStep(0)
    }, [])

    const changeStep = (indexAnotherStep: number) => {
        setListReached((prevState) => ({
            ...prevState,
            [indexActiveForm]: checkFormFields(stagesConfig[indexActiveForm][0].dataForm),
        }))
        setIndexActiveForm(indexAnotherStep)
    }

    useEffect(() => {
        setListReached((prevState) => ({
            ...prevState,
            [indexActiveForm]: checkFormFields(stagesConfig[indexActiveForm][0].dataForm),
        }))
    }, [indexActiveForm])

    return (
        <>
            <ListStepForm>
                {stagesConfig.map((_, key: number) => (
                    <ElementControlStepForm lastElement={key === stagesConfig.length - 1} key={key}>
                        <StepCircle
                            current={key === indexActiveForm}
                            onClick={() => changeStep(key)}
                            reached={listReached[key]}
                        >
                            {key + 1}
                        </StepCircle>
                        {key !== stagesConfig.length - 1 && (
                            <Line direction={'horizontal'} reached={listReached[key]} filled={100} distance={40} />
                        )}
                    </ElementControlStepForm>
                ))}
            </ListStepForm>
            <>
                {stagesConfig[indexActiveForm].map((item, key) => (
                    <InputArea
                        {...item.dataForm}
                        setData={(data: IInputArea) => {
                            item.setDataForm(data)

                            setListReached((prevState) => ({
                                ...prevState,
                                [indexActiveForm]: checkFormFields(stagesConfig[indexActiveForm][0].dataForm),
                            }))
                        }}
                        key={key}
                    />
                ))}
            </>
            <Flex jc="space-between">
                <Button
                    text="Назад"
                    isActive={indexActiveForm > 0}
                    onClick={() => {
                        if (indexActiveForm === 0) return
                        changeStep(indexActiveForm - 1)
                    }}
                />
                <Button
                    text="Далее"
                    isActive={indexActiveForm < stagesConfig.length - 1}
                    onClick={() => {
                        if (indexActiveForm === stagesConfig.length - 1) return
                        changeStep(indexActiveForm + 1)
                    }}
                />
            </Flex>
        </>
    )
}

export default StepByStepForm
