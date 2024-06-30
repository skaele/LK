import { Colors } from '@shared/constants'
import RubleNumber from '@shared/ui/ruble-number'
import { Size } from '@shared/ui/types'
import React from 'react'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

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
