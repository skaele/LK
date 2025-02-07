import React from 'react'

import { useUnit } from 'effector-react'

import { ListTutorial } from '@features/tutorials/list-tutorial'

import { userSettingsModel } from '@entities/settings'

import PaymentsWidget from '../molecules/payments-widget'
import { ScheduleWidget } from '../schedule-widget'

const ScheduleAndNotification = () => {
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const widgetSchedule = settings?.homePage.hasSchedule
    const widgetPayment = settings?.homePage.hasPayment

    return (
        <ListTutorial
            direction="horizontal"
            title="Виджеты"
            showPages
            gap={10}
            visible={!!widgetSchedule || !!widgetPayment}
            tutorialModule={{ id: 'home', step: 4, params: { position: 'top' } }}
        >
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && <PaymentsWidget />}
        </ListTutorial>
    )
}

export default ScheduleAndNotification
