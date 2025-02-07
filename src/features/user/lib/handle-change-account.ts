<<<<<<<< HEAD:src/features/user/lib/handle-change-account.ts
import { BrowserStorageKey } from '@shared/consts/browser-storage-key'
import { confirmModel } from '@shared/ui/confirm'
========
import { confirmModel } from '@entities/confirm'

import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
>>>>>>>> master:src/widgets/user/lib/handle-change-account.ts

const handleChangeAccount = (token: string) => {
    if (token) {
        return () => {
            confirmModel.events.evokeConfirm({
                message: 'Вы уверены, что хотите сменить аккаунт?',
                onConfirm: () => {
                    localStorage.setItem(BrowserStorageKey.Token, token)
                    location.reload()
                },
            })
        }
    }
}

export default handleChangeAccount
