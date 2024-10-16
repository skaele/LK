import { HOME_ROUTE } from '@app/routes/general-routes'
import { Button, Error } from '@shared/ui/atoms'
import React from 'react'
import { FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Forbidden = ({ text }: { text: string }) => {
    return (
        <Error text={text}>
            <Link to={HOME_ROUTE}>
                <Button text="На главную" icon={<FiHome />} />
            </Link>
        </Error>
    )
}
