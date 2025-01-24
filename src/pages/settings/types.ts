import { OldNameSettings } from '@entities/settings/types'

import { FilterElementList } from '@shared/ui/added-elements-list'
import { MessageType } from '@shared/ui/types'

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
type TValueFieldType = FilterElementList | string[] | number[] | string | boolean

export type LocationSettingsType = {
    guid_staff: string
    post: string
    address: string
    room: string
}

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

type TSettingsSection = {
    title: string
    fields: TSettingsFields[]
}

export type TFullSettingsModel = {
    [section in keyof typeof OldNameSettings]: TSettingsSection[]
}

export type FieldProps = TSettingsFields
