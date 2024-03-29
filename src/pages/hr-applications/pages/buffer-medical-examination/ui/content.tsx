import React from 'react'
import styled from 'styled-components'
import Flex from '@shared/ui/flex'
import { bufferMedicalExaminationModel } from '../model'
import { Loading } from '@shared/ui/loading'
import Block from '@shared/ui/block'
import { Button, Wrapper } from '@shared/ui/atoms'
import Table from '@shared/ui/table'
import { getMedicalExaminationHistoryColumns } from '../lib/get-medical-examination-columns'
import { getExtendedMedicalExaminationHistoryColumns } from '../lib/get-extended-medical-examination-columns-columns'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

const Content = () => {
    const { data, getDataLoading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()

    return (
        <Wrapper load={bufferMedicalExaminationModel.effects.loadBufferMedicalExaminationFx} error={null} data={data}>
            <Flex jc="space-between" m="10px 0">
                <BlockHeader>История заявлений на диспансеризацию:</BlockHeader>
                <Link to={`/hr-applications/medical-examination`}>
                    <Button
                        text="Диспансеризация"
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
                        columns={getMedicalExaminationHistoryColumns()}
                        columnsExtended={getExtendedMedicalExaminationHistoryColumns()}
                        data={data}
                        maxOnPage={10}
                    />
                </Block>
            )}
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
