import React from 'react'
import { Message } from '../message'

const VERSION = import.meta.env.VITE_APP_VERSION

const NewVersionMessage = () => {
    return (
        <Message
            icon={null}
            type="info"
            title={VERSION}
            width="38px"
            fontSize="0.65rem"
            padding="7px 0px"
            align="center"
        />
    )
}

export default NewVersionMessage
