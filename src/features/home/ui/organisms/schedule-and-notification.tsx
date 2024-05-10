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

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && (
                <PaymentsWidget tutorialModule={{ id: 'intro', step: 9, params: { position: 'bottom' } }} />
            )}
        </List>
    )
}

export default ScheduleAndNotification
