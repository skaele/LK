import { AxiosResponse } from 'axios'
import { Effect, Event, forward, sample } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector'
import { MessageType } from '@shared/ui/types'
import { popUpMessageModel } from '@entities/pop-up-message'
import { applicationsModel } from '@entities/applications'

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
        getFormFx: Effect<void, DataType | null, Error>
        postFormFx: Effect<PostDataType, void, Error>
    }
    events: {
        changeCompleted: Event<{
            completed: boolean
        }>
        clearStore: Event<void>
    }
}

interface APIType<DataType, PostDataType> {
    get?: () => Promise<AxiosResponse<DataType>>
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

    const getFormFx = createEffect(async (): Promise<DataType | null> => {
        if (api.get) {
            try {
                const response = await api.get()

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
            getFormFx,
            postFormFx,
        },
        events: {
            changeCompleted,
            clearStore,
        },
    }
}
