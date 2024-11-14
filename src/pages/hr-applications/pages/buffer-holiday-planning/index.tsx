import React from 'react'
import Content from './ui/content'
import { useHistory } from 'react-router'
import { FiCalendar } from 'react-icons/fi'
import { Button, Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { KedoError } from '@pages/hr-applications/ui/kedo-error'
import { hasKEDO } from '@pages/hr-applications/model/divisions'
import { useUnit } from 'effector-react'
import { PersonnelOrdersMessage } from '@pages/hr-applications/ui/personnel-orders-message'

const HolidayPlanningBufferPage = () => {
    const history = useHistory()

    const hasAccess = useUnit(hasKEDO)
    if (!hasAccess) return <KedoError />

    return (
        <Wrapper load={() => {}} error={null} data={true}>
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
                <PersonnelOrdersMessage />
                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default HolidayPlanningBufferPage
