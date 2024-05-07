import React from 'react'
import { SubdivisionItem } from './subdivision-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { useModal } from 'widgets'
import { PhonebookModal } from './ui/phonebook-modal'
import { ScrollWrapper } from './styled'
import { getEmployeeInfo } from './lib/get-employee-info'
import { getSubdivisionInfo } from './lib/get-subdivision-info'
import { Employee, Subdivision } from '@shared/api/model/phonebook'
import { setSubdivisionPath } from './lib/set-subdivision-path'
import { useHistory } from 'react-router'
import { useStaffSearch } from './hook/use-staff-search'
import { paginationList } from '@entities/all-teachers'

export const Staff = () => {
    const history = useHistory()
    const { subdivisionPath, subdivisions } = useUnit({
        subdivisionPath: phonebookModel.stores.subdivisionPath,
        subdivisions: phonebookModel.stores.subdivisions,
    })
    const { $items } = paginationList
    const staff = useUnit($items)

    const chosenSubdivision = subdivisionPath?.[0]
    const { searchedEmployees, searchedSubdivisions, fio, search } = useStaffSearch()
    const { open } = useModal()

    if (search && subdivisions) {
        return (
            <ScrollWrapper d="column" ai="flex-start" jc="flex-start" gap="20px">
                {searchedSubdivisions.length > 0 && (
                    <SubdivisionItem
                        title="Подразделения"
                        items={searchedSubdivisions.slice(0, 4)}
                        action={(data) => {
                            const subdivision = data as Subdivision
                            setSubdivisionPath(subdivisions, subdivision.name)
                            history.push({
                                search: new URLSearchParams({ search: subdivision.name + '/' + fio }).toString(),
                            })
                            open(<PhonebookModal title={subdivision.name} info={getSubdivisionInfo(subdivision)} />)
                        }}
                    />
                )}
                {searchedEmployees.length > 0 && (
                    <SubdivisionItem
                        title="Сотрудники"
                        items={searchedEmployees.slice(0, 4)}
                        action={(data) => {
                            const employee = data as Employee
                            open(
                                <PhonebookModal
                                    title={employee.fio}
                                    info={getEmployeeInfo(employee)}
                                    avatar={employee.avatar}
                                    isEmployee
                                />,
                            )
                        }}
                    />
                )}
            </ScrollWrapper>
        )
    }

    return (
        <ScrollWrapper d="column" ai="flex-start" jc="flex-start" gap="20px">
            {chosenSubdivision && (
                <SubdivisionItem
                    title="Информация"
                    items={[chosenSubdivision]}
                    action={() => {
                        open(
                            <PhonebookModal
                                title={chosenSubdivision.name}
                                info={getSubdivisionInfo(chosenSubdivision)}
                            />,
                        )
                    }}
                />
            )}
            {chosenSubdivision?.head?.fio && (
                <SubdivisionItem
                    title="Руководитель"
                    items={[chosenSubdivision.head]}
                    action={(data) => {
                        const employee = data as Employee
                        open(
                            <PhonebookModal
                                title={employee.fio}
                                info={getEmployeeInfo(employee)}
                                avatar={employee.avatar}
                                isEmployee
                            />,
                        )
                    }}
                />
            )}

            <SubdivisionItem
                title="Сотрудники"
                items={
                    chosenSubdivision?.staff ||
                    staff?.map((item) => ({ fio: item.fio, avatar: item.avatar, post: item.post } as Employee)) ||
                    []
                }
                action={(data) => {
                    const employee = data as Employee
                    open(
                        <PhonebookModal
                            title={employee.fio}
                            info={getEmployeeInfo(employee)}
                            avatar={employee.avatar}
                            isEmployee
                        />,
                    )
                }}
            />
        </ScrollWrapper>
    )
}
