import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import checkFormFields from '@shared/lib/check-form-fields'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'
import { LoadedState } from 'widgets/template-form'
import { getAbstractRelativeForm, getForm, getRelativeForm } from './lib/get-form'
import { applicationsModel } from '@entities/applications'
import { checkForAtLeastOneField } from './lib/check-for-at-least-one-field'

const ParentContacts = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [mother, setMother] = useState<IInputArea | null>(null)
    const [father, setFather] = useState<IInputArea | null>(null)
    const [relative, setRelative] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setMother(getRelativeForm('Мать', 'm_'))
            setFather(getRelativeForm('Отец', 'f_'))
            setRelative(getAbstractRelativeForm())
        }
    }, [dataUserApplication])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!mother && !!father && !!relative && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <InputArea {...mother} collapsed={isDone} setData={setMother as LoadedState} />
                    <InputArea {...father} collapsed={isDone} setData={setFather as LoadedState} />
                    <InputArea {...relative} collapsed={isDone} setData={setRelative as LoadedState} />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.PARENT_CONTACTS,
                                [form, mother, father, relative],
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
                        isActive={
                            checkFormFields(form) &&
                            checkFormFields(mother) &&
                            checkFormFields(father) &&
                            checkFormFields(relative) &&
                            checkForAtLeastOneField([mother, father, relative])
                        }
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы хотя бы одно поле было заполнено'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default ParentContacts
