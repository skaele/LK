import { Message } from '@shared/ui/message'
import React from 'react'
import { FiInfo } from 'react-icons/fi'

export const HRInfoMessage = () => {
    return (
        <Message type="info" title="Информация" icon={<FiInfo />}>
            Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени
            готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес»
            указывается название подразделения и адрес, куда необходимо приехать за готовым документом.
        </Message>
    )
}
