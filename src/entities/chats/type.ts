import { ChatFile } from '@entities/chat-messages/type'

export type Chat = {
    id: string
    /**
     * если поле не пустое, значит рассылка
     */
    subject: string
    opponent:
        | {
              id: string
              status: 'сотрудник' | 'студент'
              name: string
              /**
               * группа или сотрудник
               */
              data: string

              avatar?: string
          }
        | undefined
    lastmessage: LastMessage
}

export type LastMessage = {
    from: 'you' | 'opponent'
    html: string
    text: string
    files: ChatFile[]
    datetime: string
    readed: boolean
    readed_opponent: boolean
}
