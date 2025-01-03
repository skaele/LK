import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'
import { applicationsModel } from '@entities/applications'
import { globalAppSendForm } from '@pages/applications/lib'
import { ApplicationFormCodes } from '@shared/models/application-form-codes'
import checkFormFields from '@shared/lib/check-form-fields'
import { LoadedState } from 'widgets/template-form'
import InputArea from '@shared/ui/input-area'
import { getForm } from './lib/form'
import { SpecialFieldsNameConfig } from '@entities/applications/consts'
import getMethodObtaining from '@features/applications/lib/get-method-obstaing'
import getReasonForReceiving from '../../multifunctional-center/certificate-of-attendance/lib/get-reason-for-receiving'

const MilitaryForm5 = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [specialFieldsName, setSpecialFieldsName] = useState<SpecialFieldsNameConfig>({})
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
        }
    }, [dataUserApplication])

    useEffect(() => {
        if (!!form && !!dataUserApplication) {
            setSpecialFieldsName({
                ...getMethodObtaining(form.data as IInputAreaData[]),
                ...getReasonForReceiving(form.data as IInputAreaData[]),
            })
        }
    }, [form])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!setForm && (
                <FormBlock noHeader>
                    <InputArea
                        {...form}
                        collapsed={isDone}
                        setData={setForm as LoadedState}
                        specialFieldsNameConfig={specialFieldsName}
                    />
                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(ApplicationFormCodes.MILITARY_FORM_5, [form], setLoading, setCompleted)
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form, specialFieldsName)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default MilitaryForm5
