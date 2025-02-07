import React, { useEffect, useMemo, useState } from 'react'

import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import StepByStepForm, { StagesConfigsT } from '@features/applications/ui/molecules/step-by-step-form'
import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'

import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'
import { FormBlock, Message, SubmitButton, Title } from '@shared/ui/atoms'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import { LoadedState } from '@shared/ui/input-area/types'
import { SelectPage } from '@shared/ui/select'

import {
    getContacts,
    getDriversLicenseData,
    getEducation,
    getFamilyCompositionForm,
    getForeignLanguages,
    getMilitaryRegistrationDocument,
    getPassport,
    getPersonalData,
} from './lib/main-form'

const MilitaryRegistration = () => {
    const [personalData, setPersonalData] = useState<IInputArea | null>(null)
    const [foreignLanguages, setForeignLanguages] = useState<IInputArea | null>(null)
    const [education, setEducation] = useState<IInputArea | null>(null)
    const [familyComposition, setFamilyComposition] = useState<IInputArea | null>(null)
    const [contacts, setContacts] = useState<IInputArea | null>(null)
    const [driversLicenseData, setDriversLicenseData] = useState<IInputArea | null>(null)
    const [passport, setPassport] = useState<IInputArea | null>(null)
    const [militaryRegistrationDocument, setMilitaryRegistrationDocument] = useState<IInputArea | null>(null)

    const [completed, setCompleted] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setPersonalData(getPersonalData(dataUserApplication))
            setForeignLanguages(getForeignLanguages())
            setEducation(getEducation())
            setFamilyComposition(getFamilyCompositionForm())
            setContacts(getContacts())
            setDriversLicenseData(getDriversLicenseData())
            setPassport(getPassport())
            setMilitaryRegistrationDocument(getMilitaryRegistrationDocument())
        }
    }, [dataUserApplication])

    const driversLicenseEmpty = useMemo(() => {
        return ((driversLicenseData?.data[0] as IInputAreaData)?.value as SelectPage)?.id !== 0
    }, [(driversLicenseData?.data[0] as IInputAreaData)?.value])

    useEffect(() => {
        if (driversLicenseData) setDriversLicenseData(getDriversLicenseData())
    }, [driversLicenseEmpty])

    if (
        !personalData ||
        !foreignLanguages ||
        !education ||
        !familyComposition ||
        !contacts ||
        !driversLicenseData ||
        !passport ||
        !militaryRegistrationDocument
    )
        return null

    const stagesConfigs: StagesConfigsT = [
        [{ dataForm: personalData, setDataForm: setPersonalData as LoadedState }],
        [{ dataForm: foreignLanguages, setDataForm: setForeignLanguages as LoadedState }],
        [{ dataForm: education, setDataForm: setEducation as LoadedState }],
        [{ dataForm: familyComposition, setDataForm: setFamilyComposition as LoadedState }],
        [{ dataForm: contacts, setDataForm: setContacts as LoadedState }],
        [{ dataForm: driversLicenseData, setDataForm: setDriversLicenseData as LoadedState }],
        [{ dataForm: passport, setDataForm: setPassport as LoadedState }],
        [{ dataForm: militaryRegistrationDocument, setDataForm: setMilitaryRegistrationDocument as LoadedState }],
    ]

    return (
        <BaseApplicationWrapper isDone={false}>
            <FormBlock noHeader>
                <Title size={3} align="left">
                    Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на
                    военную службу (форма 10)
                </Title>
                <Message type="info">
                    Сервис предназначен для постановки на воинский учет обучающихся - граждан, пребывающих в запасе и
                    граждан, подлежащих призыву.
                </Message>
                <StepByStepForm stagesConfig={stagesConfigs} />
                <SubmitButton
                    text={!completed ? 'Отправить' : 'Отправлено'}
                    action={() => {
                        return globalAppSendForm(
                            ApplicationFormCodes.MILITARY_REG,
                            [
                                personalData,
                                foreignLanguages,
                                education,
                                familyComposition,
                                contacts,
                                driversLicenseData,
                                passport,
                                militaryRegistrationDocument,
                            ] as IInputArea[],
                            setLoading,
                            setCompleted,
                        )
                    }}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={completed}
                    isActive={
                        checkFormFields(personalData) &&
                        checkFormFields(foreignLanguages) &&
                        checkFormFields(education) &&
                        checkFormFields(familyComposition) &&
                        checkFormFields(contacts) &&
                        checkFormFields(driversLicenseData) &&
                        checkFormFields(passport) &&
                        checkFormFields(militaryRegistrationDocument)
                    }
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default MilitaryRegistration
