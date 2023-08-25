import React from 'react'
import { applicationsModel } from '@entities/applications'
import { Message, Title, Wrapper } from '@ui/atoms'
import { FiInfo } from 'react-icons/fi'
import { bufferMedicalExaminationModel } from './model'
import { HrBlockWrapper } from '@pages/hr-applications/ui'
import { HrHeader } from '@pages/hr-applications/ui/atoms/HrHeader'
import { ApplicationPageWrapper } from '@pages/hr-applications/ui/atoms/ApplicationPageWrapper'
import Content from './ui/content'

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
                        <Message type="info" title="Информация" icon={<FiInfo />}>
                            Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                            (информация о степени готовности) заказанных справок меняется согласно действиям оператора.
                            В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо
                            приехать за готовым документом.
                        </Message>
                    </HrHeader>
                    <Content />
                </HrBlockWrapper>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default MedicalExaminationBufferPage
