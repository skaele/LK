import { UserStatus } from '@shared/api/model'

export type Chat = {
    id: string
    /**
     * если поле не пустое, значит рассылка
     */
    subject: string
    opponent: {
        id: string
        status: UserStatus
        name: string
        /**
         * группа или сотрудник
         */
        data: string

        avatar?: string
    }
    lastmessage: LastMessage
}

export type LastMessage = {
    from: 'you' | 'opponent'
    html: string
    text: string
    files: File[]
    dateTime: string
    readed: string
}
