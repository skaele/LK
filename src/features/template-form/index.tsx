import React, { useEffect, useState } from 'react'
import { FiInfo } from 'react-icons/fi'

import checkFormFields from '@features/send-form/check-form-fields'
import sendForm from '@features/send-form/send-form'

import { TemplateFormStoreOutput } from '@entities/applications/lib/create-form-store'
import getMethodObtaining from '@entities/applications/lib/get-method-obstaing'

import localizeDate from '@shared/lib/dates/localize-date'
import { Message, SubmitButton, Title } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import { LoadedState, SpecialFieldsNameConfig } from '@shared/ui/input-area/types'
import { Loading } from '@shared/ui/loading'

export type TemplateFormProps<T extends { last_update?: string }> = {
    model: TemplateFormStoreOutput<T, T>
    getForm: (data: T) => IInputArea
    repeatable?: boolean
    successMessage?: string
    isAvailableToSend?: boolean
    formId?: string
    isSpecialField?: boolean
}

const TemplateForm = <T extends { last_update?: string }>({
    model,
    getForm,
    successMessage,
    outerForm,
    isAvailableToSend = true,
    repeatable = true,
    formId,
    isSpecialField,
}: TemplateFormProps<T> & { outerForm?: IInputArea | null }) => {
    const { data, completed } = model.selectors.useForm()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<IInputArea | null>(null)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const isDone = (completed || !isAvailableToSend) ?? false

    useEffect(() => {
        if (!!data) {
            setForm(outerForm ?? getForm(data))
        }
    }, [data])

    useEffect(() => {
        if (!!isSpecialField && !!form && !!data) {
            setSpecialFieldsName(getMethodObtaining(form.data as IInputAreaData[]))
        }
    }, [form])

    if (!form || !setForm) return <Loading />

    return (
        <>
            <InputArea
                {...form}
                collapsed={isDone && !repeatable}
                setData={setForm as LoadedState}
                specialFieldsNameConfig={specialFieldsName}
            />
            <Message title="Информация по заявке" type="info" icon={<FiInfo />} visible={isDone && !!successMessage}>
                {successMessage}
            </Message>
            {data?.last_update && <Title size={5}>Дата последней отправки: {localizeDate(data.last_update)}</Title>}
            <SubmitButton
                text={isAvailableToSend ? 'Отправить' : 'Отправлено'}
                action={() =>
                    sendForm<T>(form, model.effects.postFormFx, setLoading, model.events.changeCompleted, formId)
                }
                isLoading={loading}
                completed={completed}
                setCompleted={(completed: boolean) => model.events.changeCompleted({ completed })}
                buttonSuccessText="Отправлено"
                repeatable={repeatable}
                isDone={isDone && !repeatable}
                isActive={checkFormFields(form, specialFieldsName) && (form.optionalCheckbox?.value ?? true)}
                popUpFailureMessage={
                    isDone ? 'Форма отправлена' : 'Для отправки формы необходимо, чтобы все поля были заполнены'
                }
                popUpSuccessMessage="Данные формы успешно отправлены"
            />
        </>
    )
}

export default TemplateForm
