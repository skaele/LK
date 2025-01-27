import React, { useState } from 'react'

import AccordionTitle from './title'
import AccordionWrapper from './wrapper'

interface Props {
    children: React.ReactNode
    title: string
    show?: boolean
    height: number
    confirmed?: boolean
    noIcon?: boolean
}

const Accordion = (props: Props) => {
    const { children, title, height, confirmed = false, show = false, noIcon } = props

    const [open, setOpen] = useState<boolean>(show)

    return (
        <AccordionWrapper height={height} open={open}>
            <AccordionTitle title={title} confirmed={confirmed} setOpenArea={setOpen} noIcon={noIcon} />
            <div className="inputs">{children}</div>
        </AccordionWrapper>
    )
}

export default Accordion
