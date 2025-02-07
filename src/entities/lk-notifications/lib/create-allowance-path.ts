import { AllowanceNotification } from '@shared/api/allowances/types'

import { NotificationLinks } from '../consts'

export const createAllowancePath = (allowance: AllowanceNotification) => {
    const page = NotificationLinks[allowance.notificationType]

    switch (page) {
        case NotificationLinks.RecepientDeclinedByZkgu:
            return `${page}/${allowance.allowanceId}`
        case NotificationLinks.RecepientDeclinedByAppover:
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.RecepientSelfDeclined:
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.RecepientSelfConfirmed:
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.FullyCompleted:
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.ToApprove:
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.ToConfirm:
            return page
        case NotificationLinks.AllowanceOrderCompleted:
            return page
        default:
            return page
    }
}
