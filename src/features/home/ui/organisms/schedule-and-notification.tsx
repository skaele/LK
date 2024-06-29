import React from 'react'
import { ScheduleWidget } from '../schedule-widget'
import { useUnit } from 'effector-react'
import { userSettingsModel } from '@entities/settings'
import { ListTutorial } from 'widgets/tutorial/tutorials/list-tutorial'
import PaymentsWidget from '../molecules/payments-widget'

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
            tutorialModule={{ id: 'home', step: 4, params: { position: 'bottom' } }}
        >
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && <PaymentsWidget />}
        </ListTutorial>
    )
}

export default ScheduleAndNotification
