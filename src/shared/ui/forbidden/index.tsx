import { HOME_ROUTE } from '@app/routes/general-routes'
import { Button, Error } from '@shared/ui/atoms'
import React from 'react'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const Forbidden = ({ text }: { text: string }) => {
    return (
        <Error text={text}>
            <Link to={HOME_ROUTE}>
                <Button text="На главную" icon={<IoHome />} />
            </Link>
        </Error>
    )
}
