import { settingsModel } from '@entities/settings'
import List from '@ui/list'
import React from 'react'
import PaymentsWidget from '../molecules/payments-widget'
import { ScheduleWidget } from '../schedule-widget'
import { TutorialWrapper } from 'widgets/training/ui/wrapper'

const ScheduleAndNotification = () => {
    const { widgetSchedule, widgetPayment } =
        settingsModel.selectors.useSettings().settings['settings-home-page'].property

    // const lessons = schedule?.today

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {widgetSchedule && <ScheduleWidget />}
            {widgetPayment && (
                <TutorialWrapper desiredId="intro" desiredStep={9}>
                    <PaymentsWidget />
                </TutorialWrapper>
            )}
        </List>
    )
}

export default ScheduleAndNotification
