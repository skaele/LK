import React from 'react'

import { TutorialComponent, withTutorial } from '../lib/with-tutorial'

export const DivTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => (
        <div ref={forwardedRef}>{children}</div>
    ),
)
