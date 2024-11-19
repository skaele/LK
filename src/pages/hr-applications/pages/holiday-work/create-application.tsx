import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { FormBlock, Loading, SubmitButton } from '@ui/atoms'
import React, { useEffect, useMemo, useState } from 'react'
import { holidayWorkModel } from './model'
import { useUnit } from 'effector-react'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import Flex from '@shared/ui/flex'
import { Forbidden } from '@shared/ui/forbidden'
import Select from '@features/select'
import { AreaTitle, InputAreaWrapper } from '@shared/ui/input-area/ui'
import Search from '@shared/ui/search'
import Checkbox from '@shared/ui/checkbox'
import Subtext from '@shared/ui/subtext'
import { EmployeeInput } from './ui/employee-input'
import getCorrectWordForm, { Rules } from '@shared/lib/get-correct-word-form'

const HolidayWork = () => {
    const [pageMounted, initLoading, createApplication, loading, roles, completed, setCompleted, isActive] = useUnit([
        holidayWorkModel.events.pageMounted,
        holidayWorkModel.stores.rolesLoading,
        holidayWorkModel.events.createApplication,
        holidayWorkModel.stores.loading,
        holidayWorkModel.stores.rolesFlattened,
        holidayWorkModel.stores.completed,
        holidayWorkModel.events.setCompleted,
        holidayWorkModel.stores.isActive,
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
            <FormBlock noHeader>
                <Job />
                <Employees />
                <ComputedInfo />
                <SubmitButton
                    text={!isDone ? 'Отправить' : 'Отправлено'}
                    action={createApplication}
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
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

function Job() {
    const { value, setValue } = useUnit(holidayWorkModel.fields.job)
    const jobRoles = useUnit(holidayWorkModel.stores.roles)

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
function Employees() {
    const [subordinates, employees, allSelected, selectAll, deselectAll] = useUnit([
        holidayWorkModel.stores.subordinates,
        holidayWorkModel.fields.employees.value,
        holidayWorkModel.fields.employees.allSelected,
        holidayWorkModel.fields.employees.selectAll,
        holidayWorkModel.fields.employees.deselectAll,
    ])
    const { value: job } = useUnit(holidayWorkModel.fields.job)
    const [openArea, setOpenArea] = useState(true)
    const [included, setIncluded] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [onlyChecked, setOnlyChecked] = useState(false)

    const filteredSubordinates = useMemo(() => {
        if (!subordinates || !job) return []
        const employeeIds = employees.map((employee) => employee.employeeGuid)
        const initialFiltered = onlyChecked
            ? subordinates[job?.id].filter((subordinate) => employeeIds.includes(subordinate.employeeId))
            : subordinates[job?.id]
        if (!searchValue) return initialFiltered
        const query = searchValue.toLowerCase()
        const searched = initialFiltered.filter(
            (subordinate) =>
                subordinate.employeeName.toLowerCase().includes(query) ||
                subordinate.divisionName.toLowerCase().includes(query) ||
                subordinate.position.toLowerCase().includes(query),
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
                                        ? selectAll(
                                              subordinates[job?.id]
                                                  .filter((subordinate) => subordinate.kedoAgreed)
                                                  .map((subordinate) => subordinate.employeeId),
                                          )
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

const ADD_RULES: Rules = {
    fiveToNine: 'Добавлено',
    one: 'Добавлен',
    twoToFour: 'Добавлено',
    zero: 'Добавлено',
}
const EMPLOYEES_RULES: Rules = {
    fiveToNine: 'сотрудников',
    one: 'сотрудник',
    twoToFour: 'сотрудника',
    zero: 'сотрудников',
}
function ComputedInfo() {
    const employees = useUnit(holidayWorkModel.fields.employees.value)
    return (
        // Добавлено х сотрудников
        <Subtext>
            {getCorrectWordForm(Math.trunc(employees?.length), ADD_RULES)} {employees?.length}{' '}
            {getCorrectWordForm(Math.trunc(employees?.length), EMPLOYEES_RULES)}
        </Subtext>
    )
}
export default HolidayWork
