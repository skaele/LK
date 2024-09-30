import { applicationsModel } from '@entities/applications'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SendHrFormMedicalExamination from '@pages/hr-applications/lib/send-hr-form-medical-examination'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { bufferMedicalExaminationModel } from '../buffer-medical-examination/model'
import getCompensation from './lib/get-compenstion'
import getForm from './lib/get-form'
import { KedoError } from '@pages/hr-applications/ui/kedo-error-wrapper'
import { hasKEDO } from '@pages/hr-applications/model/divisions'
import { useUnit } from 'effector-react'

const MedicalExamination = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    const [medicalExaminationDate] = useState<string | null>(null)
    const [jobGuid, setJobGuid] = useState<string | null>(null)
    const [jobTitle, setJobTitle] = useState<string | null>(null)
    const [isRetirement, setIsRetirement] = useState<string | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication && !loading) {
            setForm(
                getForm(
                    dataUserApplication,
                    startDate,
                    setStartDate,
                    endDate,
                    setEndDate,
                    isRetirement,
                    setIsRetirement,
                    jobTitle,
                    setJobTitle,
                    jobGuid,
                    setJobGuid,
                ),
            )
        }
    }, [dataUserApplication, loading, startDate, medicalExaminationDate, isRetirement])
    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getCompensation(form.data as IInputAreaData[]))
        }
    }, [form])

    const hasAccess = useUnit(hasKEDO)
    if (!hasAccess) return <KedoError />
    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea
                        {...form}
                        collapsed={isDone}
                        setData={setForm}
                        specialFieldsNameConfig={specialFieldsName}
                    />
                    <SubmitButton
                        text={'Отправить'}
                        action={() => SendHrFormMedicalExamination('', [form], setCompleted)}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        alerts={false}
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default MedicalExamination
