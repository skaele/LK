import { UserStatus } from '@shared/api/model'

export type SendFirstMessageProps =
    | {
          userId: string | null | undefined
          avatar?: string
          fio: string
          status: UserStatus
          group?: string
      }
    | { group: string }
