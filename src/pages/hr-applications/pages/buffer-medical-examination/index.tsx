import React from 'react'
import { applicationsModel } from '@entities/applications'
import { Title, Wrapper } from '@ui/atoms'
import { bufferMedicalExaminationModel } from './model'
import { HrBlockWrapper } from '@pages/hr-applications/ui'
import { HrHeader } from '@pages/hr-applications/ui/atoms/hr-header'
import { ApplicationPageWrapper } from '@pages/hr-applications/ui/atoms/application-page-wrapper'
import Content from './ui/content'
import { HRInfoMessage } from '@pages/hr-applications/ui/atoms/hr-info-message'

const MedicalExaminationBufferPage = () => {
    const {
        data: { listApplication },
        error,
        loading,
    } = applicationsModel.selectors.useApplications()

    const {
        data: medicalData,
        loading: medicalLoading,
        error: medicalError,
    } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()

    return (
        <Wrapper
            load={() => {
                applicationsModel.effects.getApplicationsFx()
                bufferMedicalExaminationModel.effects.loadBufferMedicalExaminationFx()
            }}
            loading={loading || medicalLoading}
            error={error || medicalError}
            data={listApplication && medicalData}
        >
            <ApplicationPageWrapper>
                <HrBlockWrapper maxWidth="1500px">
                    <HrHeader>
                        <Title size={2} align="left">
                            Заявление на диспансеризацию
                        </Title>
                        <HRInfoMessage />
                    </HrHeader>
                    <Content />
                </HrBlockWrapper>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default MedicalExaminationBufferPage
