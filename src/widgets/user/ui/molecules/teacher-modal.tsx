import { SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { SendMessage } from '@features/send-first-message'
import getLettersColors from '@shared/lib/get-letters-colors'
import { Button } from '@ui/button'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useModal from 'widgets/modal'
import handleChangeAccount from 'widgets/user/lib/handle-change-account'
import { UserProps } from 'widgets/user/types'
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
