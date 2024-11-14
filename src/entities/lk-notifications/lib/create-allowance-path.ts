import { allowancesModel } from '@entities/allowances'
import { NotificationLinks } from '@entities/allowances/consts'
import { AllowanceNotification } from '@entities/allowances/types'

export const createAllowancePath = (allowance: AllowanceNotification) => {
    const page = NotificationLinks[allowance.notificationType]

    switch (page) {
        case NotificationLinks.RecepientDeclinedByZkgu:
            allowancesModel.events.setCurrentRole('Initiator')
            allowancesModel.events.setCurrentJobId(allowance.employeeId)

            return `${page}/${allowance.allowanceId}`
        case NotificationLinks.RecepientDeclinedByAppover:
            allowancesModel.events.setCurrentRole('Initiator')
            allowancesModel.events.setCurrentJobId(allowance.employeeId)
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.RecepientSelfDeclined:
            allowancesModel.events.setCurrentRole('Initiator')
            allowancesModel.events.setCurrentJobId(allowance.employeeId)
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.RecepientSelfConfirmed:
            allowancesModel.events.setCurrentRole('Initiator')
            allowancesModel.events.setCurrentJobId(allowance.employeeId)
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.FullyCompleted:
            allowancesModel.events.setCurrentRole('Initiator')
            allowancesModel.events.setCurrentJobId(allowance.employeeId)
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.ToApprove:
            allowancesModel.events.setCurrentRole('Approver')
            allowancesModel.events.setCurrentJobId(allowance.employeeId)
            return `${page}/${allowance.allowanceId}`

        case NotificationLinks.ToConfirm:
            return page
        case NotificationLinks.AllowanceOrderCompleted:
            return page
        default:
            return page
    }
}
