import { NotificationLinks } from '@entities/allowances/consts'
import { AllowanceNotification } from '@entities/allowances/types'

export const createAllowancePath = (allowance: AllowanceNotification) => {
    const page = NotificationLinks[allowance.notificationType]

    switch (page) {
        case NotificationLinks.RecepientDeclinedByZkgu:
            return `${page}/${allowance.employeeId}/initiator/${allowance.allowanceId}`
        case NotificationLinks.RecepientDeclinedByAppover:
            return `${page}/${allowance.employeeId}/initiator/${allowance.allowanceId}`
        case NotificationLinks.RecepientSelfDeclined:
            return `${page}/${allowance.employeeId}/initiator/${allowance.allowanceId}`
        case NotificationLinks.RecepientSelfConfirmed:
            return `${page}/${allowance.employeeId}/initiator/${allowance.allowanceId}`
        case NotificationLinks.FullyCompleted:
            return `${page}/${allowance.employeeId}/initiator/${allowance.allowanceId}`
        case NotificationLinks.ToApprove:
            return `${page}/${allowance.employeeId}/approver/${allowance.allowanceId}`
        case NotificationLinks.ToConfirm:
            return page
        case NotificationLinks.AllowanceOrderCompleted:
            return page
        default:
            return page
    }
}
