import React, { useEffect, useState } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'
import { useModal } from 'widgets'

import { userModel } from '@entities/user'

import { Colors } from '@shared/constants'
import { Button, Divider, Input } from '@shared/ui/atoms'
import ToggleItem from '@shared/ui/toggle-item'

import { changeStaffPhone, changeStaffPhoneParamsMutation } from '../model'

const TextFieldModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        min-width: 350px;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
`

export const BusinessMobilePhoneModal = () => {
    const { close, isOpen } = useModal()

    const {
        loading,
        user: { currentUser },
    } = useUnit({
        loading: changeStaffPhoneParamsMutation.$pending,
        user: userModel.stores.user,
    })

    const [phone, setPhone] = useState<string>(currentUser?.phone_staff ?? '')
    const [showLK, setShowLK] = useState(currentUser?.allow_mobphone_in ?? false)
    const [showSite, setShowSite] = useState(currentUser?.allow_mobphone_out ?? false)

    const handleSubmit = () => {
        changeStaffPhone({ phone_staff: phone, allow_mobphone_in: showLK, allow_mobphone_out: showSite })
    }

    useEffect(() => {
        if (isOpen) {
            setPhone(currentUser?.phone_staff ?? '')
            setShowLK(currentUser?.allow_mobphone_in ?? false)
            setShowSite(currentUser?.allow_mobphone_out ?? false)
        }
    }, [isOpen])

    return (
        <TextFieldModalStyled>
            <Input value={phone} setValue={setPhone} type={'tel'} mask />

            <ToggleItem
                title={'Показывать мобильный телефон внутри Личного кабинета'}
                state={showLK}
                action={setShowLK}
            />
            <ToggleItem title={'Показывать мобильный телефон на сайте'} state={showSite} action={setShowSite} />

            <Divider />
            <Buttons>
                <Button text="Отменить" onClick={close} />

                <Button
                    height="38px"
                    text={!loading ? 'Обновить' : undefined}
                    onClick={handleSubmit}
                    loading={loading}
                    background={Colors.blue.main}
                    minWidth="10ch"
                    textColor={Colors.white.main}
                />
            </Buttons>
        </TextFieldModalStyled>
    )
}
