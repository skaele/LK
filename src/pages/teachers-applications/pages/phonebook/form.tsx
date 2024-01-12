import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import getForm from './lib/get-form'
import React, { useState, useEffect } from 'react'
import { IInputArea } from '@shared/ui/input-area/model'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton, Wrapper } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { LoadedState } from 'widgets/template-form'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import sendForm from '@shared/lib/send-form'
import { ContactInfoActualization } from '@shared/api/model'
import checkFormFields from '@shared/lib/check-form-fields'
import { useParams } from 'react-router'
import { applicationsModel } from '@entities/applications'

const ContactInfoActualizationForm = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const { data, error } = contactInfoActualizationModel.selectors.useForm()
    const { guid } = useParams<{ guid: string }>()
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!data) {
            const x = dataUserApplication?.subdivisions?.find((subdivision) => subdivision.guid_staff === guid)
            setForm(getForm(data, x!))
        }
    }, [data])

    return (
        <Wrapper load={contactInfoActualizationModel.effects.getFormFx} data={data} error={error}>
            <BaseApplicationWrapper isDone={isDone}>
                {!!form && (
                    <FormBlock>
                        <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                        <SubmitButton
                            text={!isDone ? 'Отправить' : 'Отправлено'}
                            action={() =>
                                sendForm<ContactInfoActualization>(
                                    form,
                                    contactInfoActualizationModel.effects.postFormFx,
                                    setLoading,
                                    contactInfoActualizationModel.events.changeCompleted,
                                    ApplicationTeachersFormCodes.CONTACT_INFO_ACTUALIZATION,
                                )
                            }
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

export default ContactInfoActualizationForm
