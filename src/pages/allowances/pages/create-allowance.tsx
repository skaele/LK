import { Input, Loading, SubmitButton, TextArea } from '@shared/ui/atoms'
import React, { useEffect, useMemo, useState } from 'react'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import Select from '@features/select'
import { EmployeeInput } from '../ui/employee-input'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import Subtext from '@shared/ui/subtext'
import Flex from '@shared/ui/flex'
import FileInput from '@shared/ui/file-input'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Forbidden } from '@shared/ui/forbidden'
import { AreaTitle, InputAreaWrapper } from '@shared/ui/input-area/ui'
import Search from '@shared/ui/search'
import Checkbox from '@shared/ui/checkbox'
import getCorrectWordForm, { Rules } from '@shared/lib/get-correct-word-form'

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
            <BaseApplicationWrapper isDone={isDone}>
                <FormBlockWrapper noHeader>
                    <Flex w="100%" jc="center" ai="center">
                        <Loading />
                    </Flex>
                </FormBlockWrapper>
            </BaseApplicationWrapper>
        )
    if (!roles.includes('Initiator')) return <Forbidden text={'У вас нет доступа к этому разделу'} />

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlockWrapper noHeader>
                <Job />
                <SourceOfFunding />
                <PaymentIdentifier />
                <Dates />
                <Commentary />
                <Employees />
                <Files />
                <ComputedInfo />
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
            withSearch
            placeholder="Источник финансирования"
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
            withSearch
            placeholder="Вид набавки"
        />
    )
}

function Dates() {
    const { startDate, setStartDate, endDate, setEndDate } = useUnit(allowancesModel.fields.period)

    return (
        <Flex jc="space-between" gap="0.5rem">
            <Input title="Дата начала" value={startDate} setValue={setStartDate} type="date" required width="49%" />
            <Input
                title="Дата окончания"
                value={endDate}
                setValue={setEndDate}
                type="date"
                required
                width="49%"
                minValue={startDate}
            />
        </Flex>
    )
}

function Commentary() {
    const { value, setValue } = useUnit(allowancesModel.fields.commentary)
    return <TextArea title="Комментарий" placeholder="Комментарий" value={value} setValue={setValue} />
}

function Employees() {
    const [subordinates, employees, allSelected, selectAll, deselectAll] = useUnit([
        allowancesModel.stores.employees,
        allowancesModel.fields.employees.value,
        allowancesModel.fields.employees.allSelected,
        allowancesModel.fields.employees.selectAll,
        allowancesModel.fields.employees.deselectAll,
    ])
    const { value: job } = useUnit(allowancesModel.fields.job)
    const [openArea, setOpenArea] = useState(true)
    const [included, setIncluded] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [onlyChecked, setOnlyChecked] = useState(false)

    const filteredSubordinates = useMemo(() => {
        if (!subordinates || !job) return []
        const employeeIds = employees.map((employee) => employee.id)
        const initialFiltered = onlyChecked
            ? subordinates[job?.id].filter((subordinate) => employeeIds.includes(subordinate.employeeId))
            : subordinates[job?.id]
        if (!searchValue) return initialFiltered
        const query = searchValue.toLowerCase()
        const searched = initialFiltered.filter(
            (subordinate) =>
                subordinate.employeeName.toLowerCase().includes(query) ||
                subordinate.divisionName.toLowerCase().includes(query),
        )
        return searched
    }, [subordinates, job, searchValue, onlyChecked, employees])
    return (
        <InputAreaWrapper openArea={openArea}>
            <AreaTitle
                title="Сотрудники"
                included={included}
                optional={false}
                setOpenArea={setOpenArea}
                setIncluded={setIncluded}
                collapsed={false}
                openArea={openArea}
            />
            <div className="inputs">
                {job && subordinates ? (
                    <Flex gap="1.5rem" ai="flex-start" d="column">
                        <Search value={searchValue} setValue={setSearchValue} placeholder="Поиск по сотрудникам" />
                        <Flex gap="0.5rem" ai="flex-start" d="column">
                            <Checkbox
                                checked={onlyChecked}
                                setChecked={setOnlyChecked}
                                text="Отобразить только выбранных"
                            />
                            <Checkbox
                                checked={allSelected}
                                setChecked={(val) => {
                                    val
                                        ? selectAll(subordinates[job?.id].map((subordinate) => subordinate.employeeId))
                                        : deselectAll()
                                }}
                                text="Выбрать всех"
                            />
                        </Flex>
                        <Flex gap="1rem" ai="flex-start" d="column">
                            {filteredSubordinates.map((subordinate) => (
                                <EmployeeInput key={subordinate.employeeId} subordinate={subordinate} />
                            ))}
                        </Flex>
                    </Flex>
                ) : (
                    <Subtext>Выберите должность</Subtext>
                )}
            </div>
        </InputAreaWrapper>
    )
}

function Files() {
    const { value, setValue } = useUnit(allowancesModel.fields.files)
    const loading = useUnit(allowancesModel.mutations.uploadFile.$pending)
    return (
        <FileInput
            files={value}
            formats={['doc', 'pdf', 'docx']}
            setFiles={(files: File[]) => {
                if (value.length < files.length && value.some((file) => file.name === files[files.length - 1].name)) {
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

const EMPLOYEES_RULES: Rules = {
    fiveToNine: 'сотрудников',
    one: 'сотрудник',
    twoToFour: 'сотрудника',
    zero: 'сотрудников',
}
const ADD_RULES: Rules = {
    fiveToNine: 'Добавлено',
    one: 'Добавлен',
    twoToFour: 'Добавлено',
    zero: 'Добавлено',
}
function ComputedInfo() {
    const employees = useUnit(allowancesModel.fields.employees.value)
    return (
        <Subtext>
            {getCorrectWordForm(Math.trunc(employees?.length), ADD_RULES)} {employees?.length}{' '}
            {getCorrectWordForm(Math.trunc(employees?.length), EMPLOYEES_RULES)}
        </Subtext>
    )
}

export default CreateAllowance
