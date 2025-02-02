import React from 'react'

import { PageWrapper } from '@features/payments'

import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { TutorialComponent } from '@shared/ui/types'

export const PageWrapperTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => {
        return <PageWrapper ref={forwardedRef}>{children}</PageWrapper>
    },
)
