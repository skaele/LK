import React from 'react'
import { Link } from 'react-router-dom'
import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'

export const TutorialLink = withTutorial(
    ({ forwardedRef, to, children }: TutorialComponent & { to: string; children?: React.ReactNode }) => {
        return (
            <Link ref={forwardedRef} to={to}>
                {children}
            </Link>
        )
    },
)
