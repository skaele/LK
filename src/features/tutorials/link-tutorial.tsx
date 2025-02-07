import React from 'react'
import { Link } from 'react-router-dom'

import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { TutorialComponent } from '@shared/ui/types'

export const LinkTutoiral = withTutorial(
    ({ forwardedRef, to, children }: TutorialComponent & { to: string; children?: React.ReactNode }) => {
        return (
            <Link ref={forwardedRef} to={to}>
                {children}
            </Link>
        )
    },
)
