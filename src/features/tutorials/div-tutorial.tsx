import React from 'react'

import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { TutorialComponent } from '@shared/ui/types'

export const DivTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => (
        <div ref={forwardedRef}>{children}</div>
    ),
)
