import { popUpMessageModel } from '@entities/pop-up-message'
import { PhoneSettingsType } from '@entities/settings/lib/get-default-settings'
import { userModel } from '@entities/user'
import { createMutation } from '@farfetched/core'
import { changeStaffPhoneApi } from '@shared/api/user-api'
import { createEvent, sample } from 'effector'

export const changeStaffPhone = createEvent<PhoneSettingsType>()

export const changeStaffPhoneParamsMutation = createMutation({
    handler: changeStaffPhoneApi,
})

sample({
    clock: changeStaffPhone,
    target: changeStaffPhoneParamsMutation.start,
})

sample({
    clock: changeStaffPhoneParamsMutation.$succeeded,
    source: changeStaffPhoneParamsMutation.__.$latestParams,
    filter: Boolean,
    target: userModel.events.updateBulk,
})

sample({
    clock: changeStaffPhoneParamsMutation.$succeeded,
    fn: () => ({
        message: 'Данные о служебном мобильном телефоне успешно изменены',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: changeStaffPhoneParamsMutation.$failed,
    fn: () => ({
        message: 'Не удалось изменить данные о служебном мобильном телефоне',
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
