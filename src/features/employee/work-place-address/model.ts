import { popUpMessageModel } from '@entities/pop-up-message'
import { userModel } from '@entities/user'
import { createMutation } from '@farfetched/core'
import { LocationSettingsType } from '@pages/settings/types'
import { changeStaffAddressApi } from '@shared/api/user-api'
import { createEvent, sample } from 'effector'

export const changeStaffAddress = createEvent<LocationSettingsType>()

export const changeStaffAddressMutation = createMutation({
    handler: changeStaffAddressApi,
})

sample({
    clock: changeStaffAddress,
    target: changeStaffAddressMutation.start,
})

sample({
    clock: changeStaffAddressMutation.$succeeded,
    source: { user: userModel.stores.user, mutationParams: changeStaffAddressMutation.__.$latestParams },
    fn: ({ user: { currentUser }, mutationParams }) => {
        return {
            subdivisions: currentUser?.subdivisions?.map((subdivision) => {
                if (subdivision.guid_staff === mutationParams?.guid_staff) return { ...subdivision, ...mutationParams }

                return subdivision
            }),
        }
    },
    target: userModel.events.updateBulk,
})

sample({
    clock: changeStaffAddressMutation.$succeeded,
    source: { user: userModel.stores.user, mutationParams: changeStaffAddressMutation.__.$latestParams },
    fn: ({ user: { currentUser }, mutationParams }) => ({
        message: `Данные об адресе рабочего места (${
            currentUser?.subdivisions?.find((s) => s.guid_staff === mutationParams?.guid_staff)?.post
        }) успешно изменены`,
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: changeStaffAddressMutation.$failed,
    fn: () => ({
        message: 'Не удалось изменить данные об адресе рабочего места',
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
