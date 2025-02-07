import React, { useEffect, useState } from 'react'

import { globalAppSendForm } from '@pages/applications/lib'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'

import { getCertForm } from '@features/medical-certificate/lib/cert-form'
import checkFormFields from '@features/send-form/check-form-fields'

import { applicationsModel } from '@entities/applications'

import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import { LoadedState } from '@shared/ui/input-area/types'

import { getForm } from './lib/get-form'

const MedicalCertificates086 = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [cert, setCert] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const isDone = completed ?? false
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setCert(
                getCertForm({
                    config: {
                        title: 'Предоставление справок о группе здоровья',
                        issueDateFieldName: 'date_of_issue',
                        organizationFieldName: 'organization',
                        docsFieldName: 'docs',
                    },
                }),
            )
        }
    }, [dataUserApplication])
    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!cert && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <InputArea {...cert} collapsed={isDone} setData={setCert as LoadedState} />

                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() =>
                            globalAppSendForm(
                                ApplicationFormCodes.MEDICAL_CERT_086,
                                [form, cert],
                                setLoading,
                                setCompleted,
                                true,
                            )
                        }
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form) && checkFormFields(cert)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default MedicalCertificates086
