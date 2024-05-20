import List from '@ui/list'
import React from 'react'
import { ScheduleWidget } from '../schedule-widget'
import { useUnit } from 'effector-react'
import { userSettingsModel } from '@entities/settings'
import { PaymentsWidgetTutorial } from 'widgets/tutorial/tutorials/payments-tutorial'

const ScheduleAndNotification = () => {
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const widgetSchedule = settings?.homePage.hasSchedule
    const widgetPayment = settings?.homePage.hasPayment

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && (
                <PaymentsWidgetTutorial tutorialModule={{ id: 'home', step: 4, params: { position: 'bottom' } }} />
            )}
        </List>
    )
}

export default ScheduleAndNotification
