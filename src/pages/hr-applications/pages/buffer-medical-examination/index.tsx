import React from 'react'
import { Message, Wrapper } from '@ui/atoms'
import Content from './ui/content'
import PageBlock from '@shared/ui/page-block'
import { FiInfo } from 'react-icons/fi'
import { KedoError } from '@pages/hr-applications/ui/kedo-error'
import { hasKEDO } from '@pages/hr-applications/model/divisions'
import { useUnit } from 'effector-react'

const MedicalExaminationBufferPage = () => {
    const hasAccess = useUnit(hasKEDO)
    if (!hasAccess) return <KedoError />
    return (
        <Wrapper load={() => {}} error={null} data={!null}>
            <PageBlock>
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    В этом разделе можно посмотреть свои заявления на диспансеризацию и согласовать их. В архив
                    помещаются все выполненные заявления старше 7 дней.
                </Message>
                <Message type="alert" title="Внимание" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    Ведутся работы со статусами заявлений. Статус &quot;На рассмотрении*&quot; может не отражать
                    действительного состояния заявления
                </Message>
                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default MedicalExaminationBufferPage
