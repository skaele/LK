import { Button, Loading, Message, SubmitButton, TextArea, Title } from '@shared/ui/atoms'
import React, { useEffect, useMemo } from 'react'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useList, useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { FiInfo, FiPlus } from 'react-icons/fi'
import Select from '@features/select'
import { EmployeeInput } from '../ui/employee-input'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import Subtext from '@shared/ui/subtext'
import { Colors } from '@shared/constants'
import Flex from '@shared/ui/flex'
import FileInput from '@shared/ui/file-input'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Forbidden } from '@shared/ui/forbidden'

const CreateAllowance = () => {
    const [initLoading, createSupplement, loading, pageMounted, roles, completed, setCompleted, isActive] = useUnit([
        allowancesModel.queries.role.$pending,
        allowancesModel.events.createSupplement,
        allowancesModel.mutations.createSupplement.$pending,
        allowancesModel.events.pageMounted,
        allowancesModel.stores.roles,
        allowancesModel.stores.completed,
        allowancesModel.events.setCompleted,
        allowancesModel.stores.isActive,
    ])

    const isDone = completed ?? false

    useEffect(() => {
        pageMounted()
    }, [])

    if (initLoading)
        return (
            <Flex w="100%" jc="center" ai="center">
                <Loading />
            </Flex>
        )
    if (!roles.includes('Initiator')) return <Forbidden text={'У вас нет доступа к этому разделу'} />

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlockWrapper noHeader>
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    <p>Интерфейс находится в разработке</p>
                </Message>
                <Job />
                <SourceOfFunding />
                <PaymentIdentifier />
                <Commentary />
                <Employees />
                <Files />
                <SubmitButton
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={createSupplement}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    isActive={isActive}
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlockWrapper>
        </BaseApplicationWrapper>
    )
}

function Job() {
    const { value, setValue } = useUnit(allowancesModel.fields.job)
    const jobRoles = useUnit(allowancesModel.queries.role.$data)

    if (!jobRoles) return null

    const items = useMemo(() => {
        return jobRoles
            .filter((job) => job.roles.includes('Initiator'))
            .map((job) => ({
                id: job.employeeId,
                title: job.division,
            }))
    }, jobRoles)
    useEffect(() => {
        if (items.length === 1) setValue(items[0])
    }, [items])
    return (
        <Select
            title="Должность / Подразделение"
            items={items}
            selected={items.length === 1 ? items[0] : value}
            setSelected={setValue}
            isActive={items.length > 1}
            required
            width="100%"
        />
    )
}
function SourceOfFunding() {
    const items = useUnit(allowancesModel.stores.sourcesOfFunding)
    const { value, setValue } = useUnit(allowancesModel.fields.sourceOfFunding)

    useEffect(() => {
        if (items.length === 1) setValue(items[0])
    }, [items])

    return (
        <Select
            title="Источник финансирования"
            items={items}
            selected={value}
            setSelected={setValue}
            isActive={items.length > 1}
            required
            width="100%"
        />
    )
}
function PaymentIdentifier() {
    const items = useUnit(allowancesModel.stores.paymentIdentifiers)
    const { value, setValue } = useUnit(allowancesModel.fields.paymentIdentifier)

    useEffect(() => {
        if (items.length === 1) setValue(items[0])
    }, [items])
    return (
        <Select
            title="Вид набавки"
            items={items}
            selected={value}
            setSelected={setValue}
            isActive={items.length > 1}
            required
            width="100%"
        />
    )
}

function Commentary() {
    const { value, setValue } = useUnit(allowancesModel.fields.commentary)
    return <TextArea title="Комментарий" placeholder="Комментарий" value={value} setValue={setValue} />
}

function Employees() {
    const { addItem, removeItem, setValue, value: employees } = useUnit(allowancesModel.fields.employees)
    const subordinates = useUnit(allowancesModel.stores.employees)
    const { value: job } = useUnit(allowancesModel.fields.job)
    const em = useList(allowancesModel.fields.employees.value, (employee, index) => {
        if (employee && subordinates)
            return (
                <EmployeeInput
                    index={index}
                    employee={employee}
                    remove={() => removeItem(index)}
                    setEmployee={setValue}
                    employees={subordinates[job?.id || ''].map((e) => ({
                        id: e.employeeId,
                        title: e.employeeName + ' (' + e.divisionName + ')',
                    }))}
                />
            )
        return null
    })
    return (
        <>
            <Title size={5} required={false} align="left" bottomGap="5px" visible>
                Сотрудники
            </Title>
            {job ? (
                <>
                    {employees.filter((e) => e !== null).length > 0 && (
                        <Flex gap="3rem" d="column">
                            {em}
                        </Flex>
                    )}
                    <Button
                        icon={<FiPlus />}
                        onClick={() => addItem()}
                        text="Добавить"
                        textColor={Colors.blue.main}
                        background="transparent"
                        hoverBackground={Colors.blue.transparent3}
                    />
                </>
            ) : (
                <Subtext>Выберите должность</Subtext>
            )}
        </>
    )
}

function Files() {
    const { value, setValue } = useUnit(allowancesModel.fields.files)
    const loading = useUnit(allowancesModel.mutations.uploadFile.$pending)
    return (
        <FileInput
            files={value}
            setFiles={(files: File[]) => {
                if (files.length > 0 && value.some((file) => file.name === files[files.length - 1].name)) {
                    popUpMessageModel.events.evokePopUpMessage({
                        message: 'Имя файла не может повторятся',
                        type: 'failure',
                    })
                    return
                }
                setValue(files)
            }}
            isActive={!loading}
        />
    )
}

export default CreateAllowance
