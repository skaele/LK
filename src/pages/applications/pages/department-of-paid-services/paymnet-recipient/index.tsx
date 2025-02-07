import React, { useEffect, useState } from 'react'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'

import { FormBlock, Message, SubmitButton } from '@shared/ui/atoms'
import { IInputArea } from '@shared/ui/input-area/model'

import getForm from './lib/get-form'

// type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const PaymentRecipient = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm())
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    {/*<InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />*/}
                    <Message title="Информация по заявке" type="info" visible={!isDone}>
                        Данный вид услуги доступен только для студентов, обучающихся на платной договорной основе.
                    </Message>
                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() => null}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default PaymentRecipient
