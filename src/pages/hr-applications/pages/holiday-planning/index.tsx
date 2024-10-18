import { applicationsModel } from '@entities/applications'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import sendHrFormHolidayPlanning from '@pages/hr-applications/lib/send-hr-form-holiday-planning'
import { Divider, FormBlock, SubmitButton } from '@ui/atoms'
import InputArea from '@ui/input-area'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import { bufferHolidayPlanningModel } from '../buffer-holiday-planning/model'
import getCollDog from './lib/get-coll-dog'
import getForm from './lib/get-form'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import { AreaTitle, InputAreaWrapper } from '@shared/ui/input-area/ui'
import { VacationList } from './vacation-list'
import { Calendars } from '@features/vacation-schedule/ui/templates/calendars'
import { KedoError } from '@pages/hr-applications/ui/kedo-error'
import { hasKEDO, workWeeks } from '@pages/hr-applications/model/divisions'
import { useUnit } from 'effector-react'
import { SelectPage } from '@features/select'

const HolidayPlanning = () => {
    const workWeeksData = useUnit(workWeeks)
    const [form, setForm] = useState<IInputArea | null>(null)
    const [startDate, setStartDate] = useState<string | null>(null)
    const [jobGuid, setJobGuid] = useState<string | null>(null)
    const [jobTitle, setJobTitle] = useState<SelectPage | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)
    const [collType, setCollType] = useState<string | null>(null)
    const [holidayType, setHolidayType] = useState<string | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const { loading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false

    useEffect(() => {
        if (!!dataUserApplication && !loading && workWeeksData) {
            setForm(
                getForm(
                    dataUserApplication,
                    startDate,
                    setStartDate,
                    endDate,
                    setEndDate,
                    collType,
                    setCollType,
                    holidayType,
                    setHolidayType,
                    jobGuid,
                    jobTitle,
                    setJobTitle,
                    setJobGuid,
                    workWeeksData,
                ),
            )
        }
    }, [dataUserApplication, loading, startDate, endDate, collType, holidayType, jobGuid, jobTitle, workWeeksData])

    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName(getCollDog(form.data as IInputAreaData[]))
        }
    }, [form])

    const [openArea, setOpenArea] = useState(false)
    const [included, setIncluded] = useState(false)

    const hasAccess = useUnit(hasKEDO)
    if (!hasAccess) return <KedoError />
    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputAreaWrapper openArea={openArea}>
                        <AreaTitle
                            title={'График отпусков'}
                            included={included}
                            optional={false}
                            setOpenArea={setOpenArea}
                            setIncluded={setIncluded}
                            collapsed={false}
                            openArea={openArea}
                        />
                        <div className="inputs">
                            <Calendars />
                            <Divider />
                            <VacationList jobGuid={jobGuid} />
                        </div>
                    </InputAreaWrapper>
                    <InputArea
                        {...form}
                        collapsed={isDone}
                        setData={setForm}
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
                        isActive={checkFormFields(form, specialFieldsName) && (form.optionalCheckbox?.value ?? true)}
                        alerts={false}
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default HolidayPlanning
