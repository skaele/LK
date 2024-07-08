import { applicationsModel } from '@entities/applications'
import { popUpMessageModel } from '@entities/pop-up-message'
import { MessageType } from '@shared/ui/types'
import { AxiosResponse } from 'axios'
import { Effect, EventCallable, Store, createEffect, createEvent, createStore, sample } from 'effector'

export interface TemplateFormStoreOutput<DataType, PostDataType> {
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
    stores: {
        data: Store<DataType | null>
        loading: Store<boolean>
        error: Store<string | null>
        completed: Store<boolean>
    }
}

interface APIType<DataType, PostDataType> {
    get?: (data?: string) => Promise<AxiosResponse<DataType>>
    post: (postData: PostDataType, formId?: string) => Promise<AxiosResponse<any, any>>
    put?: () => void
}

interface Args<DataType, PostDataType> {
    defaultStore: DataType | null
    api: APIType<DataType, PostDataType>
}

export const createFormStore = <DataType, PostDataType>({
    defaultStore,
    api,
}: Args<DataType, PostDataType>): TemplateFormStoreOutput<DataType, PostDataType> => {
    const DEFAULT_STORE = defaultStore

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

        return DEFAULT_STORE
    })

    const clearStore = createEvent()

    const $data = createStore<DataType | null>(DEFAULT_STORE)
        .on(getFormFx.doneData, (_, newData) => newData)
        .reset(clearStore)
    const $completed = createStore<boolean>(false)
        .on(changeCompleted, (_, { completed }) => completed)
        .reset(clearStore)
    const $error = createStore<string | null>(null)
        .reset(clearStore)
        .on(getFormFx, () => null)
        .on(getFormFx.failData, (_, { message }) => message)
    return {
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
        stores: {
            data: $data,
            loading: getFormFx.pending,
            error: $error,
            completed: $completed,
        },
    }
}
