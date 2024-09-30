import React from 'react'
import Content from './ui/content'
import { useHistory } from 'react-router'
import { FiCalendar, FiInfo } from 'react-icons/fi'
import { Button, Message, Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { KedoError } from '@pages/hr-applications/ui/kedo-error-wrapper'
import { hasKEDO } from '@pages/hr-applications/model/divisions'
import { useUnit } from 'effector-react'

const HolidayPlanningBufferPage = () => {
    const history = useHistory()

    const hasAccess = useUnit(hasKEDO)
    if (!hasAccess) return <KedoError />

    return (
        <Wrapper load={() => {}} error={null} data={!null}>
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
                    В этом разделе можно посмотреть статус заявлений на отпуск и подать новые. В архив помещаются все
                    выполненные заявления старше 7 дней.
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

export default HolidayPlanningBufferPage
