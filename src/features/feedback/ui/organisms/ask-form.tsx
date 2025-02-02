import React, { useEffect, useState } from 'react'

import { feedbackModel } from '@features/feedback'
import getForm from '@features/feedback/lib/get-form'
import checkFormFields from '@features/send-form/check-form-fields'
import sendForm from '@features/send-form/send-form'

import { FormFeedback } from '@shared/api/model/feedback'
import { SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

export function AskForm() {
    const [form, setForm] = useState<IInputArea | null>(null)
    const { data, completed } = feedbackModel.selectors.useForm()
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        feedbackModel.effects.getFormFx()
    }, [])
    useEffect(() => {
        if (!!data) {
            setForm(getForm(data))
        }
    }, [data])

    if (!form) return null

    return (
        <>
            <InputArea {...form} setData={setForm as LoadedState} />
            <SubmitButton
                text={'Отправить'}
                action={() =>
                    sendForm<FormFeedback>(
                        form,
                        feedbackModel.effects.postFormFx,
                        setLoading,
                        feedbackModel.events.changeCompleted,
                    )
                }
                isLoading={loading}
                completed={completed}
                setCompleted={(completed: boolean) => feedbackModel.events.changeCompleted({ completed })}
                buttonSuccessText="Отправлено"
                repeatable={true}
                isDone={isDone}
                isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                popUpFailureMessage={
                    isDone ? 'Форма отправлена' : 'Для отправки формы необходимо, чтобы все поля были заполнены'
                }
                popUpSuccessMessage="Данные формы успешно отправлены"
            />
        </>
    )
}
