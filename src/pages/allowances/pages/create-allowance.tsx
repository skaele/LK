import checkFormFields from '@shared/lib/check-form-fields'
import { FormBlock, Message, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'
import { LoadedState } from 'widgets/template-form'
import { getEmployees, getForm, getJob } from '../lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { FiInfo } from 'react-icons/fi'
import { SelectPage } from '@features/select'

const CreateAllowance = () => {
    const [job, setJob] = useState<IInputArea | null>(null)
    const [form, setForm] = useState<IInputArea | null>(null)
    const [employees, setEmployees] = useState<IInputArea | null>(null)

    const [
        createSupplement,
        loading,
        paymentIdentifiers,
        sourcesOfFunding,
        pageMounted,
        subordinates,
        roles,
        completed,
        setCompleted,
    ] = useUnit([
        allowancesModel.events.createSupplement,
        allowancesModel.mutations.createSupplement.$pending,
        allowancesModel.queries.paymentIdentifiers.$data,
        allowancesModel.queries.sourcesOfFunding.$data,
        allowancesModel.events.pageMounted,
        allowancesModel.stores.employees,
        allowancesModel.queries.role.$data,
        allowancesModel.stores.completed,
        allowancesModel.events.setCompleted,
    ])

    const isDone = completed ?? false
    useEffect(() => {
        if (!!roles && !!paymentIdentifiers && !!sourcesOfFunding) {
            const jobForm = getJob(roles)
            setJob(jobForm)
            setForm(getForm(sourcesOfFunding, paymentIdentifiers))
        }
    }, [roles, paymentIdentifiers, sourcesOfFunding])

    useEffect(() => {
        if (!!job && !!subordinates) {
            setEmployees(
                getEmployees(
                    subordinates[((job?.data[0] as IInputAreaData)?.value as SelectPage)?.id]?.map((item) => ({
                        id: item.employeeId,
                        title: item.employeeName,
                    })) || [],
                ),
            )
        }
    }, [subordinates, job])

    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!roles && !!form && !!employees && !!job && (
                <FormBlock noHeader>
                    <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                        <p>Интерфейс все еще находится в разработке</p>
                    </Message>
                    <InputArea {...job} collapsed={isDone} setData={setJob as LoadedState} />
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <InputArea {...employees} collapsed={isDone} setData={setEmployees as LoadedState} />
                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() => {
                            createSupplement({ initiator: job, form, employees })
                        }}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(job) && checkFormFields(form) && checkFormFields(employees)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default CreateAllowance
