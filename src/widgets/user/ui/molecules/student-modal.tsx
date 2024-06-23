import { SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { SendMessage } from '@features/send-first-message'
import getLettersColors from '@shared/lib/get-letters-colors'
import { Button } from '@ui/button'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useModal from 'widgets/modal'
import { UserProps } from 'widgets/user/types'
import handleChangeAccount from '../../lib/handle-change-account'
import { UserModal } from '../atoms'

type Props = Pick<
    UserProps,
    'finance' | 'educationForm' | 'degreeLevel' | 'course' | 'group' | 'token' | 'isMe' | 'avatar' | 'name' | 'id'
>

const StudentModal = (props: Props) => {
    const { close } = useModal()
    const { token, name, group } = props
    const buttonBackgroundColor = `linear-gradient(45deg, ${getLettersColors(name, 'main')}, ${getLettersColors(
        name,
        'dark1',
    )})`

    return (
        <UserModal {...props} type="stud">
            {!token && (
                <>
                    {group && (
                        <Link
                            to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                                page: 'current',
                                filter: group,
                            })}
                        >
                            <Button
                                icon={<FiClock />}
                                text={'Расписание'}
                                onClick={() => close()}
                                width="100%"
                                background="var(--theme-4)"
                            />
                        </Link>
                    )}
                    <SendMessage avatar={props.avatar} userId={props.id?.toString() ?? ''} status="stud" fio={name} />
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

export default StudentModal
