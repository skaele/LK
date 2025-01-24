import React from 'react'

import { LinkButton } from '@ui/atoms'
import styled from 'styled-components'

import { userModel } from '@entities/user'

const MistakeModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 10px;

    & > span {
        line-height: 1.7rem;
    }

    @media (min-width: 1001px) {
        max-width: 400px;
    }
`

const MistakeModal = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <MistakeModalWrapper>
            {user?.user_status === 'stud' ? (
                <>
                    <span>
                        Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами
                        (многофункциональный центр)
                    </span>
                    <LinkButton
                        onClick={() => null}
                        href={'https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/'}
                        text="Контакты центра по работе со студентами"
                        width="100%"
                        align="center"
                    />
                </>
            ) : (
                <>
                    Для изменения данных Вам необходимо обратиться в отдел кадров по телефону
                    <br />
                    <b>
                        <a href="tel:+7(495) 223-05-23,1130">+7 (495) 223-05-23 доб.1130</a>
                    </b>
                    или написать письмо на
                    <br />
                    <a href="mailto:ok@mospolytech.ru">
                        <b>ok@mospolytech.ru</b>
                    </a>
                </>
            )}
        </MistakeModalWrapper>
    )
}

export default MistakeModal
