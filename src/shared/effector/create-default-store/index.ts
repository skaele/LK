import { DEFAULT_API_LOAD_ERROR_MESSAGE } from '@shared/constants'
import { combine, createEffect, createEvent, createStore } from 'effector'
import { Args, EffectReturnType, TemplateStoreOutput } from './types'
import { userModel } from '@entities/user'

export const createDefaultStore = <APIDataType, OutputDataType = void, APIGetArgs = void, APIPostArgs = void>({
    api,
    prepareData,
    errorMessage = () => DEFAULT_API_LOAD_ERROR_MESSAGE,
}: Args<APIDataType, OutputDataType, APIGetArgs, APIPostArgs>): TemplateStoreOutput<
    APIDataType,
    TypeChoice<OutputDataType, APIDataType>,
    APIGetArgs,
    APIPostArgs
> => {
    type PreparedDataType = TypeChoice<OutputDataType, APIDataType>

    const getFx = createEffect(async (args: APIGetArgs): Promise<EffectReturnType<APIDataType, PreparedDataType>> => {
        try {
            const response = await api.get(args)

            return {
                data: response,
                preparedData: (prepareData ? prepareData(response) : response) as PreparedDataType,
            }
        } catch (error) {
            throw new Error(errorMessage(error as Error))
        }
    })

    const postFx = createEffect(async (args: APIPostArgs): Promise<any> => {
        try {
            const response = await api.post?.(args)

            return {
                data: response,
                preparedData: (prepareData ? prepareData(response) : response) as PreparedDataType,
            }
        } catch (error) {
            throw new Error(errorMessage(error as Error))
        }
    })

    const clearStore = createEvent()

    const $data = createStore<APIDataType | null>(null)
        .on(getFx.doneData, (_, { data }) => data)
        .reset(clearStore)
        .reset(userModel.stores.userGuid)
    const $preparedData = createStore<PreparedDataType | null>(null)
        .on(getFx.doneData, (_, { preparedData }) => preparedData)
        .reset(clearStore)
        .reset(userModel.stores.userGuid)

    const $error = createStore<string | null>(null)
        .on(getFx, () => null)
        .on(postFx.failData, (_, { message }) => message)
        .on(postFx.doneData, () => null)
        .on(getFx.failData, (_, { message }) => message)
        .reset(clearStore)
        .reset(userModel.stores.userGuid)

    return {
        stores: {
            error: $error,
            data: $data,
            preparedData: $preparedData,
            loading: combine(getFx.pending, postFx.pending, (first, second) => first || second),
        },
        effects: {
            getFx,
            postFx,
        },
        events: {
            clearStore,
        },
    }
}
