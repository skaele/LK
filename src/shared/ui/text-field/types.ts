import { FilterElementList } from '../added-elements-list'
import { MessageType } from '../types'

type TValueFieldType = FilterElementList | string[] | number[] | string | boolean

export type TSettingsFieldType =
    | 'link'
    | 'toggle'
    | 'display'
    | 'text'
    | 'photo'
    | 'choices'
    | 'interval'
    | 'password'
    | 'tel'

export type TSettingsFields = {
    title: string
    type: TSettingsFieldType
    action?: (value?: TValueFieldType) => void
    value?: TValueFieldType
    additionalActions?:
        | {
              onAdd?: (value?: TValueFieldType) => void
              onRemoveOne?: (value?: TValueFieldType) => void
              onSuccess?: (value?: TValueFieldType) => void
          }
        | { [key: string]: (value?: TValueFieldType) => void }
    description?: string
    message?: { title: string; type: MessageType; body?: string }
    icon?: React.ReactNode
    visible?: boolean
    subfields?: TSettingsFields[]
    searchable?: boolean
    disabled?: boolean
}

export type TSettingsSection = {
    title: string
    fields: TSettingsFields[]
}

export type FieldProps = TSettingsFields
