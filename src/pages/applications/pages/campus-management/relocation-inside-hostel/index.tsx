import React, { useEffect, useState } from 'react'

import { applicationsModel } from '@entities/applications'
import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'

import { CampusError } from '../ui/error'
import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const RelocationInsideHostelPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    if (new Date() < new Date(2024, 8, 15)) return <CampusError />
    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.USG_RELOCATION_INNER,
                                [form],
                                setLoading,
                                setCompleted,
                            )
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default RelocationInsideHostelPage
