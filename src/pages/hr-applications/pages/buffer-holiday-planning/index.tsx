import React from 'react'
import Content from './ui/content'
import { useHistory } from 'react-router'
import { FiCalendar, FiInfo } from 'react-icons/fi'
import { Button, Message, Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { applicationsModel } from '@entities/applications'

const HolidayPlanningBufferPage = () => {
    const {
        data: { dataWorkerApplication },
        error,
    } = applicationsModel.selectors.useApplications()

    const history = useHistory()

    return (
        <Wrapper load={applicationsModel.effects.getWorkerPosts} error={error} data={dataWorkerApplication}>
            <PageBlock
                topRightCornerElement={
                    <Button
                        onClick={() => {
                            history.replace('/vacation')
                        }}
                        text="График отпусков"
                        background="var(--reallyBlue)"
                        textColor="#fff"
                        icon={<FiCalendar />}
                        minWidth={'35px'}
                        height="36px"
                        shrinkTextInMobile
                    />
                }
            >
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    Тут можно посмотреть свои заявления на отпуск и согласовать их.
                </Message>

                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default HolidayPlanningBufferPage
