import React from 'react'
import styled from 'styled-components'
import { Button, Loading, Wrapper } from '@shared/ui/atoms'
import { bufferWorkTransferModel } from '../model'
import Flex from '@shared/ui/flex'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import Block from '@shared/ui/block'
import Table from '@shared/ui/table'
import { compareDesc } from 'date-fns'
import { getExtendedWorkTransferHistoryColumns } from '../lib/get-extended-work-transfer-history-columns'
import { getWorkTransferHistoryColumns } from '../lib/get-work-transfer-history-columns'

const Content = () => {
    const { data, getDataLoading } = bufferWorkTransferModel.selectors.useBufferWorkTransfer()
    const load = () => bufferWorkTransferModel.events.loadBufferWorkTransfer()

    const jobVacations =
        data &&
        data
            .map((job) => {
                return [
                    ...job.notTakenChangeInShareOfRate.map((rates) => ({
                        ...rates,
                        jobTitle: 'ДОЛЖНОСТЬ',
                    })),
                ]
            })
            .flat()
            .sort((a, b) => compareDesc(new Date(a.transferDate), new Date(b.transferDate)))

    return (
        <Wrapper load={load} error={null} data={data}>
            <>
                <Flex jc="space-between" m="10px 0">
                    <BlockHeader>История заявлений на перевод:</BlockHeader>
                    <Link to={`/hr-applications/work-transfer`}>
                        <Button
                            text="Перевод"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            minWidth={'35px'}
                            height="36px"
                            shrinkTextInMobile
                        />
                    </Link>
                </Flex>
                {getDataLoading ? (
                    <Flex w="100%" jc="center" ai="center">
                        <Loading />
                    </Flex>
                ) : (
                    <Block
                        orientation={'vertical'}
                        alignItems={'flex-start'}
                        justifyContent={'flex-start'}
                        gap={'10px'}
                        width="100%"
                        maxWidth="100%"
                        height="fit-content"
                    >
                        <Table
                            columns={getWorkTransferHistoryColumns()}
                            columnsExtended={getExtendedWorkTransferHistoryColumns()}
                            data={jobVacations}
                            maxOnPage={10}
                        />
                    </Block>
                )}
            </>
        </Wrapper>
    )
}

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export default Content
