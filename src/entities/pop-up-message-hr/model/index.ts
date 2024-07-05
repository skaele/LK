import { createStore, createEvent } from 'effector'
import { MessageType } from '@ui/types'

interface IPopUpMessage {
    message: ChildrenType
    type: MessageType
    isOpen: boolean
    time?: number
    onClick?: () => void
}

const DEFAULT_STORE: IPopUpMessage = {
    message: '',
    type: 'success',
    isOpen: false,
    time: 2000,
}

const evokePopUpMessage = createEvent<{
    message: ChildrenType
    type: MessageType
    time?: number
    onClick?: () => void
}>()

const openPopUpMessage = createEvent<{ isOpen: boolean }>()
const clearStore = createEvent()

const $popUp = createStore<IPopUpMessage>(DEFAULT_STORE)
    .on(evokePopUpMessage, (_, { message, type, time = 2000, onClick }) => ({
        isOpen: true,
        message,
        type,
        time,
        onClick,
    }))
    .on(openPopUpMessage, (oldState, { isOpen }) => ({
        ...oldState,
        isOpen: isOpen,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const stores = {
    popUp: $popUp,
}

export const events = {
    evokePopUpMessage,
    openPopUpMessage,
    clearStore,
}
