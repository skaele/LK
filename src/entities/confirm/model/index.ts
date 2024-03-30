import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'

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

const useConfirm = () => {
    return useStore($confirm)
}

const evokeConfirm = createEvent<Omit<Confirm, 'isOpen'>>()

const closeConfirm = createEvent()
const clearStore = createEvent()

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
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useConfirm,
}

export const events = {
    evokeConfirm,
    closeConfirm,
    clearStore,
}
