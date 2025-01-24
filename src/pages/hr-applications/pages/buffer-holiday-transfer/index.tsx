import React, { useEffect } from 'react'

import { Title, Wrapper } from '@ui/atoms'
import styled from 'styled-components'

import { HrBlockWrapper } from '@pages/hr-applications/ui'
import { HRInfoMessage } from '@pages/hr-applications/ui/atoms/hr-info-message'

import { bufferHolidayTransferModel } from './model'
import Content from './ui/content'

const HolidayTransferBufferPage = () => {
    const { data, loading } = bufferHolidayTransferModel.selectors.useBufferHolidayTransfer()

    useEffect(() => {
        bufferHolidayTransferModel.events.loadBufferHolidayTransfer()
    }, [])

    return (
        <Wrapper
            load={bufferHolidayTransferModel.events.loadBufferHolidayTransfer}
            loading={loading}
            error={null}
            data={data}
        >
            <ApplicationPageWrapper>
                <HrBlockWrapper maxWidth="1500px">
                    <HrHeader>
                        <Title size={2} align="left">
                            Заявление на перенос отпуска
                        </Title>
                        <HRInfoMessage />
                        <p>
                            График отпусков вы можете посмотреть по{' '}
                            <a target="_blank" href="#/vacation" rel="noreferrer">
                                ссылке
                            </a>
                            .
                        </p>
                    </HrHeader>
                    <Content />
                </HrBlockWrapper>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default HolidayTransferBufferPage

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
    // block
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
