import { MessageType } from '@shared/consts'

import { ApprovalStatus } from '../../../shared/api/allowances/types'

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
