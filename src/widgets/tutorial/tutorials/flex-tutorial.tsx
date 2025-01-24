import React from 'react'

import Flex from '@shared/ui/flex'

import { TutorialComponent, withTutorial } from '../lib/with-tutorial'

type JC = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
type AI = 'flex-start' | 'center' | 'flex-end'
type Direction = 'row' | 'column'
export const FlexTutorial = withTutorial(
    ({
        forwardedRef,
        children,
        ...rest
    }: TutorialComponent & { children?: React.ReactNode } & {
        jc?: JC
        ai?: AI
        w?: string
        h?: string
        gap?: string
        d?: Direction
        mw?: string
        mh?: string
        $wrap?: boolean
        p?: string
        m?: string
    }) => {
        return (
            <Flex ref={forwardedRef} {...rest}>
                {children}
            </Flex>
        )
    },
)
