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
import { useUnit } from 'effector-react'
import { familyContactsModel } from '@entities/family-contacts'
import { globalPrepareFormData } from '@pages/applications/lib/prepare-form-data'

const MOTHER_STRING_PREFIX = 'm_'
const FATHER_STRING_PREFIX = 'f_'

const FamilyContacts = () => {
    const [familyContacts, getContacts, saveContacts, loading, completed, formCompleted] = useUnit([
        familyContactsModel.stores.contacts,
        familyContactsModel.events.getContacts,
        familyContactsModel.events.saveContacts,
        familyContactsModel.stores.loading,
        familyContactsModel.stores.completed,
        familyContactsModel.events.formCompleted,
    ])
    const [form, setForm] = useState<IInputArea | null>(null)
    const [mother, setMother] = useState<IInputArea | null>(null)
    const [father, setFather] = useState<IInputArea | null>(null)
    const [relative, setRelative] = useState<IInputArea | null>(null)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        getContacts()
    }, [])

    useEffect(() => {
        if (!!dataUserApplication && !!familyContacts) {
            setForm(getForm(dataUserApplication, familyContacts))
            setMother(getRelativeForm('Мать', MOTHER_STRING_PREFIX, familyContacts))
            setFather(getRelativeForm('Отец', FATHER_STRING_PREFIX, familyContacts))
            setRelative(getAbstractRelativeForm(familyContacts))
        }
    }, [dataUserApplication, familyContacts])

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
                        action={() => {
                            saveContacts(
                                globalPrepareFormData(ApplicationFormCodes.FAMILY_CONTACTS, [
                                    form,
                                    mother,
                                    father,
                                    relative,
                                ]),
                            )
                        }}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={formCompleted}
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

export default FamilyContacts
