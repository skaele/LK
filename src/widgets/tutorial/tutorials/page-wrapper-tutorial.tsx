import { PageWrapper } from '@features/payments'

import React from 'react'
import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'

export const PageWrapperTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => {
        return <PageWrapper ref={forwardedRef}>{children}</PageWrapper>
    },
)
