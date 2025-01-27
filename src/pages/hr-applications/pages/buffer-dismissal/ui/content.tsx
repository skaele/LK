import React from 'react'
import { useState } from 'react'

import { applicationsModel } from '@entities/applications'
import styled from 'styled-components'

import History from './history'
import JobTitle from './job-title'

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
                } else return <JobTitle jobTitleInfo={jobTitleInfo} index={index} key={jobTitleInfo.jobGuid} />
            })}
            <History
                historyIsEmpty={historyIsEmpty}
                historyDataWorkerApplication={dataWorkerApplication.filter(({ isDismissal }) => isDismissal)}
            />
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
