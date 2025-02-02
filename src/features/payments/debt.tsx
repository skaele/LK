import React from 'react'

import { Colors } from '@shared/consts'
import RubleNumber from '@shared/ui/ruble-number'
import { Size, TutorialComponent } from '@shared/ui/types'

type Props = {
    debt: number
    size?: Size
}

const Debt = ({ debt, size = 'big', forwardedRef }: Props & TutorialComponent) => {
    const debtColor = debt > 0 ? Colors.red.main : Colors.green.main

    return (
        <RubleNumber forwardedRef={forwardedRef} size={size} color={debtColor} fontWeight="600">
            {debt >= 0 ? debt : `+${-debt}`}
        </RubleNumber>
    )
}

export default Debt
