import { userModel } from '@entities/user'
import { createEvent, createStore } from 'effector'

export interface Confirm {
    isOpen: boolean
    message?: string | null
    onConfirm: () => void
    onReject?: (params: any) => void
    isSubmitSuccess?: boolean
}

const DEFAULT_STORE: Confirm = {
    isOpen: false,
    message: null,
    onConfirm: () => null,
    onReject: () => null,
}

const evokeConfirm = createEvent<Omit<Confirm, 'isOpen'>>()

const closeConfirm = createEvent()

const $confirm = createStore<Confirm>(DEFAULT_STORE)
    .on(evokeConfirm, (oldState, { message, onReject, onConfirm, isSubmitSuccess }) => ({
        isOpen: true,
        message,
        onConfirm,
        onReject,
        isSubmitSuccess,
    }))
    .on(closeConfirm, (oldState) => ({
        ...oldState,
        isOpen: false,
    }))
    .on(userModel.stores.userGuid, () => ({
        ...DEFAULT_STORE,
    }))

export const stores = {
    confirm: $confirm,
}

export const events = {
    evokeConfirm,
    closeConfirm,
}
