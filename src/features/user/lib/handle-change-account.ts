import { BrowserStorageKey } from '@shared/consts/browser-storage-key'
import { confirmModel } from '@shared/ui/confirm'

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
