import React from 'react'

import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'

import { PageWrapper } from '@features/payments'

export const PageWrapperTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => {
        return <PageWrapper ref={forwardedRef}>{children}</PageWrapper>
    },
)
