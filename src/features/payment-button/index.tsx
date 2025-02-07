import React from 'react'
import { HiOutlineQrcode } from 'react-icons/hi'

import { Colors } from '@shared/consts'
import { Button } from '@shared/ui/button'
import { useModal } from '@shared/ui/modal'
import { Direction, TutorialComponent } from '@shared/ui/types'

import PayQRModal from './pay-qr-modal'

type Props = {
    qr_current: string
    qr_total: string
    type?: Direction
    currentPage?: number
}

const PaymentButton = ({ type = 'horizontal', forwardedRef, ...props }: Props & TutorialComponent) => {
    const { open } = useModal()
    const title = 'Оплатить через QR-code'
    const background = `linear-gradient(45deg, ${Colors.green.main}, ${Colors.green.dark1})`

    const handleClickPay = () => {
        open(<PayQRModal {...props} />, title)
    }

    if (type === 'vertical') {
        return (
            <Button
                onClick={handleClickPay}
                width="68px"
                height="60px"
                direction="vertical"
                text={'QR'}
                icon={<HiOutlineQrcode />}
                textColor="#fff"
                background={background}
                forwardedRef={forwardedRef}
            />
        )
    }

    return (
        <Button
            text={title}
            onClick={handleClickPay}
            width="100%"
            textColor="#fff"
            background={background}
            forwardedRef={forwardedRef}
        />
    )
}

export default PaymentButton
