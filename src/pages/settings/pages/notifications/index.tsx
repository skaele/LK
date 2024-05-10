import { userSettingsModel } from '@entities/settings'
import { useUnit } from 'effector-react'
import React from 'react'
import { Wrapper } from '../styled'
import ToggleItem from '@shared/ui/toggle-item'
import { turnOffAllNotifications, turnOnAllNotifications } from './model'
import { Title } from '@shared/ui/title'
import { TITLE_CONFIG } from '../constants'
import { TogglesWrapper } from './styled'

const NotificationsSettings = () => {
    const settings = useUnit(userSettingsModel.stores.userSettings)

    if (!settings) return null

    const notifications = settings.notifications
    const isAllEnabled = Object.values(notifications).every(Boolean)

    return (
        <Wrapper style={{ gap: '0' }}>
            <Title {...TITLE_CONFIG} bottomGap={'4px'}>
                Уведомления
            </Title>

            <div>
                <ToggleItem
                    title={'Все'}
                    state={isAllEnabled}
                    action={(isEnabled) => {
                        if (isEnabled) {
                            turnOnAllNotifications()
                        } else {
                            turnOffAllNotifications()
                        }
                    }}
                />

                <TogglesWrapper>
                    <ToggleItem
                        title={'Сообщения'}
                        state={notifications.messages}
                        action={(state) => {
                            userSettingsModel.events.update({
                                notifications: {
                                    ...notifications,
                                    messages: state,
                                },
                            })
                        }}
                    />
                    <ToggleItem
                        title={'Новая версия'}
                        state={notifications.newVersion}
                        action={(state) => {
                            userSettingsModel.events.update({
                                notifications: {
                                    ...notifications,
                                    newVersion: state,
                                },
                            })
                        }}
                    />
                    <ToggleItem
                        title={'Расписание'}
                        state={notifications.schedule}
                        action={(state) => {
                            userSettingsModel.events.update({
                                notifications: {
                                    ...notifications,
                                    schedule: state,
                                },
                            })
                        }}
                    />
                    <ToggleItem
                        title={'Новости'}
                        state={notifications.news}
                        action={(state) => {
                            userSettingsModel.events.update({
                                notifications: {
                                    ...notifications,
                                    news: state,
                                },
                            })
                        }}
                    />

                    <ToggleItem
                        title={'Цифровые сервисы'}
                        state={notifications.applications}
                        action={(state) => {
                            userSettingsModel.events.update({
                                notifications: {
                                    ...notifications,
                                    applications: state,
                                },
                            })
                        }}
                    />

                    <ToggleItem
                        title={'Документы для ознакомления'}
                        state={notifications.doclist}
                        action={(state) => {
                            userSettingsModel.events.update({
                                notifications: {
                                    ...notifications,
                                    doclist: state,
                                },
                            })
                        }}
                    />
                </TogglesWrapper>
            </div>
        </Wrapper>
    )
}

export default NotificationsSettings
