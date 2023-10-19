import { applicationsModel } from '@entities/applications'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SendHrFormMedicalExamination from '@pages/hr-applications/lib/send-hr-form-medical-examination'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { bufferMedicalExaminationModel } from '../buffer-medical-examination/model'
import getCompensation from './lib/get-compenstion'
import getForm from './lib/get-form'

const MedicalExamination = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [startDate, setStartDate] = useState<string | null>(null)
    const [medicalExaminationDate] = useState<string | null>(null)
    const [isRetirement, setIsRetirement] = useState<string | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading: loading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false
    const { id } = useParams<{ id: string }>()
    const currentIndex = +id

    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(
                getForm(
                    dataUserApplication,
                    dataWorkerApplication,
                    currentIndex,
                    startDate,
                    setStartDate,
                    isRetirement,
                    setIsRetirement,
                ),
            )
        }
    }, [dataUserApplication, currentIndex, loading, startDate, medicalExaminationDate, isRetirement])
    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getCompensation(form.data as IInputAreaData[]))
        }
    }, [form])

    return (
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
                        action={() =>
                            SendHrFormMedicalExamination(ApplicationFormCodes.HOLIDAY_WORK, [form], setCompleted)
                        }
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
