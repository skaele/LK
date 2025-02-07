import React from 'react'

import styled from 'styled-components'

import QrCode from '@features/payments/ui/atoms/qr-code'
import SliderPage from '@features/slider-page'

const PayQRModalStyled = styled.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`

type Props = {
    qr_current: string
    qr_total: string
    currentPage?: number
}

const PayQRModal = ({ qr_current, qr_total, currentPage }: Props) => {
    if (currentPage === 0) {
        return <QrCode qrCode={qr_current} />
    }

    if (currentPage === 1) {
        return <QrCode qrCode={qr_total} />
    }

    return (
        <PayQRModalStyled>
            <SliderPage
                pages={[
                    { title: 'Текущая задолженность', content: <QrCode qrCode={qr_current} /> },
                    { title: 'Общая задолженность', content: <QrCode qrCode={qr_total} /> },
                ]}
                appearance={false}
                currentPage={currentPage}
            />
        </PayQRModalStyled>
    )
}

export default PayQRModal
