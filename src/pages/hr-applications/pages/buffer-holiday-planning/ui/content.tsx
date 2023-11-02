import React from 'react'
import styled from 'styled-components'
import { bufferHolidayPlanningModel } from '../model'
import History from './history'
import JobTitle from './job-title'
import { applicationsModel } from '@entities/applications'
import { useState } from 'react'

const Content = () => {
    const { data } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const [historyIsEmpty, setHistoryIsEmpty] = useState<boolean>(true)

    return (
        <Wrapper>
            {dataWorkerApplication &&
                dataWorkerApplication.map((jobTitleInfo, index) => {
                    if (jobTitleInfo.isDismissal) {
                        historyIsEmpty && setHistoryIsEmpty(false)
                        return null
                    } else return <JobTitle key={jobTitleInfo.jobGuid} info={jobTitleInfo} index={index} data={data} />
                })}
            <History />
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 30px;
`
