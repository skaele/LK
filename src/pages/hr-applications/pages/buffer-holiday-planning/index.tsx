import React, { useEffect } from 'react'
import { bufferHolidayPlanningModel } from './model'
import { Title, Wrapper } from '@ui/atoms'
import { HrBlockWrapper } from '@pages/hr-applications/ui'
import Content from './ui/content'
import { HrHeader } from '@pages/hr-applications/ui/atoms/hr-header'
import { ApplicationPageWrapper } from '@pages/hr-applications/ui/atoms/application-page-wrapper'
import { HRInfoMessage } from '@pages/hr-applications/ui/atoms/hr-info-message'

const HolidayPlanningBufferPage = () => {
    const { data, loading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()

    useEffect(() => {
        bufferHolidayPlanningModel.events.loadBufferHolidayPlanning()
    }, [])

    return (
        <Wrapper
            load={bufferHolidayPlanningModel.events.loadBufferHolidayPlanning}
            loading={loading}
            error={null}
            data={data}
        >
            <ApplicationPageWrapper>
                <HrBlockWrapper maxWidth="1500px">
                    <HrHeader>
                        <Title size={2} align="left">
                            Заявление на отпуск
                        </Title>
                        <HRInfoMessage />
                        <p>
                            График отпусков вы можете посмотреть по{' '}
                            <a target="_blank" href="#/vacation" rel="noreferrer">
                                ссылке
                            </a>
                            .
                        </p>
                    </HrHeader>
                    <Content />
                </HrBlockWrapper>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default HolidayPlanningBufferPage
