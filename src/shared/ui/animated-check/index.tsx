import React from 'react'

import { Colors, IColors } from '@shared/constants'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

import { AnimatedCheckWrapper } from './styles'

export type AnimatedCheckProps = {
    size: string
    color?: keyof IColors
}

export function AnimatedCheck({ size, color, forwardedRef }: AnimatedCheckProps & TutorialComponent) {
    return (
        <AnimatedCheckWrapper ref={forwardedRef} size={size} color={color ? Colors[color].main : undefined}>
            <div className="wrapper">
                <div className="circle-blue">
                    <div className="circle-white"></div>
                </div>
                <div className="circle-blue-shadow"></div>
                <svg className="check-svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <polyline className="check-poly" points="26 37 34 43 47 27" strokeLinecap="round" />
                </svg>
            </div>
        </AnimatedCheckWrapper>
    )
}
