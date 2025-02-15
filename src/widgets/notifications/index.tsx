import React, { useEffect, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useHistory, useParams } from 'react-router'

import styled from 'styled-components'

import SliderPage from '@features/slider-page'

import { personalNotificationModel } from '@entities/notification'
import { NotificationType } from '@entities/notification/model'

import { ItemNotification, Notifications } from '@shared/api/model/notification'
import { DOCLIST_ROUTE } from '@shared/routing'
import { Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import Select, { SelectPage } from '@shared/ui/select'

import Input from '../../shared/ui/input'
import checkNotifications from './lib/filter-notification'
import { AllowanceList } from './ui/allowance-list'
import { ListNotification } from './ui/atoms'

const ElementsControlNotification = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

interface Props {
    docsType?: boolean
}

const BASE_FILTER_LIST = [
    { id: 'all', title: 'Все' },
    { id: 'unread', title: 'Непрочитанные' },
]

const NOTIFICATION_FILTER_LIST = [
    { id: 'all', title: 'Все' },
    { id: 'vacation', title: 'Отпуск' },
    { id: 'fire', title: 'Увольнение' },
    { id: 'businesstrip', title: 'Командировка' },
]

const NotificationsPage = ({ docsType }: Props) => {
    const history = useHistory()
    const { type: notificationType } = useParams<{ type: NotificationType }>()
    const setNotificationType = (type: string) => history.push(DOCLIST_ROUTE + '/' + type)
    const { data: notifications, error } = personalNotificationModel.selectors.usePersonalNotifications()
    const [foundNotification, setFoundNotification] = useState<Notifications>()
    const [searchValue, setSearchValue] = useState<string>('')

    const [baseFilter, setBaseFilter] = useState<SelectPage | null>({ id: 'all', title: 'Все' })
    const [notificationsFilter, setNotificationsFilter] = useState<SelectPage | null>({ id: 'all', title: 'Все' })

    useEffect(() => {
        setFoundNotification(JSON.parse(JSON.stringify(notifications)))
    }, [notifications])

    useEffect(() => {
        if (!!notifications) {
            setFoundNotification(
                checkNotifications(searchValue, baseFilter?.id ?? '', JSON.parse(JSON.stringify(notifications))),
            )
        }
    }, [baseFilter, searchValue])

    useEffect(() => {
        personalNotificationModel.effects.setNotificationsType(notificationType)
        personalNotificationModel.effects.getPersonalNotificationsFx()
    }, [notificationType])

    const handleSlideChange = (slideId: string | undefined) => {
        setNotificationType(slideId as NotificationType)
    }

    const filteredNotifications = useMemo((): ItemNotification[] => {
        const vacationNotifications = notifications?.vacation || []
        const businesstripNotifications = notifications?.businesstrip || []
        const fireNotifications = notifications?.fire || []

        switch (notificationsFilter?.id) {
            case 'all':
                return [...vacationNotifications, ...businesstripNotifications, ...fireNotifications].sort((a, b) => {
                    const dateA = a.notificationType === 'docs' ? new Date(a.date) : new Date(a.startDate || '')

                    const dateB = b.notificationType === 'docs' ? new Date(b.date) : new Date(b.startDate || '')

                    if (dateB.getTime() < dateA.getTime()) {
                        return -1
                    }

                    return 1
                })

            case 'vacation':
                return vacationNotifications

            case 'fire':
                return fireNotifications

            case 'businesstrip':
                return businesstripNotifications

            default:
                return []
        }
    }, [notifications, notificationsFilter])

    return (
        <Wrapper
            load={() => {
                personalNotificationModel.effects.setNotificationsType(notificationType)
                personalNotificationModel.effects.getPersonalNotificationsFx()
            }}
            error={error}
            data={foundNotification}
        >
            <PageBlock>
                <ElementsControlNotification>
                    <Input
                        value={searchValue}
                        setValue={setSearchValue}
                        placeholder={'Поиск'}
                        leftIcon={<FiSearch />}
                    />
                    <Select
                        items={notificationType === 'notifications' ? NOTIFICATION_FILTER_LIST : BASE_FILTER_LIST}
                        selected={notificationType === 'notifications' ? notificationsFilter : baseFilter}
                        setSelected={notificationType === 'notifications' ? setNotificationsFilter : setBaseFilter}
                    />
                </ElementsControlNotification>
                {docsType ? (
                    foundNotification?.docs && <ListNotification listNotification={foundNotification?.docs} />
                ) : (
                    <SliderPage
                        onChangePage={handleSlideChange}
                        currentPage={
                            notificationType === 'allowances' ? 2 : notificationType === 'notifications' ? 1 : 0
                        }
                        pages={[
                            {
                                id: 'docs',
                                title: 'Приказы',
                                content: foundNotification?.docs && (
                                    <ListNotification listNotification={foundNotification?.docs} />
                                ),
                            },
                            {
                                id: 'notifications',
                                title: 'Кадровые уведомления',
                                content: filteredNotifications.length ? (
                                    <ListNotification listNotification={filteredNotifications} />
                                ) : undefined,
                            },
                            {
                                id: 'allowances',
                                title: 'Надбавки',
                                content: <AllowanceList filter={baseFilter} searchQuery={searchValue} />,
                            },
                        ]}
                    />
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default NotificationsPage
