import React from 'react'
import { applicationsModel } from '@entities/applications'
import { Message, Wrapper } from '@ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { FiInfo } from 'react-icons/fi'
import { Content } from './ui/content'

const HolidayWorkBufferPage = () => {
    const {
        data: { dataWorkerApplication },
        error,
    } = applicationsModel.selectors.useApplications()

    return (
        <Wrapper load={applicationsModel.effects.getWorkerPosts} error={error} data={dataWorkerApplication}>
            <PageBlock>
                <Message type="failure" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    Здесь нужно написать информацию о разделе
                </Message>
                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default HolidayWorkBufferPage
