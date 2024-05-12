import { settingsModel } from '@entities/settings'
import List from '@ui/list'
import React from 'react'
import PaymentsWidget from '../molecules/payments-widget'
import { ScheduleWidget } from '../schedule-widget'

const ScheduleAndNotification = () => {
    const { widgetSchedule, widgetPayment } =
        settingsModel.selectors.useSettings().settings['settings-home-page'].property

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && (
                <PaymentsWidget tutorialModule={{ id: 'home', step: 4, params: { position: 'bottom' } }} />
            )}
        </List>
    )
}

export default ScheduleAndNotification
