import { applicationsModel } from '@entities/applications'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import SendHrFormHolidayWork from '@pages/hr-applications/lib/send-hr-form-holiday-work'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { bufferHolidayWorkModel } from '../buffer-holiday-work/model'
import getCompensation from './lib/get-compenstion'
import getForm from './lib/get-form'
import PageBlock from '@shared/ui/page-block'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const HolidayWork = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading } = bufferHolidayWorkModel.selectors.useBufferHolidayWork()

    const [completed, setCompleted] = useState(false)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const [jobGuid, setJobGuid] = useState<string | null>(null)
    const [jobTitle, setJobTitle] = useState<string | null>(null)
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
                    jobTitle,
                    setJobTitle,
                    jobGuid,
                    setJobGuid,
                ),
            )
        }
    }, [dataUserApplication, currentIndex, loading])

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
                            setData={setForm as LoadedState}
                            specialFieldsNameConfig={specialFieldsName}
                        />

                        <SubmitButton
                            text={'Отправить'}
                            action={() =>
                                SendHrFormHolidayWork(ApplicationFormCodes.HOLIDAY_WORK, [form], setCompleted)
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
        </PageBlock>
    )
}

export default HolidayWork
