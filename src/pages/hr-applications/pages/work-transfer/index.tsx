import { applicationsModel } from '@entities/applications'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import sendHrFormWorkTransfer from '@pages/hr-applications/lib/send-hr-form-work-transfer'
import { $hrDivisions, $hrDivisionsSuggestions } from '@pages/hr-applications/model/divisions'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { bufferWorkTransferModel } from '../buffer-work-transfer/model'
import getForm from './lib/get-form'
import getPostAfterTransfer from './lib/get-post-after-transfer'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const WorkTransfer = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const suggestions = useUnit($hrDivisionsSuggestions)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading } = bufferWorkTransferModel.selectors.useBufferWorkTransfer()
    const [completed, setCompleted] = useState(false)
    const [partTimeType, setPartTimeType] = useState<any | null>(null)
    const [employment, setEmployment] = useState<any | null>(null)
    const [newPost, setNewPost] = useState<string | null>(null)
    const [newPlaceOfWork, setNewPlaceOfWork] = useState<string | null>(null)
    const [newRate, setNewRate] = useState<any>(null)
    const [transferDate, setTransferDate] = useState<string | null>(null)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const divisions = useUnit($hrDivisions)
    const [jobGuid, setJobGuid] = useState<string | null>(null)
    const [jobTitle, setJobTitle] = useState<string | null>(null)
    const isDone = completed ?? false
    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getPostAfterTransfer(form.data as IInputAreaData[]))
        }
    }, [form])

    useEffect(() => {
        if (!!dataUserApplication && !!dataWorkerApplication && !loading) {
            setForm(
                getForm(
                    dataUserApplication,
                    employment,
                    setEmployment,
                    newPost,
                    setNewPost,
                    newPlaceOfWork,
                    setNewPlaceOfWork,
                    newRate,
                    setNewRate,
                    transferDate,
                    setTransferDate,
                    partTimeType,
                    setPartTimeType,
                    suggestions,
                    jobTitle,
                    setJobTitle,
                    jobGuid,
                    setJobGuid,
                ),
            )
        }
    }, [
        dataUserApplication,
        loading,
        employment,
        newPost,
        newPlaceOfWork,
        newRate,
        transferDate,
        partTimeType,
        jobTitle,
        jobGuid,
    ])
    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea
                        {...form}
                        collapsed={isDone}
                        setData={setForm as LoadedState}
                        specialFieldsNameConfig={specialFieldsName}
                    />

                    <SubmitButton
                        text={'Отправить'}
                        action={() =>
                            sendHrFormWorkTransfer(ApplicationFormCodes.HOLIDAY_WORK, [form], setCompleted, divisions)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default WorkTransfer
