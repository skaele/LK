import { MessageType } from '@shared/ui/types'
import { ApprovalStatus } from '../types'

export const getStatusType = (status: ApprovalStatus): MessageType =>
    status === 'Approved'
        ? 'success'
        : status === 'Declined'
        ? 'failure'
        : status === 'Expired'
        ? 'failure'
        : status === 'Unknown'
        ? 'hint'
        : 'alert'
