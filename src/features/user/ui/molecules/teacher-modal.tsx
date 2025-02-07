import React from 'react'
import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { SendMessage } from '@features/send-first-message'
import handleChangeAccount from '@features/user/lib/handle-change-account'

import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'

import getLettersColors from '@shared/lib/get-letters-colors'
import { SCHEDULE_FILTER_ROUTE } from '@shared/routing'
import { Button } from '@shared/ui/button'
import { useModal } from '@shared/ui/modal'
import { UserProps } from '@shared/ui/user-header/types'

import { UserModal } from '../atoms'

type Props = Pick<UserProps, 'isMe' | 'token' | 'name' | 'division' | 'avatar' | 'id'>

const TeacherModal = (props: Props) => {
    const { close } = useModal()
    const { token, name } = props
    const buttonBackgroundColor = `linear-gradient(45deg, ${getLettersColors(name, 'dark1')}, ${getLettersColors(
        name,
        'main',
    )})`

    return (
        <UserModal type="staff" {...props}>
            {!token && (
                <>
                    <Link
                        to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                            page: 'current',
                            filter: name,
                        })}
                    >
                        <Button
                            icon={<FiClock />}
                            text={'Расписание'}
                            onClick={() => {
                                close()
                            }}
                            background="var(--theme-4)"
                            width="100%"
                        />
                    </Link>

                    <SendMessage avatar={props.avatar} userId={props.id?.toString() ?? ''} status="staff" fio={name} />
                </>
            )}
            {token && (
                <Button
                    text="Войти в аккаунт"
                    width="100%"
                    textColor="#fff"
                    background={buttonBackgroundColor}
                    onClick={handleChangeAccount(token)}
                />
            )}
        </UserModal>
    )
}

export default TeacherModal
