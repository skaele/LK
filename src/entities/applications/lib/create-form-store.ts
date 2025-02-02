import { AxiosResponse } from 'axios'
import { Effect, EventCallable, createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'

import { applicationsModel } from '@entities/applications'

import { MessageType } from '@shared/consts'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

export interface TemplateFormStore<DataType> {
    data: DataType | null
    completed: boolean
    error: string | null
    loading: boolean
}

export interface TemplateFormStoreOutput<DataType, PostDataType> {
    selectors: {
        useForm: () => TemplateFormStore<DataType>
    }
    effects: {
        getFormFx: Effect<string | void, DataType | null, Error>
        postFormFx: Effect<PostDataType, void, Error>
    }
    events: {
        changeCompleted: EventCallable<{
            completed: boolean
        }>
        clearStore: EventCallable<void>
    }
}

interface APIType<DataType, PostDataType> {
    get?: (data?: string) => Promise<AxiosResponse<DataType>>
    post: (postData: PostDataType, formId?: string) => Promise<AxiosResponse<any, any>>
    put?: () => void
}

interface Args<DataType, PostDataType> {
    defaultStore: TemplateFormStore<DataType>
    api: APIType<DataType, PostDataType>
}

export const createFormStore = <DataType, PostDataType>({
    defaultStore,
    api,
}: Args<DataType, PostDataType>): TemplateFormStoreOutput<DataType, PostDataType> => {
    const DEFAULT_STORE = defaultStore

    const useForm = () => {
        return {
            data: useStore($formStore).data,
            loading: useStore(getFormFx.pending),
            error: useStore($formStore).error,
            completed: useStore($formStore).completed,
        }
    }

    const changeCompleted = createEvent<{ completed: boolean }>()

    const postFormFx = createEffect(async (postData: PostDataType): Promise<void> => {
        const response = await api.post(postData)

        if (response.data.result !== 'ok') throw new Error(response.data.error_text)

        return response.data
    })

    sample({
        clock: postFormFx.doneData,
        fn: () => ({
            message: 'Данные формы успешно отправлены',
            type: 'success' as MessageType,
        }),
        target: popUpMessageModel.events.evokePopUpMessage,
    })

    sample({
        clock: postFormFx.failData,
        fn: (error) => ({
            message: `${error.message}`,
            type: 'failure' as MessageType,
        }),
        target: popUpMessageModel.events.evokePopUpMessage,
    })

    sample({
        clock: postFormFx.doneData,
        target: applicationsModel.effects.getApplicationsFx,
    })

    const getFormFx = createEffect(async (data?: string): Promise<DataType | null> => {
        if (api.get) {
            try {
                const response = await api.get(data)

                return { ...response.data }
            } catch (error) {
                throw new Error(error as string)
            }
        }

        return DEFAULT_STORE.data
    })

    const clearStore = createEvent()

    const $formStore = createStore<TemplateFormStore<DataType>>(DEFAULT_STORE)
        .on(getFormFx, (oldData) => ({
            ...oldData,
            error: null,
        }))
        .on(getFormFx.doneData, (oldData, newData) => ({
            ...oldData,
            data: newData,
        }))
        .on(getFormFx.failData, (oldData, newData) => ({
            ...oldData,
            error: newData.message,
        }))
        .on(changeCompleted, (oldData, newData) => ({
            ...oldData,
            completed: newData.completed,
        }))
        .on(clearStore, () => ({
            ...DEFAULT_STORE,
        }))

    return {
        selectors: {
            useForm,
        },
        effects: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            getFormFx,
            postFormFx,
        },
        events: {
            changeCompleted,
            clearStore,
        },
    }
}
