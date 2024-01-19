import getForm from './lib/get-form'
import React, { useState, useEffect } from 'react'
import { IInputArea } from '@shared/ui/input-area/model'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton, Wrapper } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { LoadedState } from 'widgets/template-form'
import sendForm from '@shared/lib/send-form'
import { Phonebook } from '@shared/api/model'
import checkFormFields from '@shared/lib/check-form-fields'
import { useParams } from 'react-router'
import { applicationsModel } from '@entities/applications'
import { phonebookModel } from '@entities/phonebook'

const PhonebookForm = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const { data, error } = phonebookModel.selectors.useForm()
    const { guid } = useParams<{ guid: string }>()
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!data) {
            const subdivision = dataUserApplication?.subdivisions?.find(
                (subdivision) => subdivision.guid_staff === guid,
            )
            setForm(getForm(data, subdivision!))
        }
    }, [data])

    useEffect(() => {
        return () => {
            phonebookModel.events.clearStore()
        }
    }, [])

    return (
        <Wrapper
            load={() => {
                phonebookModel.effects.getFormFx(guid)
            }}
            data={data}
            error={error}
        >
            <BaseApplicationWrapper isDone={isDone}>
                {!!form && (
                    <FormBlock>
                        <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                        <SubmitButton
                            text={!isDone ? 'Отправить' : 'Отправлено'}
                            action={() =>
                                sendForm<Phonebook>(
                                    form,
                                    phonebookModel.effects.postFormFx,
                                    setLoading,
                                    phonebookModel.events.changeCompleted,
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

export default PhonebookForm
