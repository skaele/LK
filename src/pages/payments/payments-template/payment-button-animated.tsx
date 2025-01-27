import React from 'react'

import PaymentButton from '@features/payment-button'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { AnimatedCheck } from '@shared/ui/animated-check'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

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
