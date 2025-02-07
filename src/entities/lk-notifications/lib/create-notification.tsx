import { allowancesModel } from '@entities/allowances'

import { AllowanceNotification } from '@shared/api/allowances/types'
import {
    ALERTS_ROUTE,
    APPLICATIONS_ROUTE,
    CHAT_ROUTE,
    DOCLIST_ALLOWANCES,
    DOCLIST_ROUTE,
    PAYMENTS_ROUTE,
    PERSONAL_ELECTRONIC_INTERACTION,
    PPS_CONTEST_ROUTE,
    SCHEDULE_ROUTE,
} from '@shared/routing'

import { NotificationType, TNotification } from '../../../shared/api/notifications/types'
import { NotificationLinks } from '../consts'

const createNotification = (
    type: NotificationType,
    id: string,
    title?: string,
    text?: string,
    goTo?: string,
    subType?: string,
    notification?: any,
) => {
    const notifs: Record<NotificationType, TNotification> = {
        alert: {
            id,
            title: title ?? 'Новости',
            text: 'Вам пришло оповещение!',
            type: 'alert',
            goTo: ALERTS_ROUTE,
            duration: 10000,
            pageId: 'alerts',
        },
        schedule: {
            id,
            type: 'schedule',
            title: title ?? 'Скоро начнется пара',
            text: text ?? '',
            goTo: SCHEDULE_ROUTE,
            pageId: 'schedule',
        },
        info: {
            id,
            title: title ?? 'Важная информация!',
            text: text ?? '',
            type: 'info',
        },
        'payment-dorm': {
            id,
            title: title ?? `Долг по общежитию`,
            text: text ?? 'Вам необходимо внести платеж ',
            type: 'payment-dorm',
            goTo: PAYMENTS_ROUTE,
            canClose: false,
            pageId: 'payments',
        },
        'payment-ed': {
            id,
            title: title ?? `Долг по образованию`,
            text: text ?? 'Вам необходимо внести платеж',
            type: 'payment-ed',
            goTo: PAYMENTS_ROUTE,
            canClose: false,
            pageId: 'payments',
        },
        message: {
            id,
            title: title ?? 'Сообщения',
            text: text ?? 'Посмотрите сообщения',
            type: 'message',
            goTo: CHAT_ROUTE,
            pageId: 'chat',
            canClose: false,
        },
        'kpi-pps': {
            id,
            title: title ?? '',
            text: text ?? 'У вашей заявки изменился статус',
            type: 'kpi-pps',
            goTo: PPS_CONTEST_ROUTE,
            pageId: 'kpi-pps',
        },
        'doc-for-review': {
            id,
            title: title ?? 'Документ для ознакомления',
            text: text ?? '',
            type: 'doc-for-review',
            goTo: DOCLIST_ROUTE,
            pageId: 'doclist',
        },
        'digital-services': {
            id,
            title: title ?? 'Статус заявки изменен',
            text: text ?? '',
            type: 'digital-services',
            goTo: APPLICATIONS_ROUTE,
            pageId: 'applications',
        },
        'version-update': {
            id,
            title: title ?? 'Вышла новая версия',
            text: 'Посмотрите изменения',
            type: 'version-update',
        },
        'electronic-interaction': {
            id,
            title: title ?? 'Документ для подписания',
            text: 'Об электронном взаимодействии',
            type: 'electronic-interaction',
            goTo: PERSONAL_ELECTRONIC_INTERACTION,
            pageId: 'electronic-interaction-agreement',
        },
        allowance: {
            id,
            title: title ?? 'Надбавки',
            text: text ?? '',
            type: 'allowance',
            goTo: goTo ?? DOCLIST_ALLOWANCES,
            onClick: () => {
                if (
                    NotificationLinks[(notification as AllowanceNotification).notificationType] ===
                    NotificationLinks.RecepientDeclinedByZkgu
                ) {
                    allowancesModel.events.setCurrentRole('Initiator')
                    allowancesModel.events.setCurrentJobId(notification.employeeId)
                }
                allowancesModel.events.notificationRead(id)
            },
            onClose: () => allowancesModel.events.notificationRead(id),
            canClose: subType !== 'ToConfirm',
        },
    }

    return notifs[type] ?? notifs.info
}

export default createNotification
