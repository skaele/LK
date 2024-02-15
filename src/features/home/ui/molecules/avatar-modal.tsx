import ChangeAvatar from '@features/change-avatar'
import { MEDIA_QUERIES } from '@shared/constants'
import { Button } from '@shared/ui/button'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import Avatar from './avatar'
import { userModel } from '@entities/user'

const AvatarModalStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    ${MEDIA_QUERIES.isMobile} {
        & .avatar-container {
            width: 100%;
        }
    }

    ${MEDIA_QUERIES.isNotMobile} {
        & .avatar-container {
            width: 550px;
            height: 550px;
        }
    }
`

type Props = {
    avatar: string | undefined
    name: string
}

export const AvatarModal = ({ avatar, name }: Props) => {
    const { open } = useModal()
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const handleChangeAvatar = () => {
        open(<ChangeAvatar />)
    }

    return (
        <AvatarModalStyled>
            <Avatar name={name} width="350px" height="350px" marginRight="0" avatar={avatar} avatarModal={false} />
            {name === user?.fullName && <Button text="Изменить" onClick={handleChangeAvatar} width="100%" />}
        </AvatarModalStyled>
    )
}
