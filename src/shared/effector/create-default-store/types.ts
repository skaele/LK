import { Effect, Event, Store } from 'effector'

export type EffectReturnType<DataType, PreparedDataType> = {
    data: DataType
    preparedData: PreparedDataType
}

export interface TemplateStoreOutput<DataType, PreparedDataType, APIGetArgs, APIPostArgs = void> {
    stores: {
        data: Store<DataType | null>
        preparedData: Store<PreparedDataType | null>
        error: Store<string | null>
        loading: Store<boolean>
    }
    effects: {
        getFx: Effect<APIGetArgs, EffectReturnType<DataType, PreparedDataType>, Error>
        postFx: Effect<APIPostArgs, any, Error>
    }
    events: {
        clearStore: Event<void>
    }
}

interface APIType<APIGetArgs, DataType, APIPostArgs> {
    get: (args: APIGetArgs) => Promise<DataType>
    post?: (args: APIPostArgs) => Promise<any>
}

export interface Args<APIDataType, OutputDataType, APIGetArgs, APIPostArgs> {
    /**
     * Запросы
     */
    api: APIType<APIGetArgs, APIDataType, APIPostArgs>
    /**
     *
     * @param apiData Формат данных, приходящих в апи
     * @returns Препарированные данные
     */
    prepareData?: (apiData: APIDataType) => TypeChoice<OutputDataType, APIDataType>
    errorMessage?: (error: Error) => string
}
