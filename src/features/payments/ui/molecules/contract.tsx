import { PaymentsContract } from '@api/model'
import { SubmitButton } from '@ui/atoms'
import React, { useState } from 'react'
import styled from 'styled-components'

const ContractWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    justify-content: space-between;

    .contract-info {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 4px 0;
    }
`

interface Props {
    contract?: PaymentsContract
}

const Contract = ({ contract }: Props) => {
    const [copied, setCopied] = useState<boolean>(false)
    const contractInfo = [
        {
            text: 'Номер договора: ',
            info: contract?.number ?? '',
        },
        {
            text: 'Начало действия: ',
            info: contract?.startDate ?? '',
        },
        {
            text: 'Заказчик: ',
            info: contract?.customer ?? '',
        },
        {
            text: 'Обучающийся: ',
            info: contract?.student ?? '',
        },
        {
            text: 'Сумма к оплате: ',
            info: contract?.sum ?? '',
        },
        {
            text: 'Ежемесячная плата: ',
            info: contract?.monthly ?? '',
        },
    ]

    const handleCopy = () => {
        navigator.clipboard.writeText(contract?.number ?? '')
        setCopied(true)
    }

    return (
        <ContractWrapper>
            <div className="contract-info">
                {contractInfo.map((info, i) => {
                    return (
                        <p key={i}>
                            <b>{info.text}</b>:<span> {info.info}</span>
                        </p>
                    )
                })}
            </div>
            <SubmitButton
                text="Скопировать номер договора"
                action={handleCopy}
                isLoading={false}
                completed={copied}
                setCompleted={setCopied}
                popUpSuccessMessage="Номер договора скопирован в буфер"
                isActive
            />
        </ContractWrapper>
    )
}

export default Contract
