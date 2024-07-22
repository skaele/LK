import { NotificationLinks } from '@entities/allowances/consts'
import { AllowanceNotification } from '@entities/allowances/types'

export const createAllowancePath = (allowance: AllowanceNotification) => {
    const page = NotificationLinks[allowance.notificationType]

    switch (page) {
        case NotificationLinks.RecepientDeclinedByZkgu:
            return page
        case NotificationLinks.RecepientDeclinedByAppover:
            return page
        case NotificationLinks.RecepientSelfDeclined:
            return page
        case NotificationLinks.RecepientSelfConfirmed:
            return page
        case NotificationLinks.FullyCompleted:
            return page
        case NotificationLinks.ToApprove:
            return page
        case NotificationLinks.ToConfirm:
            return page
        case NotificationLinks.AllowanceOrderCompleted:
            return page
        default:
            return page
    }
}
