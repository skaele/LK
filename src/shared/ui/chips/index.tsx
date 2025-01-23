import React, { useState } from 'react'

import { ChipItemStyled, ChipsStyled } from './styles'

type Props = {
    items: string[]
    onChange: (index: number) => void
}

export const Chips = ({ items, onChange }: Props) => {
    const [current, setCurrent] = useState(0)

    const handleChange = (index: number) => {
        onChange(index)

        return () => {
            setCurrent(index)
        }
    }

    return (
        <ChipsStyled>
            {items.map((item, i) => (
                <ChipItemStyled key={item} className={current === i ? 'current' : ''} onClick={handleChange(i)}>
                    {item}
                </ChipItemStyled>
            ))}
        </ChipsStyled>
    )
}
