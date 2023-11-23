import React from 'react'
import { Button, Loading, Wrapper } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import Block from '@shared/ui/block'
import Table from '@shared/ui/table'
import getHolidayWorkHistoryColumns from '../../buffer-holiday-transfer/lib/get-holiday-work-history-columns'

export const Content = () => {
    return (
        <Wrapper load={() => {}} error={null} data={!null}>
            <>
                <Flex jc="space-between" m="10px 0">
                    <BlockHeader>История заявлений на выход в выходной день:</BlockHeader>
                    <Link to={`/hr-applications/holiday-work`}>
                        <Button
                            text="Выйти в выходной день"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            minWidth={'35px'}
                            height="36px"
                            shrinkTextInMobile
                        />
                    </Link>
                </Flex>
                {null ? (
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
                        <Table columns={getHolidayWorkHistoryColumns()} data={null} maxOnPage={10} />
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
