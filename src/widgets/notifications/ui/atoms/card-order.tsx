import { Colors, ThemeVariant } from '@shared/constants'
import React, { useState } from 'react'
import styled from 'styled-components'
import Subtext from '@shared/ui/subtext'
import { Button, Input, Title } from '@shared/ui/atoms'
import { Info } from '@pages/profile/ui/top/styles'
import localizeDate from '@shared/lib/dates/localize-date'
import { useUnit } from 'effector-react'
import { personnelOrdersModel } from '@entities/personnel-orders'
import { Order, orderStatus } from '@entities/personnel-orders/model/types'
import FileInput from '@shared/ui/file-input'
import { userSettingsModel } from '@entities/settings'
import Select, { SelectPage } from '@features/select'
import { Ul } from '@features/feedback/ui/organisms/help-links'

const compensationOptions = [
    { id: 0, title: 'Денежная компенсация' },
    { id: 1, title: 'Дополнительный выходной день' },
]

export const CardOrder = ({ order }: { order: Order }) => {
    const changeStatus = useUnit(personnelOrdersModel.events.statusChanged)
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const [compensation, setCompensation] = useState<SelectPage | null>(null)
    const [additionalDay, setAdditionalDay] = useState('')
    if (!order) return null
    return (
        <CardWrapper>
            <Info>
                <Title align="left" size={3}>
                    {order.job}
                </Title>
                {order.orderStatus && order.status === 'Approved' && (
                    <Title align="left" size={4}>
                        {order.orderStatus} {order.orderTitle && `(${order.orderTitle})`}
                    </Title>
                )}
                {order.status === 'Approved' && (
                    <Subtext fontSize="1em" color="var(--greenMain)">
                        {orderStatus[order.status]}
                    </Subtext>
                )}
                {order.status === 'Rejected' && (
                    <Subtext fontSize="1em" color="var(--redMain)">
                        {orderStatus[order.status]}
                    </Subtext>
                )}
                <Title align="left" size={5}>
                    Вид компенсации: {order.type}
                </Title>
                <Subtext>День выхода: {localizeDate(order.workDay, 'numeric')}</Subtext>
            </Info>
            {(order.status === 'Unknown' || order.status === 'InProgress') && (
                <div>
                    <Select
                        title="Вид компенсации"
                        items={compensationOptions}
                        selected={compensationOptions.length === 1 ? compensationOptions[0] : compensation}
                        setSelected={setCompensation}
                        isActive={compensationOptions.length > 1}
                        required
                        width="100%"
                    />
                    {compensation?.id === 1 && (
                        <Input
                            title="Дополнительный выходной день"
                            value={additionalDay}
                            setValue={setAdditionalDay}
                            type="date"
                            required
                        />
                    )}
                    <BlockButtons>
                        <Button
                            text="Отказаться"
                            onClick={() =>
                                changeStatus({
                                    orderId: order.id,
                                    isConfirmed: false,
                                })
                            }
                            background={Colors.red.main}
                            textColor="white"
                            height="35px"
                            width="100%"
                            isActive={true}
                        />
                        <Button
                            text="Принять"
                            onClick={() =>
                                changeStatus({
                                    orderId: order.id,
                                    isConfirmed: true,
                                })
                            }
                            background={Colors.green.main}
                            textColor="white"
                            height="35px"
                            width="100%"
                            isActive={!!compensation && compensation.id === 1 ? !!additionalDay : true}
                        />
                    </BlockButtons>
                    <WarningBlock isLightTheme={settings?.appearance.theme === ThemeVariant.Light}>
                        <Subtext>
                            <Ul>
                                <li>Вы можете отказаться от работы в выходной или праздничный день</li>
                                <li>
                                    Вы должны прикрепить файл справки об отсутствии противопоказаний, если относитесь к
                                    льготной категории персонала
                                </li>
                            </Ul>
                        </Subtext>
                        <Files />
                    </WarningBlock>
                </div>
            )}
        </CardWrapper>
    )
}

function Files() {
    const [value, setValue] = useState<File[]>([])
    return (
        <FileInput
            files={value}
            setFiles={(files: File[]) => {
                setValue(files)
            }}
            isActive={value.length < 1}
        />
    )
}
const CardWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;
`
const BlockButtons = styled.div`
    display: flex;
    gap: 8px;
    margin: 0.5rem 0;
    width: 300px;
    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
    @media (max-width: 380px) {
        margin: 1.5rem 0;
    }
`

const WarningBlock = styled.div<{
    isLightTheme: boolean
}>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: ${Colors.orange.transparent3};
    width: 100%;
    color: ${({ isLightTheme }) => (isLightTheme ? Colors.orange.dark3 : Colors.orange.light3)};
    text-align: center;
    border-radius: var(--brLight);
`
