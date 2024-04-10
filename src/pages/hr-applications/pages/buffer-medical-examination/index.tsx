import React from 'react'
import { Message, Wrapper } from '@ui/atoms'
import Content from './ui/content'
import PageBlock from '@shared/ui/page-block'
import { FiInfo } from 'react-icons/fi'

const MedicalExaminationBufferPage = () => {
    return (
        <Wrapper load={() => {}} error={null} data={!null}>
            <PageBlock>
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    В этом разделе можно посмотреть свои заявления на диспансеризацию и согласовать их. В архив
                    помещаются все выполненные заявления старше 7 дней.
                </Message>
                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default MedicalExaminationBufferPage
