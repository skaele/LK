import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import sendHrFormHolidayPlanning from '@pages/hr-applications/lib/send-hr-form-holiday-planning'
import { FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { bufferHolidayPlanningModel } from '../buffer-holiday-planning/model'
import getCollDog from './lib/get-coll-dog'
import getForm from './lib/get-form'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'

const HolidayPlanning = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    const [collType, setCollType] = useState<string | null>(null)
    const [holidayType, setHolidayType] = useState<string | null>(null)
    const {
        data: { dataUserApplication, dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading: loading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
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
                    endDate,
                    setEndDate,
                    collType,
                    setCollType,
                    holidayType,
                    setHolidayType,
                ),
            )
        }
    }, [dataUserApplication, currentIndex, loading, startDate, collType, holidayType])

    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getCollDog(form.data as IInputAreaData[]))
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
                            sendHrFormHolidayPlanning(ApplicationFormCodes.HOLIDAY_PLANNING, [form], setCompleted)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form, specialFieldsName) && (form.optionalCheckbox?.value ?? true)}
                        alerts={false}
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default HolidayPlanning
