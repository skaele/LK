import React, { useEffect, useState } from 'react'
import { FiUsers } from 'react-icons/fi'

import { useUnit } from 'effector-react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import ListOfPeople from 'widgets/list-of-people'
import Slider from 'widgets/slider'

import GroupModal from '@features/groups-list/group-modal'
import SearchWithHints from '@features/search-with-hints'

import { paginationList as studentPaginationList } from '@entities/all-students'
import { paginationList as teacherPaginationList } from '@entities/all-teachers'
import { userModel } from '@entities/user'

import { studentApi } from '@shared/api'
import { getGroups } from '@shared/api/student-api'
import { getDivisions } from '@shared/api/teacher-api'
import Masks from '@shared/lib/masks'
import { Wrapper } from '@shared/ui/atoms'

import { addNewChatModel } from '../model'
import { SearchType } from '../type'

const SEARCH_MODES: { title: string; id: SearchType }[] = [
    { title: 'Сотрудники', id: 'employee' },
    { title: 'Студенты', id: 'student' },
    { title: 'Группа', id: 'group' },
]

export const Modal = () => {
    const [user, searchMode] = useUnit([userModel.stores.user, addNewChatModel.stores.searchMode])
    const { open } = useModal()

    const [groupSearch, setGroupSearch] = useState<string>('')

    const { $items: teacherItems, $isPending: isTeacherPending } = useUnit(teacherPaginationList)
    const { $items: studentItems, $isPending: isStudentPending } = useUnit(studentPaginationList)

    useEffect(() => {
        // doesn't work in sample xd
        if (user.currentUser) {
            addNewChatModel.events.setSearchMode(user.currentUser.user_status === 'stud' ? 'employee' : 'student')
        }
    }, [user.currentUser])

    useEffect(() => {
        setGroupSearch('')
    }, [searchMode])

    if (!user.currentUser) return null

    return (
        <ModalContent>
            <Slider
                pages={SEARCH_MODES}
                currentPage={SEARCH_MODES.findIndex(({ id }) => id === searchMode)}
                setCurrentPage={(index) => addNewChatModel.events.setSearchMode(SEARCH_MODES[index].id)}
                appearance={false}
            />
            {searchMode == 'student' && (
                <Wrapper load={function () {}} loading={isStudentPending} error={null} data={studentItems}>
                    <ListOfPeople
                        searchPlaceholder="Поиск студентов"
                        paginationList={studentPaginationList}
                        filterRequest={getGroups}
                        filterPlaceholder="Группа"
                        defaultFilter={''}
                        // filter={user.currentUser.user_status === 'stud' ? filter : undefined}
                        customMask={Masks.groupMask}
                        // underSearchText={underSearchText}
                    />
                </Wrapper>
            )}

            {searchMode == 'employee' && (
                <Wrapper load={function () {}} loading={isTeacherPending} error={null} data={teacherItems}>
                    <ListOfPeople
                        searchPlaceholder="Поиск сотрудников"
                        paginationList={teacherPaginationList}
                        filterRequest={getDivisions}
                        defaultFilter={''}
                        filterPlaceholder="Подразделения"
                    />
                </Wrapper>
            )}

            {searchMode == 'group' && (
                <SearchWithHints
                    width="100%"
                    leftIcon={<FiUsers />}
                    placeholder={'Номер группы'}
                    value={groupSearch}
                    setValue={setGroupSearch}
                    customMask={Masks.groupMask}
                    onHintClick={(hint) => {
                        open(<GroupModal group={hint!.id} />, `Группа`)
                    }}
                    request={studentApi.getGroups}
                    size={'big'}
                />
            )}
        </ModalContent>
    )
}

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    min-height: 700px;
    min-width: 50dvw;
`
