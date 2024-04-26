import { TextField } from '@pages/settings/fields'
import { User } from '@shared/api/model'
import { changeStaffAddress, changeStaffPhone } from '@shared/api/user-api'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import { NameSettings } from '@entities/settings/model'
import { userModel } from '@entities/user'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { LocationSettingsType } from '@pages/settings/model'
import { ComplicatedField } from '@pages/settings/fields/complicated-field'

export const PhonebookProfile = ({ user }: { user: User }) => {
    return (
        <Flex d="column">
            {user.subdivisions?.map((subdiv, index) => (
                <Flex d="column" gap="8px" key={index} ai="flex-start">
                    <Title align="left" size={3}>
                        {subdiv.subdivision}
                    </Title>
                    <Title align="left" size={4}>
                        {subdiv.post}
                    </Title>
                    <TextField
                        title="Корпоративная электронная почта"
                        type="text"
                        icon={<FiMail />}
                        description={user?.email_staff}
                        editable={false}
                        disabled
                    />
                    <TextField
                        title="Внутренний телефон"
                        type="tel"
                        icon={<FiPhone />}
                        description={subdiv.phone_inner}
                        editable={false}
                        disabled
                    />
                    <TextField
                        id="phone_staff"
                        title="Служебный мобильный телефон"
                        type="tel"
                        value={user?.phone_staff}
                        icon={<FiPhone />}
                        description={user?.phone_staff}
                        subfieldsAction={(values) => {
                            changeStaffPhone(values)
                            Object.entries(values).forEach(([key, value]) => {
                                userModel.events.update({ key, value } as {
                                    key: keyof User
                                    value: User[keyof User]
                                })
                            })
                        }}
                        settingsName={NameSettings['settings-personal']}
                        subfields={[
                            {
                                id: 'allow_mobphone_in',
                                title: 'Показывать мобильный телефон внутри Личного кабинета',
                                type: 'toggle',
                                value: user?.allow_mobphone_in,
                            },
                            {
                                id: 'allow_mobphone_out',
                                title: 'Показывать мобильный телефон на сайте',
                                type: 'toggle',
                                value: user?.allow_mobphone_out,
                            },
                        ]}
                    />
                    <ComplicatedField
                        id={'guid_staff'}
                        settingsName={NameSettings['settings-personal']}
                        title="Адрес места работы"
                        type="complicated"
                        value={
                            user?.subdivisions?.map((subdiv) => ({
                                guid_staff: subdiv.guid_staff,
                                post: subdiv.post || '',
                                address: subdiv.address || '',
                                room: subdiv.room || '',
                            })) ?? []
                        }
                        icon={<HiOutlineOfficeBuilding />}
                        description={subdiv.address + ', ' + subdiv.room}
                        subfieldsAction={(values) => {
                            changeStaffAddress(values as LocationSettingsType)
                            if (user?.subdivisions) {
                                const subdivisions = user?.subdivisions?.map((subdivision) => {
                                    if (subdivision.guid_staff === values.guid_staff)
                                        return { ...subdivision, ...values }
                                    else return subdivision
                                })
                                userModel.events.update({ key: 'subdivisions', value: subdivisions })
                            }
                        }}
                        subfields={[
                            {
                                id: 'address',
                                title: 'Адрес',
                                type: 'select',
                            },
                            {
                                id: 'room',
                                title: 'Номер кабинета',
                                type: 'text',
                            },
                        ]}
                    />
                    {index < user.subdivisions!.length - 1 && <Divider margin="16px 0" width="100%" />}
                </Flex>
            ))}
        </Flex>
    )
}
