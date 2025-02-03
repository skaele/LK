import React, { useMemo, useState } from 'react'

import { useUnit } from 'effector-react'

import { FoundPages } from '@features/all-pages'
import searchFunc from '@features/all-pages/lib/search'
import { findEmployee } from '@features/all-staff/lib/find-employee'
import DivisionsList from '@features/divisions-list'
import GroupsList from '@features/groups-list'
import { HelpfulPage } from '@features/helpful-information'
import pages from '@features/helpful-information/config/pages-config'
import search from '@features/helpful-information/lib/search'
import { safetyPages } from '@features/helpful-information/safety-information/config'
import BlocksList from '@features/helpful-information/ui/blocks-list'
import NotificationList from '@features/lk-notification-list/ui/list'

import { TNotification, lkNotificationModel } from '@entities/lk-notifications'
import { menuModel } from '@entities/menu'
import { phonebookModel } from '@entities/phonebook'

import { studentApi, teacherApi } from '@shared/api'
import { TStudent, TTeacher } from '@shared/api/model'
import { Employee } from '@shared/api/model/phonebook'
import { getGroups } from '@shared/api/student-api'
import normalizeString from '@shared/lib/normalize-string'
import { IRoutes } from '@shared/routing'
import { userModel } from '@shared/session'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'

import getDataLength from '../lib/get-data-length'
import { FoundPeople } from '../ui/found-people'

type SearchConfig = {
    title: string
    content: ChildrenType
    data: any
    clear: () => void
    search: (value: string) => Promise<void> | void
}[]

export const useSearchConfig = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const { notifications, removeNotificationLoading } = lkNotificationModel.selectors.useLkNotifications()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const subdivisions = useUnit(phonebookModel.stores.subdivisions)
    const isStaff = user?.user_status === 'staff'

    const mergedPages = useMemo(
        () =>
            pages
                .flatMap(({ visible, content }) => {
                    if ((visible === 'staff' && isStaff) || (visible === 'student' && !isStaff) || visible === 'all')
                        return content.map((page) => ({
                            ...page,
                            links: page.links.filter(
                                (link) =>
                                    link.visible === 'all' ||
                                    (link.visible === 'staff' && isStaff) ||
                                    (link.visible === 'student' && !isStaff),
                            ),
                        }))
                    return null
                })
                .filter((page) => page !== null) as HelpfulPage[],
        [isStaff],
    )

    const [groups, setGroups] = useState<string[] | null>(null)
    const [divisions, setDivisions] = useState<string[] | null>(null)
    const [staff, setStaff] = useState<(TTeacher | Employee)[] | null>(null)
    const [students, setStudents] = useState<TStudent[] | null>(null)
    const [foundPages, setFoundPages] = useState<IRoutes | null>(null)
    const [foundNotifications, setFoundNotifications] = useState<TNotification[] | null>(null)
    const [foundHelpfullPages, setFoundHelpfullPages] = useState<HelpfulPage[] | null>(null)
    const [foundSafetyInformation, setFoundSafetyInformation] = useState<HelpfulPage[] | null>(null)

    const preconfig: SearchConfig = [
        {
            title: 'Разделы',
            content: <FoundPages pages={foundPages} showNotFound={false} />,
            clear: () => {
                setFoundPages(null)
            },
            search: (value) => {
                if (allRoutes) {
                    const result = searchFunc(value, allRoutes)
                    setFoundPages(result)
                }
            },
            data: foundPages,
        },
        {
            title: 'Студенты',
            content: <FoundPeople people={students} type="stud" />,
            data: students,
            clear: () => {
                setStudents(null)
            },
            search: async (value) => {
                const { data } = await studentApi.get(value, '', 1, 20)
                setStudents(data.items)
            },
        },
        {
            title: 'Сотрудники',
            content: <FoundPeople people={staff} type="staff" />,
            data: staff,
            clear: () => {
                setStaff(null)
            },
            search: async (value) => {
                if (isStaff) {
                    if (!subdivisions) return
                    const staff = findEmployee(subdivisions, value)
                    setStaff(staff)
                } else {
                    const { data } = await teacherApi.get(value, '', 1, 20)
                    setStaff(data.items)
                }
            },
        },
        {
            title: 'Группы',
            content: <GroupsList groups={groups} />,
            data: groups,
            clear: () => {
                setGroups(null)
            },
            search: async (value) => {
                const { data } = await getGroups(value)
                setGroups(data.items)
            },
        },
        {
            title: 'Подразделения',
            content: <DivisionsList divisions={divisions} />,
            data: divisions,
            clear: () => {
                setDivisions(null)
            },
            search: async (value) => {
                const { data } = await teacherApi.getDivisions(value)
                setDivisions(data.items)
            },
        },
        {
            title: 'Уведомления',
            content: <NotificationList notifications={foundNotifications} loadingRemove={removeNotificationLoading} />,
            clear: () => {
                setFoundNotifications(null)
            },
            search: (value) => {
                const found = notifications.filter((n) => normalizeString(n.title).includes(value))
                setFoundNotifications(found)
            },
            data: foundNotifications,
        },
        {
            title: 'Полезная информация',
            content: <BlocksList blocks={foundHelpfullPages} isStaff={isStaff} />,
            clear: () => {
                setFoundHelpfullPages(null)
            },
            search: (value) => {
                const found = search(value, mergedPages)
                setFoundHelpfullPages(found)
            },
            data: foundHelpfullPages,
        },
        {
            title: 'Безопасность',
            content: <BlocksList blocks={foundSafetyInformation} isStaff={isStaff} />,
            clear: () => {
                setFoundSafetyInformation(null)
            },
            search: (value) => {
                const found = search(value, safetyPages)
                setFoundSafetyInformation(found)
            },
            data: foundSafetyInformation,
        },
    ]

    const getAllTab = (): SearchConfig[number] => {
        const { content, clear, data } = preconfig.reduce(
            (acc, el, index) => {
                const isLast = index === preconfig.length - 1
                if (getDataLength(el.data)) {
                    acc.data.push(el.data)
                    acc.content.push(
                        <Flex d="column" gap="8px" p={isLast ? '0 0 0.5rem 0' : '0'}>
                            <Title size={4} align="left">
                                {el.title}
                            </Title>
                            {el.content}
                            {!isLast && <Divider />}
                        </Flex>,
                    )
                }
                acc.clear.push(el.clear)
                return acc
            },
            { content: [], clear: [], data: [] } as Record<'content' | 'clear' | 'data', any[]>,
        )

        return {
            title: 'Все',
            content,
            clear: () => clear.map((f) => f()),
            search: async (value: string) => {
                // Group Search
                preconfig[0].search(value)
                if (value.length <= 8 && /\d|[-]/g.test(value)) {
                    await preconfig[3].search(value)
                } else {
                    preconfig[5].search(value)
                    preconfig[6].search(value)
                    preconfig[7].search(value)
                    if (getDataLength(preconfig[0].data) === 0) {
                        // Other Search
                        await preconfig[1].search(value)
                        await preconfig[2].search(value)
                        await preconfig[4].search(value)
                    }
                }
            },
            data,
        }
    }

    return [getAllTab(), ...preconfig]
}
