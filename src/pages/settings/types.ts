import { OldNameSettings } from '@entities/settings/types'

import { TSettingsSection } from '@shared/ui/text-field/types'

export type TFullSettingsModel = {
    [section in keyof typeof OldNameSettings]: TSettingsSection[]
}
