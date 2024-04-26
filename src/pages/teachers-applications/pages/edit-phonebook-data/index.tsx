import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import { IInputArea } from '@shared/ui/input-area/model'
import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { LoadedState } from 'widgets/template-form'
import { globalAppSendForm } from '@pages/applications/lib'
import checkFormFields from '@shared/lib/check-form-fields'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const EditPhonebookDataPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [subdivision, setSubdivision] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [mobile, setMobile] = useState<string>('')
    const [innerPhone, setInnerPhone] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [room, setRoom] = useState<string>('')
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(
                getForm(
                    dataUserApplication,
                    subdivision,
                    setSubdivision,
                    email,
                    setEmail,
                    mobile,
                    setMobile,
                    innerPhone,
                    setInnerPhone,
                    address,
                    setAddress,
                    room,
                    setRoom,
                ),
            )
        }
    }, [dataUserApplication, subdivision, email, mobile, innerPhone, address, room])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationTeachersFormCodes.EDIT_PHONEBOOK_DATA,
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
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default EditPhonebookDataPage
