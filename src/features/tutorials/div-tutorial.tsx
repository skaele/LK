import React from 'react'

<<<<<<<< HEAD:src/features/tutorials/div-tutorial.tsx
import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { TutorialComponent } from '@shared/ui/types'
========
import { TutorialComponent, withTutorial } from '../lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/tutorials/div-tutorial.tsx

export const DivTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => (
        <div ref={forwardedRef}>{children}</div>
    ),
)
