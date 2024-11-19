import React from 'react'
import { Wrapper } from '@ui/atoms'
import Content from './ui/content'
import PageBlock from '@shared/ui/page-block'
import { KedoError } from '@pages/hr-applications/ui/kedo-error'
import { hasKEDO } from '@pages/hr-applications/model/divisions'
import { useUnit } from 'effector-react'
import { PersonnelOrdersMessage } from '@pages/hr-applications/ui/personnel-orders-message'

const MedicalExaminationBufferPage = () => {
    const hasAccess = useUnit(hasKEDO)
    if (!hasAccess) return <KedoError />
    return (
        <Wrapper load={() => {}} error={null} data={true}>
            <PageBlock>
                <PersonnelOrdersMessage />
                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default MedicalExaminationBufferPage
