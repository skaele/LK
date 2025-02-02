import React, { useEffect, useState } from 'react'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SendHrFormMedicalExamination from '@pages/hr-applications/lib/send-hr-form-medical-examination'

import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'

import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import PageBlock from '@shared/ui/page-block'

import { bufferMedicalExaminationModel } from '../buffer-medical-examination/model'
import getCompensation from './lib/get-compenstion'
import getForm from './lib/get-form'

const MedicalExamination = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [startDate, setStartDate] = useState<string | null>(null)
    const [medicalExaminationDate] = useState<string | null>(null)
    const [jobGuid, setJobGuid] = useState<string | null>(null)
    const [jobTitle, setJobTitle] = useState<string | null>(null)
    const [isRetirement, setIsRetirement] = useState<string | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(
                getForm(
                    dataUserApplication,
                    dataWorkerApplication,
                    startDate,
                    setStartDate,
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

    return (
        <PageBlock>
            <BaseApplicationWrapper isDone={isDone}>
                {!!form && !!setForm && (
                    <FormBlock>
                        <InputArea
                            {...form}
                            collapsed={isDone}
                            setData={setForm as any}
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
        </PageBlock>
    )
}

export default MedicalExamination
