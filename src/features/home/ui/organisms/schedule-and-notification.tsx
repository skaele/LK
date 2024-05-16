import List from '@ui/list'
import React from 'react'
import PaymentsWidget from '../molecules/payments-widget'
import { ScheduleWidget } from '../schedule-widget'
import { useUnit } from 'effector-react'
import { userSettingsModel } from '@entities/settings'

const ScheduleAndNotification = () => {
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const widgetSchedule = settings?.homePage.hasSchedule
    const widgetPayment = settings?.homePage.hasPayment

    // const lessons = schedule?.today

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && <PaymentsWidget />}
        </List>
    )
}

export default ScheduleAndNotification
