import React, { useEffect, useState } from 'react'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SubmitButton from '@shared/ui/submit-button'
import { globalAppSendForm } from '@pages/applications/lib'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import { FormBlock } from '@shared/ui/atoms'
import { IInputArea } from '@shared/ui/input-area/model'
import InputArea from '@shared/ui/input-area'
import { LoadedState } from 'widgets/template-form'
import checkFormFields from '@shared/lib/check-form-fields'
import { getForm } from './lib/get-form'

const Children = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        setForm(getForm())
    }, [])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(ApplicationTeachersFormCodes.CHILDREN, [form], setLoading, setCompleted)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form)}
                        popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были заполнены"
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default Children
