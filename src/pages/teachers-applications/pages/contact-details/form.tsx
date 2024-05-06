import getForm from './lib/get-form'
import React, { useState, useEffect } from 'react'
import { IInputArea } from '@shared/ui/input-area/model'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton, Wrapper } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { LoadedState } from 'widgets/template-form'
import sendForm from '@shared/lib/send-form'
import checkFormFields from '@shared/lib/check-form-fields'
import { useParams } from 'react-router'
import { applicationsModel } from '@entities/applications'
import { contactDetailsModel } from '@entities/contact-details'
import { ContactDetails } from '@shared/api/model'

const ContactDetailsForm = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [initLoading, setInitLoading] = useState(true)
    const { guid } = useParams<{ guid: string }>()
    const isDone = completed ?? false
    const [guidStaff, setGuidStaff] = useState(guid)

    const { data, error } = contactDetailsModel.selectors.useForm()
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            if (guid) setGuidStaff(guid)
            else setGuidStaff(dataUserApplication?.subdivisions![0].guid_staff)
        }
    }, [dataUserApplication])

    useEffect(() => {
        if (!!data && !!guidStaff) {
            const subdivision = dataUserApplication?.subdivisions?.find(
                (subdivision) => subdivision.guid_staff === guidStaff,
            )
            setForm(getForm(data, subdivision!))
        }
    }, [guidStaff, data])

    if (!guidStaff) return null

    return (
        <Wrapper
            load={() => {
                // Чтобы каждый раз страница загружалась заново
                contactDetailsModel.events.clearStore()
                contactDetailsModel.effects.getFormFx(guidStaff)
                setInitLoading(false)
            }}
            data={dataUserApplication && data && !initLoading}
            error={error}
        >
            <BaseApplicationWrapper isDone={isDone}>
                {!!form && (
                    <FormBlock noHeader>
                        <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                        <SubmitButton
                            text={!isDone ? 'Отправить' : 'Отправлено'}
                            action={() =>
                                sendForm<ContactDetails>(
                                    form,
                                    contactDetailsModel.effects.postFormFx,
                                    setLoading,
                                    contactDetailsModel.events.changeCompleted,
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

export default ContactDetailsForm
