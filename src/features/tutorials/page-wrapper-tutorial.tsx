import React from 'react'

<<<<<<<< HEAD:src/features/tutorials/page-wrapper-tutorial.tsx
import { PageWrapper } from '@features/payments'

import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { TutorialComponent } from '@shared/ui/types'
========
import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/tutorials/page-wrapper-tutorial.tsx

import { PageWrapper } from '@features/payments'

export const PageWrapperTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => {
        return <PageWrapper ref={forwardedRef}>{children}</PageWrapper>
    },
)
