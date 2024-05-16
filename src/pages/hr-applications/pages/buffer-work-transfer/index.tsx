import React from 'react'
import { applicationsModel } from '@entities/applications'
import { Message, Wrapper } from '@ui/atoms'
import Content from './ui/content'
import PageBlock from '@shared/ui/page-block'
import { FiInfo } from 'react-icons/fi'

const WorkTransferBufferPage = () => {
    const {
        data: { dataWorkerApplication },
        error,
    } = applicationsModel.selectors.useApplications()

    return (
        <Wrapper load={applicationsModel.effects.getWorkerPosts} error={error} data={dataWorkerApplication}>
            <PageBlock>
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    Тут можно отправить заявление на перевод или изменение ставки.
                </Message>

                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default WorkTransferBufferPage
