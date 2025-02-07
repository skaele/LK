import React from 'react'

import styled from 'styled-components'

import { HrBlockWrapper } from '@pages/hr-applications/ui'
import { HRInfoMessage } from '@pages/hr-applications/ui/atoms/hr-info-message'

import { applicationsModel } from '@entities/applications'

import { Title, Wrapper } from '@shared/ui/atoms'

import Content from './ui/content'

const WorkTransferBufferPage = () => {
    const {
        data: { listApplication },
        error,
    } = applicationsModel.selectors.useApplications()

    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            error={error}
            data={listApplication}
        >
            <ApplicationPageWrapper>
                <HrBlockWrapper maxWidth="1500px">
                    <HrHeader>
                        <Title size={2} align="left">
                            Заявление на перевод
                        </Title>
                        <HRInfoMessage />
                    </HrHeader>
                    <Content />
                </HrBlockWrapper>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default WorkTransferBufferPage

const ApplicationPageWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`

const HrHeader = styled.div`
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`
