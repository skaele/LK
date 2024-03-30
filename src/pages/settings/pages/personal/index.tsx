import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { getValueView } from '@pages/settings/lib'
import { PhotoField, TextField } from '@pages/settings/ui'
import PasswordField from '@pages/settings/ui/password-field'
import { changeEmail, changePhone } from '@shared/api/user-api'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import { MdOutlinePassword } from 'react-icons/md'
import { TITLE_CONFIG } from '../constants'
import { Wrapper } from '../styled'
import ToggleItem from '@shared/ui/toggle-item'
import { userSettingsModel } from '@entities/settings'
import { confirmModel } from '@entities/confirm'

const PersonalSettings = () => {
    const {
        user: { currentUser },
        settings,
    } = useUnit({ user: userModel.$userStore, settings: userSettingsModel.stores.userSettings })

    if (!settings) {
        return null
    }

    const isGlobalSyncEnabled = settings.syncAcrossAllDevices

    return (
        <Wrapper>
            <div>
                <Title {...TITLE_CONFIG}>Данные</Title>
                <PhotoField
                    title="Фото профиля"
                    value={currentUser?.avatar}
                    icon={
                        <Avatar
                            avatar={currentUser?.avatar}
                            name={currentUser?.fullName ?? ''}
                            width="22px"
                            height="22px"
                            marginRight="0"
                        />
                    }
                    description={'Смена аватара'}
                />
                <TextField
                    icon={<FiMail />}
                    type="text"
                    title={'Email'}
                    description={getValueView(currentUser?.email)}
                    value={currentUser?.email}
                    action={(value) => changeEmail((value ?? '') as string)}
                    additionalActions={{
                        onSuccess: (value) => {
                            userModel.events.update({ key: 'email', value: value as string })
                        },
                    }}
                />
                <TextField
                    icon={<FiPhone />}
                    type="tel"
                    title={'Телефон'}
                    description={getValueView(currentUser?.phone)}
                    value={currentUser?.phone}
                    action={(value) => changePhone((value ?? '') as string)}
                    additionalActions={{
                        onSuccess: (value) => {
                            userModel.events.update({ key: 'phone', value: value as string })
                        },
                    }}
                />
                <PasswordField
                    icon={<MdOutlinePassword />}
                    type="password"
                    title={'Пароль'}
                    description={'Смена пароля'}
                />
            </div>
            <div>
                <Title {...TITLE_CONFIG}>Синхронизация</Title>
                <ToggleItem
                    title={'Сохранить настройки на всех устройствах'}
                    state={isGlobalSyncEnabled}
                    action={(isEnabled) => {
                        const message = isEnabled
                            ? 'Вы точно хотите синхронизировать настройки? Текущие настройки будут использоваться на всех устройствах.'
                            : 'Вы точно хотите отключить синхронизацию настроек на всех устройствах?'

                        confirmModel.events.evokeConfirm({
                            message,
                            isSubmitSuccess: isEnabled,
                            onConfirm: () => {
                                userSettingsModel.events.update({
                                    syncAcrossAllDevices: isEnabled,
                                })
                                confirmModel.events.closeConfirm()
                            },
                        })
                    }}
                />
            </div>
        </Wrapper>
    )
}

export default PersonalSettings
