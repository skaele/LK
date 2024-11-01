import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import { $hrDivisionsSuggestions } from '@pages/hr-applications/model/divisions'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { bufferPartTimeEmploymentModel } from '../buffer-part-time-employment/model'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PartTimeEmployment = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading: loading } = bufferPartTimeEmploymentModel.selectors.useBufferPartTimeEmployment()
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false
    const suggestions = useUnit($hrDivisionsSuggestions)

    useEffect(() => {
        if (!!dataUserApplication && !loading) {
            setForm(getForm(dataUserApplication, suggestions))
        }
    }, [dataUserApplication, loading])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={'Отправить'}
                        action={() => {}}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default PartTimeEmployment
