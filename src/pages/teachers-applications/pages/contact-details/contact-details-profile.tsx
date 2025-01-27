import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { useHistory } from 'react-router'

import { EDIT_PHONEBOOK_EMAIL, EDIT_PHONEBOOK_INNER_PHONE } from '@app/routes/teacher-routes'
import { BusinessMobilePhone } from '@features/employee/business-mobile-phone/ui'
import { WorkPlaceAddress } from '@features/employee/work-place-address/ui'
import { User } from '@shared/api/model'
import { Message } from '@shared/ui/atoms'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import TextFieldItem from '@shared/ui/text-field/text-field-item'
import { Title } from '@shared/ui/title'

export const ContactDetailsProfile = ({ user }: { user: User }) => {
    const history = useHistory()
    return (
        <Flex d="column" gap="1rem">
            <Message type="info">
                Корпоративную электронную почту и внутренний телефон можно изменить, отправив запрос в техническую
                поддержку.
            </Message>
            {user.subdivisions?.map((subdiv, index) => (
                <Flex d="column" gap="8px" key={index} ai="flex-start">
                    <Title align="left" size={3}>
                        {subdiv.subdivision}
                    </Title>
                    <Title align="left" size={4}>
                        {subdiv.post}
                    </Title>
                    <TextFieldItem
                        title="Корпоративная электронная почта"
                        icon={<FiMail />}
                        description={user?.email_staff}
                        rightIcon={<FaRegEdit />}
                        onClick={() => history.push(EDIT_PHONEBOOK_EMAIL)}
                    />
                    <TextFieldItem
                        title="Внутренний телефон"
                        icon={<FiPhone />}
                        description={subdiv.phone_inner}
                        rightIcon={<FaRegEdit />}
                        onClick={() => history.push(EDIT_PHONEBOOK_INNER_PHONE)}
                    />
                    <BusinessMobilePhone />
                    <WorkPlaceAddress subDivisionGuidStaff={subdiv.guid_staff} />
                    {/* <TextField
                        id="phone_staff"
                        title="Служебный мобильный телефон"
                        type="tel"
                        value={user?.phone_staff}
                        icon={<FiPhone />}
                        description={user?.phone_staff}
                        objectAction={(values) => {
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
                    <AddressField
                        id={'guid_staff'}
                        settingsName={NameSettings['settings-personal']}
                        title="Адрес места работы"
                        type="address"
                        value={[
                            {
                                guid_staff: subdiv.guid_staff,
                                post: subdiv.post || '',
                                address: subdiv.address || '',
                                room: subdiv.room || '',
                            },
                        ]}
                        icon={<HiOutlineOfficeBuilding />}
                        description={subdiv.address + ', ' + subdiv.room}
                        objectAction={(values) => {
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
                    /> */}
                    {index < user.subdivisions!.length - 1 && <Divider margin="16px 0" width="100%" />}
                </Flex>
            ))}
        </Flex>
    )
}
