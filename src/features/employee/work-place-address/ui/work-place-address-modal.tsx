import { userModel } from '@entities/user'
import Select, { SelectPage } from '@features/select'
import { sites } from '@pages/teachers-applications/pages/contact-details/lib/get-form'
import { getCabinetMask } from '@pages/teachers-applications/pages/contact-details/lib/getCabinetMask'
import { Colors } from '@shared/constants'
import Masks from '@shared/lib/masks'
import { Button, Divider, Input, Title } from '@shared/ui/atoms'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SliderPage, useModal } from 'widgets'
import { changeStaffAddress, changeStaffAddressMutation } from '../model'

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

type WorkPlaceAddressModalProps = {
    subDivisionGuidStaff?: string
}

export const WorkPlaceAddressModal = ({ subDivisionGuidStaff }: WorkPlaceAddressModalProps) => {
    const { close, isOpen } = useModal()
    const {
        loading,
        user: { currentUser },
    } = useUnit({
        loading: changeStaffAddressMutation.$pending,
        user: userModel.stores.user,
    })

    const [selectedGuidStaff, setSelectedGuidStaff] = useState<string>(() => {
        if (subDivisionGuidStaff) return subDivisionGuidStaff

        return currentUser?.subdivisions?.[0]?.guid_staff ?? ''
    })

    const selectedSubdivision = currentUser?.subdivisions?.find(
        (subdivision) => subdivision.guid_staff === selectedGuidStaff,
    )
    const subdivisionsLength = currentUser?.subdivisions?.length || 0

    const [address, setAddress] = useState<SelectPage | null>(() =>
        findCurrentInSelect(sites, selectedSubdivision?.address ?? ''),
    )
    const [room, setRoom] = useState(selectedSubdivision?.room)

    const handleSubmit = () => {
        changeStaffAddress({
            guid_staff: selectedGuidStaff,
            address: address?.title as string,
            room: room ?? '',
            post: selectedSubdivision?.post ?? '',
        })
    }

    useEffect(() => {
        setAddress(findCurrentInSelect(sites, selectedSubdivision?.address ?? ''))
        setRoom(selectedSubdivision?.room)
    }, [selectedSubdivision])

    useEffect(() => {
        if (address?.title !== selectedSubdivision?.address) {
            setRoom(Masks.cabinetMask('', getCabinetMask(address?.title || '')))
            return
        }

        setRoom(selectedSubdivision?.room)
    }, [address])

    const pages =
        currentUser?.subdivisions?.map((subdivision) => ({
            id: subdivision.guid_staff,
            title: subdivision.post ?? '',
            content: <></>,
        })) ?? []

    useEffect(() => {
        if (isOpen) {
            setAddress(findCurrentInSelect(sites, selectedSubdivision?.address ?? ''))
            setRoom(selectedSubdivision?.room)
        }
    }, [isOpen])

    return (
        <TextFieldModalStyled>
            {(subDivisionGuidStaff || subdivisionsLength === 1) && (
                <Title size={4} align="left">
                    {selectedSubdivision?.post}
                </Title>
            )}
            {!subDivisionGuidStaff && subdivisionsLength > 1 && (
                <SliderPage
                    pages={pages}
                    onChangePage={(id) => setSelectedGuidStaff(id || '')}
                    appearance={false}
                    currentPage={pages.findIndex(({ id }) => id === selectedGuidStaff) || 0}
                />
            )}

            <Select
                width="99%"
                title="Адрес рабочего места"
                items={sites}
                setSelected={setAddress}
                selected={address}
            />
            <Input
                title="Кабинет"
                value={room ?? ''}
                type="cabinet"
                setValue={(val) => setRoom(Masks.cabinetMask(val, getCabinetMask(address?.title || '')))}
                mask
            />

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
