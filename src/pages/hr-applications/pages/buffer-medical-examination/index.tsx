import React from 'react'
import { FiInfo } from 'react-icons/fi'

import { Message, Wrapper } from '@ui/atoms'

import { applicationsModel } from '@entities/applications'

import PageBlock from '@shared/ui/page-block'

import Content from './ui/content'

const MedicalExaminationBufferPage = () => {
    const {
        data: { dataWorkerApplication },
        error,
    } = applicationsModel.selectors.useApplications()

    return (
        // <Wrapper
        //     load={() => {
        //         applicationsModel.effects.getApplicationsFx()
        //         bufferMedicalExaminationModel.effects.loadBufferMedicalExaminationFx()
        //     }}
        //     loading={loading || medicalLoading}
        //     error={error || medicalError}
        //     data={listApplication && medicalData}
        // >
        // </Wrapper>

        <Wrapper load={applicationsModel.effects.getWorkerPosts} error={error} data={dataWorkerApplication}>
            <PageBlock>
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    Тут можно посмотреть свои заявления на диспансеризацию и согласовать их.
                </Message>

                <Content />
            </PageBlock>
        </Wrapper>
    )
}

export default MedicalExaminationBufferPage
