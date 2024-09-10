import { Title } from '@shared/ui/title'
import List from '@ui/list'
import React from 'react'
import { FiFolderPlus } from 'react-icons/fi'
import ElectronicAgreementListItem from '../molecules/electronic-agreement-list-item'

interface Props {
    electronicAgreements: any[]
    isContractSigned: boolean
}

const ElectronicAgreementList = ({ electronicAgreements = [], isContractSigned }: Props) => {
    return (
        <List width="100%">
            <Title size={4} align="left" icon={<FiFolderPlus />} bottomGap>
                Доп. соглашения
            </Title>
            {electronicAgreements.map((item, index) => (
                <ElectronicAgreementListItem key={index} data={item} isContractSigned={isContractSigned} />
            ))}
        </List>
    )
}

export default ElectronicAgreementList
