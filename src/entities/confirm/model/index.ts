import { ReactNode } from 'react'

import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'

import { userModel } from '@entities/user'

export interface Confirm {
    isOpen: boolean
    message?: ReactNode
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

const useConfirm = () => {
    return useStore($confirm)
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

export const selectors = {
    useConfirm,
}

export const events = {
    evokeConfirm,
    closeConfirm,
}
