import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import { FormBlock, Message, SubmitButton, Title, Wrapper } from '@ui/atoms'
import Checkbox from '@ui/checkbox'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
import localizeDate from '@shared/lib/dates/localize-date'
import React, { useEffect, useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import styled from 'styled-components'
import getArmy from './lib/get-army'
import getContactInfo from './lib/get-contact-info'
import getDisability from './lib/get-disability'
import getDriverLicense from './lib/get-driver-license'
import getEducation from './lib/get-education'
import getFamily from './lib/get-family'
import getFamilyStatus from './lib/get-family-status'
import getLanguage from './lib/get-language'
import getLocation from './lib/get-location'
import getPassport from './lib/get-passport'
import getPersonalData from './lib/get-personal-data'
import getRegistration from './lib/get-registration'
import sendForm from './lib/send-form'

const DataVerificationPageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px;
    color: var(--text);

    .data-verification-block {
        width: 100%;
        height: 100%;
        max-width: 600px;
        padding: 20px;
        border-radius: var(--brLight);
        background: var(--block-content);
        box-shadow: var(--block-shadow);
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    @media (max-width: 1000px) {
        padding: 50px 0;
        .data-verification-block {
            box-shadow: none;
        }
    }
`

//TODO: remove default values from this component
//TODO: нужно переписать на формах, а то глаза могут выпасть (примерные пояснения, как нужно, находятся в inputs-area)

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const DataVerificationPage = () => {
    const { data, error, completed } = teacherDateVerificationModel.selectors.useTeacherDataVerification()

    // Про это написно ниже, в сабмит баттоне
    const [submitLoading, setSubmitLoading] = useState(false)

    const [personalData, setPersonalData] = useState<IInputArea | null>(null)
    const [familyStatus, setFamilyStatus] = useState<IInputArea | null>(null)
    const [contactInfo, setContactInfo] = useState<IInputArea | null>(null)
    const [family, setFamily] = useState<IInputArea | null>(null)
    const [disability, setDisability] = useState<IInputArea | null>(null)
    const [education, setEducation] = useState<IInputArea | null>(null)
    const [language, setLanguage] = useState<IInputArea | null>(null)
    const [passport, setPassport] = useState<IInputArea | null>(null)
    const [driveLicense, setDriveLicense] = useState<IInputArea | null>(null)
    const [registration, setRegistration] = useState<IInputArea | null>(null)
    const [location, setLocation] = useState<IInputArea | null>(null)
    const [army, setArmy] = useState<IInputArea | null>(null)
    const validated = !!data?.validated

    const [confirmAll, setConfirmAll] = useState(false)

    useEffect(() => {
        setConfirmAll(false)
    }, [
        !!army?.confirmed,
        !!driveLicense?.confirmed,
        !!personalData?.confirmed,
        !!location?.confirmed,
        !!passport?.confirmed,
        !!education?.confirmed,
        !!disability?.confirmed,
        !!family?.confirmed,
        !!familyStatus?.confirmed,
        !!registration?.confirmed,
        !!language?.confirmed,
        !!contactInfo?.confirmed,
    ])

    useEffect(() => {
        if (data) {
            setPersonalData(getPersonalData(data, validated))
            setContactInfo(getContactInfo(data, validated))
            setPassport(getPassport(data, validated))
            setRegistration(getRegistration(data, validated))
            setLocation(getLocation(data, validated))
            setFamilyStatus(getFamilyStatus(data, validated))
            setFamily(getFamily(data, validated))
            setEducation(getEducation(data, validated))
            setLanguage(getLanguage(data, validated))
            setDriveLicense(getDriverLicense(data, validated))
            setDisability(getDisability(data, validated))
            setArmy(getArmy(data, validated))
        }
    }, [data])

    return (
        <Wrapper
            load={() => teacherDateVerificationModel.effects.getTeacherDataVerificationFx()}
            loading={!data}
            error={error}
            data={data}
        >
            {!!personalData &&
            !!contactInfo &&
            !!passport &&
            !!registration &&
            !!location &&
            !!familyStatus &&
            !!family &&
            !!education &&
            !!language &&
            !!driveLicense &&
            !!disability &&
            !!army ? (
                <DataVerificationPageWrapper>
                    <FormBlock>
                        <Title size={3} align="left" bottomGap>
                            Подтвердите актуальность данных, указанных в каждом разделе анкеты, либо внесите изменения
                        </Title>
                        <Message
                            type="success"
                            title={`Данные успешно отправлены ${localizeDate(data?.valid_date ?? new Date())}`}
                            icon={<FiCheckCircle />}
                            visible={validated}
                        />
                        <InputArea
                            {...personalData}
                            setData={setPersonalData as LoadedState}
                            divider
                            defaultOpenArea={false}
                        />
                        <InputArea
                            {...contactInfo}
                            setData={setContactInfo as LoadedState}
                            divider
                            defaultOpenArea={false}
                        />
                        <InputArea {...passport} setData={setPassport as LoadedState} divider defaultOpenArea={false} />
                        <InputArea
                            {...registration}
                            setData={setRegistration as LoadedState}
                            divider
                            defaultOpenArea={false}
                        />
                        <InputArea {...location} setData={setLocation as LoadedState} divider defaultOpenArea={false} />
                        <InputArea
                            {...familyStatus}
                            setData={setFamilyStatus as LoadedState}
                            divider
                            defaultOpenArea={false}
                        />
                        <InputArea {...family} setData={setFamily as LoadedState} divider defaultOpenArea={false} />
                        <InputArea
                            {...education}
                            setData={setEducation as LoadedState}
                            divider
                            defaultOpenArea={false}
                        />
                        <InputArea {...language} setData={setLanguage as LoadedState} divider defaultOpenArea={false} />
                        <InputArea
                            {...driveLicense}
                            setData={setDriveLicense as LoadedState}
                            divider
                            defaultOpenArea={false}
                        />
                        <InputArea
                            {...disability}
                            setData={setDisability as LoadedState}
                            divider
                            defaultOpenArea={false}
                        />
                        <InputArea {...army} setData={setArmy as LoadedState} divider defaultOpenArea={false} />
                        <>
                            <Checkbox
                                checked={confirmAll}
                                setChecked={setConfirmAll}
                                text={'Я подтверждаю корректность указанных данных'}
                            />
                            <SubmitButton
                                text={!completed ? 'Отправить' : 'Отправлено'}
                                // Функция отправки здесь
                                action={() =>
                                    sendForm(
                                        [
                                            army,
                                            driveLicense,
                                            personalData,
                                            location,
                                            passport,
                                            education,
                                            disability,
                                            family,
                                            familyStatus,
                                            registration,
                                            language,
                                            contactInfo,
                                        ],
                                        setSubmitLoading,
                                    )
                                }
                                isLoading={submitLoading}
                                completed={completed}
                                // Здесь должен быть setCompleted, он нужен для анимации. В функции отправки формы после успешного завершения его нужно сделать true
                                setCompleted={(completed: boolean) =>
                                    teacherDateVerificationModel.events.changeCompleted({ completed })
                                }
                                isDone={completed}
                                buttonSuccessText="Отправлено"
                                repeatable={true}
                                isActive={
                                    // !!army.confirmed &&
                                    // !!driveLicense.confirmed &&
                                    // !!personalData.confirmed &&
                                    // !!location.confirmed &&
                                    // !!passport.confirmed &&
                                    // !!education.confirmed &&
                                    // !!disability.confirmed &&
                                    // !!family.confirmed &&
                                    // !!familyStatus.confirmed &&
                                    // !!registration.confirmed &&
                                    // !!language.confirmed &&
                                    // !!contactInfo.confirmed &&
                                    !!confirmAll
                                }
                                popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были подтверждены'}
                                popUpSuccessMessage="Данные формы успешно отправлены"
                            />
                        </>
                    </FormBlock>
                </DataVerificationPageWrapper>
            ) : null}
        </Wrapper>
    )
}

export default DataVerificationPage
