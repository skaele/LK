import React from 'react'

import PaymentButton from '@features/payment-button'

import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { AnimatedCheck } from '@shared/ui/animated-check'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { TutorialComponent } from '@shared/ui/types'

export const PaymentButtonAnimated = ({
    currentPage,
    hasDebt,
    qr_current,
    qr_total,
    forwardedRef,
}: {
    currentPage: number
    hasDebt: boolean
    qr_current: string
    qr_total: string
} & TutorialComponent) => {
    const { isMobile } = useCurrentDevice()
    if (hasDebt)
        return (
            <PaymentButton
                forwardedRef={forwardedRef}
                currentPage={currentPage}
                type={isMobile ? 'horizontal' : 'vertical'}
                qr_current={qr_current}
                qr_total={qr_total}
            />
        )
    return <AnimatedCheck forwardedRef={forwardedRef} color="green" size="40px" />
}

export const PaymentButtonTutorial = withTutorial(PaymentButtonAnimated)
