import React from 'react'
import { useState } from 'react'

import { applicationsModel } from '@entities/applications'
import styled from 'styled-components'

import History from './history'
import JobTitle from './job-title'

//import HWAssesment from './holiday-work-affirmation'

const Content = () => {
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const [historyIsEmpty, setHistoryIsEmpty] = useState<boolean>(true)

    if (!dataWorkerApplication) {
        return null
    }

    return (
        <Wrapper>
            {dataWorkerApplication.map((jobTitleInfo, index) => {
                if (jobTitleInfo.isDismissal) {
                    historyIsEmpty && setHistoryIsEmpty(false)
                    return null
                } else return <JobTitle key={jobTitleInfo.jobGuid} info={jobTitleInfo} index={index} />
            })}
            {/* {data.map((info, index) => {
                return <JobTitle info={info} index={index} />
            })} */}
            <History />
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
