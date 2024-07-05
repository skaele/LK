import React from 'react'
import { applicationsModel } from '@entities/applications'
import { Message, Wrapper } from '@ui/atoms'
import Content from './ui/content'
import PageBlock from '@shared/ui/page-block'
import { FiInfo } from 'react-icons/fi'
import { useUnit } from 'effector-react'

const MedicalExaminationBufferPage = () => {
    const [{ dataWorkerApplication }, error] = useUnit([
        applicationsModel.stores.applicationsStore,
        applicationsModel.stores.error,
    ])

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
