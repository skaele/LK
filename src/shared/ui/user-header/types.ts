import { StudentAccount, UserStatus } from '@shared/api/model'
<<<<<<<< HEAD:src/shared/ui/user-header/types.ts
import { Direction, Size } from '@shared/ui/types'
========

import { Direction, Size } from '@ui/types'
>>>>>>>> master:src/widgets/user/types.ts

export type UserProps = StudentAccount & {
    id: number | string | undefined
    type: UserStatus
    orientation?: Direction
    token?: string
    avatar?: string
    division?: string
    name: string
    loading?: boolean
    size?: Size
    isMe?: boolean
    checked?: boolean
    indexNumber?: number
    faculty?: string
    setChecked?: (value: boolean) => void
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
