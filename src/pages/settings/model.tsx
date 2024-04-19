/* eslint-disable @typescript-eslint/no-unused-vars */
import { confirmModel } from '@entities/confirm'
import { contactDetailsModel } from '@entities/contact-details'
import { PhoneSettingsType } from '@entities/settings/lib/get-default-settings'
import { NameSettings } from '@entities/settings/model'
import { userModel } from '@entities/user'
import { ContactDetails } from '@shared/api/model'
import getTimeFromMinutes from '@shared/lib/dates/get-time-from-minutes'
import sendForm from '@shared/lib/send-form'
import { FilterElementList } from '@shared/ui/added-elements-list'
import { MessageType } from '@shared/ui/types'
import React from 'react'
import { BiNews } from 'react-icons/bi'
import { FiBell, FiClock, FiFilePlus, FiFileText, FiLogOut, FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi'
import { HiOutlineViewGridAdd } from 'react-icons/hi'
import { MdOutlinePassword } from 'react-icons/md'

export type TSettingsFieldType =
    | 'link'
    | 'toggle'
    | 'display'
    | 'text'
    | 'photo'
    | 'choices'
    | 'interval'
    | 'password'
    | 'tel'
export type TValueFieldType = FilterElementList | string[] | number[] | string | boolean
export type TSettingsFields = {
    id?: string
    title: string
    type: TSettingsFieldType
    action?: (value?: TValueFieldType) => void
    disabled?: boolean
    value?: TValueFieldType
    additionalActions?:
        | {
              onAdd?: (value?: TValueFieldType) => void
              onRemoveOne?: (value?: TValueFieldType) => void
              onSuccess?: (value?: TValueFieldType) => void
          }
        | { [key: string]: (value?: TValueFieldType) => void }
    description?: string
    message?: { title: string; type: MessageType; body?: string }
    icon?: React.ReactNode
    visible?: boolean
    subfields?: TSettingsFields[]
    searchable?: boolean
    settingsName?: NameSettings
}

type TSettingsSection = {
    title: string
    fields: TSettingsFields[]
}

export type Prop<T> = { value: T } & Pick<TSettingsFields, 'icon' | 'description' | 'action' | 'additionalActions'>

type SettingsFullProps = {
    isStudent: boolean
    theme: Prop<boolean>
    scheduledLightTheme: boolean
    lightThemeRange: [string, string]
    email: Prop<string>
    avatar: Prop<string | undefined>
    menu: Prop<FilterElementList>
    homepage: {
        widgets: { schedule: Prop<boolean>; payments: Prop<boolean> }
        sections: Prop<FilterElementList>
        news: Prop<boolean>
    }
    settings: {
        all: boolean
        messages: boolean
        newVersion: boolean
        schedule: boolean
        news: boolean
        applications: boolean
        doclist: boolean
    }
    phone: Prop<string>
    phoneStaff?: {
        allow_mobphone_in?: boolean
        allow_mobphone_out?: boolean
    }
}

export type TFullSettingsModel = {
    [section in keyof typeof NameSettings]: TSettingsSection[]
}

export type FieldProps = TSettingsFields

export type TSettingsModel = (props: SettingsFullProps) => TFullSettingsModel

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSettingsModel: TSettingsModel = ({
    isStudent,
    theme,
    scheduledLightTheme,
    lightThemeRange,
    email,
    avatar,
    homepage,
    phone,
    phoneStaff,
    menu,
    settings,
}) => ({
    'settings-appearance': [
        {
            title: 'Тема',
            fields: [
                {
                    title: 'Темная тема',
                    type: 'toggle',
                    value: theme.value,
                    disabled: scheduledLightTheme,
                    action: theme.action,
                },
                // {
                //     id: 'scheduledLightTheme',
                //     title: 'По расписанию',
                //     type: 'toggle',
                //     value: scheduledLightTheme,
                //     subfields: [
                //         {
                //             id: 'lightThemeRange',
                //             title: 'Время',
                //             type: 'interval',
                //             value: lightThemeRange.map((el) => +el),
                //             description: `с ${getTimeFromMinutes(+lightThemeRange[0])} до ${getTimeFromMinutes(
                //                 +lightThemeRange[1],
                //             )} будет светлая тема`,
                //         },
                //     ],
                // },
            ],
        },
    ],
    'settings-customize-menu': [
        {
            title: 'Настройка меню',
            fields: [
                {
                    title: '',
                    type: 'choices',
                    value: menu.value,
                    additionalActions: menu.additionalActions,
                },
            ],
        },
    ],
    'settings-home-page': [
        {
            title: 'Разделы быстрого доступа',
            fields: [
                {
                    title: '',
                    type: 'choices',
                    value: homepage.sections.value,
                    additionalActions: homepage.sections.additionalActions,
                    action: () => null,
                },
            ],
        },
        {
            title: 'Виджеты',
            fields: [
                {
                    title: 'Расписание',
                    type: 'toggle',
                    value: homepage.widgets.schedule.value,
                    action: homepage.widgets.schedule.action,
                },
                {
                    title: 'Оплаты',
                    type: 'toggle',
                    value: homepage.widgets.payments.value,
                    action: homepage.widgets.payments.action,
                },
            ],
        },
        {
            title: 'Новости',
            fields: [
                {
                    title: 'Последние новости',
                    type: 'toggle',
                    value: homepage.news.value,
                    action: homepage.news.action,
                },
            ],
        },
    ],
    'settings-personal': [
        {
            title: 'Данные',
            fields: [
                {
                    title: 'Фото профиля',
                    type: 'photo',
                    value: avatar.value,
                    icon: avatar.icon,
                    description: avatar.description,
                    action: () => null,
                },
                {
                    title: isStudent ? 'Email' : 'Почта для уведомлений',
                    type: 'text',
                    value: email.value,
                    icon: <FiMail />,
                    description: email.description,
                    action: email.action,
                    additionalActions: email.additionalActions,
                },
                {
                    title: isStudent ? 'Телефон' : 'Служебный мобильный телефон',
                    type: 'tel',
                    value: phone.value,
                    icon: <FiPhone />,
                    description: phone.description,
                    action: phone.action,
                    additionalActions: phone.additionalActions,
                    subfields: phoneStaff
                        ? [
                              {
                                  title: 'Показывать мобильный телефон внутри Личного кабинета',
                                  type: 'toggle',
                                  value: phoneStaff.allow_mobphone_in,
                                  action: (value) =>
                                      sendForm<ContactDetails>(
                                          {
                                              title: 'Актуализируйте контактные данные',
                                              data: [
                                                  {
                                                      title: 'Показывать мобильный телефон внутри Личного кабинета',
                                                      fieldName: 'show_tel_mob_staff_inner',
                                                      type: 'checkbox',
                                                      value: (value as boolean) ?? false,
                                                  },
                                              ],
                                          },
                                          contactDetailsModel.effects.postFormFx,
                                          () => {},
                                          contactDetailsModel.events.changeCompleted,
                                      ),
                                  additionalActions: {
                                      onSuccess: (value) => {
                                          userModel.events.update({
                                              key: 'allow_mobphone_in',
                                              value: value as boolean,
                                          })
                                      },
                                  },
                              },
                              {
                                  title: 'Показывать мобильный телефон на сайте',
                                  type: 'toggle',
                                  value: phoneStaff.allow_mobphone_out,
                                  action: (value) =>
                                      sendForm<ContactDetails>(
                                          {
                                              title: 'Актуализируйте контактные данные',
                                              data: [
                                                  {
                                                      title: 'Показывать мобильный телефон на сайте',
                                                      fieldName: 'show_tel_mob_staff_outer',
                                                      type: 'checkbox',
                                                      value: (value as boolean) ?? false,
                                                  },
                                              ],
                                          },
                                          contactDetailsModel.effects.postFormFx,
                                          () => {},
                                          contactDetailsModel.events.changeCompleted,
                                      ),
                                  additionalActions: {
                                      onSuccess: (value) => {
                                          userModel.events.update({
                                              key: 'allow_mobphone_out',
                                              value: value as boolean,
                                          })
                                      },
                                  },
                              },
                          ]
                        : undefined,
                },
                {
                    title: 'Пароль',
                    type: 'password',
                    value: '',
                    icon: <MdOutlinePassword />,
                    description: 'Смена пароля',
                    action: () => null,
                },
            ],
        },
        {
            title: 'Действия',
            fields: [
                // {
                //     title: 'Сменить аккаунт',
                //     type: 'link',
                //     icon: <FiUsers />,
                //     action: () => null,
                //     visible: 1 == 1,
                // },
                {
                    title: 'Выйти из аккаунта',
                    type: 'display',
                    icon: <FiLogOut />,
                    action: () =>
                        confirmModel.events.evokeConfirm({
                            message: 'Вы точно хотите выйти из аккаунта?',
                            onConfirm: userModel.events.logout,
                        }),
                },
            ],
        },
    ],
    'settings-notifications': [
        {
            title: 'Получать уведомления',
            fields: [
                {
                    id: 'all',
                    type: 'toggle',
                    title: 'Все',
                    icon: <FiBell />,
                    value: settings.all,
                    subfields: [
                        {
                            id: 'messages',
                            title: 'Сообщения',
                            type: 'toggle',
                            value: settings.messages,
                            icon: <FiMessageCircle />,
                        },
                        {
                            id: 'newVersion',
                            title: 'Новая версия',
                            type: 'toggle',
                            value: settings.newVersion,
                            icon: <HiOutlineViewGridAdd />,
                        },
                        {
                            id: 'schedule',
                            title: 'Расписание',
                            type: 'toggle',
                            value: settings.schedule,
                            icon: <FiClock />,
                        },
                        {
                            id: 'news',
                            title: 'Новости',
                            type: 'toggle',
                            value: settings.news,
                            icon: <BiNews />,
                        },
                        {
                            id: 'applications',
                            title: 'Цифровые сервисы',
                            type: 'toggle',
                            value: settings.applications,
                            icon: <FiFileText />,
                        },
                        {
                            id: 'doclist',
                            title: 'Документы для ознакомления',
                            type: 'toggle',
                            value: settings.doclist,
                            icon: <FiFilePlus />,
                        },
                    ],
                },
            ],
        },
    ],
})

export default getSettingsModel
