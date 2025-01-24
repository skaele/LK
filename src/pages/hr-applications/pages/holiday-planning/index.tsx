import React, { useEffect, useState } from 'react'

import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'

import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import sendHrFormHolidayPlanning from '@pages/hr-applications/lib/send-hr-form-holiday-planning'

import { applicationsModel } from '@entities/applications'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'

import PageBlock from '@shared/ui/page-block'

import { bufferHolidayPlanningModel } from '../buffer-holiday-planning/model'
import getCollDog from './lib/get-coll-dog'
import getForm from './lib/get-form'

const HolidayPlanning = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [startDate, setStartDate] = useState<string | null>(null)
    const [jobGuid, setJobGuid] = useState<string | null>(null)
    const [jobTitle, setJobTitle] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    const [collType, setCollType] = useState<string | null>(null)
    const [holidayType, setHolidayType] = useState<string | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
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
                    endDate,
                    setEndDate,
                    collType,
                    setCollType,
                    holidayType,
                    setHolidayType,
                    jobTitle,
                    setJobTitle,
                    jobGuid,
                    setJobGuid,
                ),
            )
        }
    }, [dataUserApplication, loading, startDate, collType, holidayType, jobGuid, jobTitle])

    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getCollDog(form.data as IInputAreaData[]))
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
                            action={() => sendHrFormHolidayPlanning('', [form], setCompleted)}
                            isLoading={loading}
                            completed={completed}
                            setCompleted={setCompleted}
                            repeatable={false}
                            buttonSuccessText="Отправлено"
                            isDone={isDone}
                            isActive={
                                checkFormFields(form, specialFieldsName) && (form.optionalCheckbox?.value ?? true)
                            }
                            alerts={false}
                        />
                    </FormBlock>
                )}
            </BaseApplicationWrapper>
        </PageBlock>
    )
}

export default HolidayPlanning
