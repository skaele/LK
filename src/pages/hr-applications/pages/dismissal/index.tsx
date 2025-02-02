import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import sendHrFormDismissal from '@pages/hr-applications/lib/send-hr-form-dismissal'

import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'

import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'

import getForm from './lib/get-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const Dismissal = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
        workerLoading: loading,
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [getTk, setGetTk] = useState<any | null>(null)
    const [isRetirement, setIsRetirement] = useState<boolean>(false)
    const [getTkAddress, setGetTkAddress] = useState<string | null>(null)
    const [reason, setReason] = useState<string | null>('По собственному желанию')
    const [lastDay, setLastDay] = useState<string | null>(null)
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
                    getTk,
                    setGetTk,
                    getTkAddress,
                    setGetTkAddress,
                    isRetirement,
                    setIsRetirement,
                    reason,
                    setReason,
                    lastDay,
                    setLastDay,
                ),
            )
        }
    }, [dataUserApplication, currentIndex, loading, getTk, getTkAddress, isRetirement, reason, lastDay])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />

                    <SubmitButton
                        text={'Отправить'}
                        action={() => sendHrFormDismissal(ApplicationFormCodes.DISMISSAL, [form], setCompleted)}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && (form.optionalCheckbox?.value ?? true)}
                        alerts={false}
                        // popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        // popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default Dismissal
