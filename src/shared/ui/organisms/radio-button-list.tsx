import React from 'react'

import { Title } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/checkbox'
import List from '@shared/ui/list'

export interface RadioButton {
    id: string | number
    title: string
}

interface Props {
    title?: string
    buttons: RadioButton[]
    required?: boolean
    current: RadioButton | null
    setCurrent: (button: RadioButton | null) => void
    isSpecificRadio?: boolean
}

const RadioButtonList = ({ title, buttons, required = false, current, setCurrent, isSpecificRadio = false }: Props) => {
    return (
        <div>
            <Title visible={!!title} size={5} align="left" bottomGap required={required}>
                {title}
            </Title>
            <List>
                {!isSpecificRadio && (
                    <Checkbox
                        text={'Не выбрано'}
                        key={-1}
                        checked={current === null}
                        setChecked={() => setCurrent(null)}
                    />
                )}
                {buttons.map((button) => {
                    const { id, title } = button
                    return (
                        <Checkbox
                            text={title}
                            key={id}
                            checked={id === current?.id}
                            setChecked={() => setCurrent({ id: id, title: !isSpecificRadio ? title : id.toString() })}
                        />
                    )
                })}
            </List>
        </div>
    )
}

export default RadioButtonList
