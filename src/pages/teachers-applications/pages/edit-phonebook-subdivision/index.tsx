import React, { useEffect, useState } from 'react'

import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import checkFormFields from '@features/send-form/check-form-fields'
import { LoadedState } from '@features/template-form'

import { ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'
import { userModel } from '@shared/session'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'

import getForm from './lib/get-form'

const EditPhonebookSubdivision = () => {
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
        data: { user },
    } = userModel.selectors.useUser()

    useEffect(() => {
        if (!!user) {
            setForm(
                // Bad practice. Explicit form dependencies.
                // room state must be masked depending on address state
                getForm(
                    user,
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
    }, [user?.guid, subdivision, email, mobile, innerPhone, address, room])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationTeachersFormCodes.EDIT_PHONEBOOK_SUBDIVISION,
                                [form],
                                setLoading,
                                setCompleted,
                                true,
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

export default EditPhonebookSubdivision
