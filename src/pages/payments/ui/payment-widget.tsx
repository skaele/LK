import PaymentButton from '@features/payment-button'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { AnimatedCheck } from '@shared/ui/animated-check'
import React from 'react'
import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'

export const PaymentWidget = withTutorial(
    ({
        forwardedRef,
        hasDebt,
        currentPage,
        qr_current,
        qr_total,
    }: { hasDebt: boolean; currentPage: number; qr_current: string; qr_total: string } & TutorialComponent) => {
        const { isMobile } = useCurrentDevice()
        return hasDebt ? (
            <PaymentButton
                currentPage={currentPage}
                type={isMobile ? 'horizontal' : 'vertical'}
                qr_current={qr_current}
                qr_total={qr_total}
                forwardedRef={forwardedRef}
            />
        ) : (
            <AnimatedCheck color="green" size="40px" forwardedRef={forwardedRef} />
        )
    },
)
