import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'

<<<<<<<< HEAD:src/shared/ui/pop-up-message/model/index.ts
import { MessageType } from '@shared/consts'
import { userModel } from '@shared/session'
========
import { userModel } from '@entities/user'
>>>>>>>> master:src/entities/pop-up-message/model/index.ts

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

const usePopUpMessage = () => {
    return useStore($popUpstore)
}

const evokePopUpMessage = createEvent<{
    message: ChildrenType
    type: MessageType
    time?: number
    onClick?: () => void
}>()

const openPopUpMessage = createEvent<{ isOpen: boolean }>()

const $popUpstore = createStore<IPopUpMessage>(DEFAULT_STORE)
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
    .reset(userModel.stores.userGuid)

export const selectors = {
    usePopUpMessage,
}

export const events = {
    evokePopUpMessage,
    openPopUpMessage,
}

export const stores = {
    popUpstore: $popUpstore,
}
