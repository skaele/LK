import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import getForm from './lib/get-form'
import React, { useEffect, useState } from 'react'
import { applicationsModel } from '@entities/applications'
import { IInputArea } from '@shared/ui/input-area/model'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton, Wrapper } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { LoadedState } from 'widgets/template-form'
import checkFormFields from '@shared/lib/check-form-fields'

const ContactInfoActualizationTestPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const { data, error } = contactInfoActualizationModel.selectors.useForm()

    useEffect(() => {
        if (!!dataUserApplication && !!data) {
            setForm(getForm(data, dataUserApplication))
        }
    }, [dataUserApplication, data])

    return (
        <Wrapper load={contactInfoActualizationModel.effects.getFormFx} data={data} error={error}>
            <BaseApplicationWrapper isDone={isDone}>
                {!!form && (
                    <FormBlock>
                        <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                        <SubmitButton
                            text={!isDone ? 'Отправить' : 'Отправлено'}
                            action={() => {
                                setLoading(true)
                            }}
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
        </Wrapper>
    )
}

export default ContactInfoActualizationTestPage
