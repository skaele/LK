import React from 'react'
import { applicationsModel } from '@entities/applications'
import { useState } from 'react'
import JobTitle from './JobTitle'
import styled from 'styled-components'
import Flex from '@shared/ui/flex'
import History from './history'
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
            <>
                <Flex jc="space-between" ai="flex-start" gap="10px">
                    {dataWorkerApplication.map((jobTitleInfo, index) => {
                        if (jobTitleInfo.isDismissal) {
                            historyIsEmpty && setHistoryIsEmpty(false)
                            return null
                        } else return <JobTitle info={jobTitleInfo} index={index} />
                    })}
                </Flex>
                <History />
            </>
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
