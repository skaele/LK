import checkFormFields from '@shared/lib/check-form-fields'
import { FormBlock, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'
import { LoadedState } from 'widgets/template-form'
import { getEmployees, getForm } from '../lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useUnit } from 'effector-react'
import { salarySupplementsModel } from '@entities/salary-supplements'
import { applicationsModel } from '@entities/applications'

const CreateSalarySupplement = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [employees, setEmployees] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [createSupplement, loading] = useUnit([
        salarySupplementsModel.events.createSupplement,
        salarySupplementsModel.mutations.createSupplement.$pending,
    ])

    useEffect(() => {
        if (!!dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setEmployees(getEmployees())
        }
    }, [])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!employees && (
                <FormBlock noHeader>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <InputArea {...employees} collapsed={isDone} setData={setEmployees as LoadedState} />
                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() => {
                            createSupplement({ form, employees })
                        }}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default CreateSalarySupplement
