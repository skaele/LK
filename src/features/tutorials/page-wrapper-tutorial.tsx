import React from 'react'

import { PageWrapper } from '@features/payments'

import { TutorialComponent, withTutorial } from '@shared/tutorial/lib/with-tutorial'

export const PageWrapperTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => {
        return <PageWrapper ref={forwardedRef}>{children}</PageWrapper>
    },
)
