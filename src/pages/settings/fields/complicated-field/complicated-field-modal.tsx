import Select, { SelectPage } from '@features/select'
import { FieldProps, LocationSettingsType } from '@pages/settings/model'
import { sites } from '@pages/teachers-applications/pages/phonebook/lib/get-form'
import { getCabinetInitialValue, getCabinetMask } from '@pages/teachers-applications/pages/phonebook/lib/getCabinetMask'
import Masks from '@shared/lib/masks'
import { Button, Divider, Input, Message, SubmitButton, Title } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SliderPage, useModal } from 'widgets'

const TextFieldModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: hidden;
    @media (min-width: 1001px) {
        min-width: 500px;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ComplicatedModal = (props: FieldProps) => {
    const { value, message, title, subfieldsAction } = props
    const [inputValue, setInputValue] = useState<LocationSettingsType[]>(value as LocationSettingsType[])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>('')
    const [completed, setCompleted] = useState(false)
    const [page, setPage] = useState(inputValue[0]?.guid_staff || '')
    const { close } = useModal()
    const handleSubmit = async () => {
        try {
            setLoading(true)
            const data = inputValue.find((el) => el.guid_staff === page)
            if (data) await subfieldsAction?.(data)
            setLoading(false)
            setCompleted(true)
        } catch (error) {
            setError('Возникла ошибка: ' + (error as Error).message)
            setLoading(false)
        }
    }

    useEffect(() => {
        setInputValue((value as LocationSettingsType[]) || [])
        setError(null)
    }, [title])

    return (
        <TextFieldModalStyled key={title}>
            <Title size={3} align="left">
                {title}
            </Title>
            {message && (
                <Message type={message.type ?? ''} title={message.title}>
                    {message.body}
                </Message>
            )}
            <Message type="failure" visible={!!error}>
                {error}
            </Message>
            {Array.isArray(value) &&
                (value.length > 1 ? (
                    <SliderPage
                        pages={value.map((el, i) => {
                            if (typeof el === 'object')
                                return {
                                    id: el.guid_staff,
                                    title: el.post,
                                    content: (
                                        <Flex gap="8px" d="column">
                                            <Content
                                                {...el}
                                                setInputValue={(val) => {
                                                    const newValue = [...inputValue]
                                                    newValue[i] = val
                                                    setInputValue(newValue as LocationSettingsType[])
                                                }}
                                            />
                                            <Divider />
                                            <Buttons>
                                                <Button text="Отменить" width="100%" onClick={close} />
                                                <SubmitButton
                                                    isLoading={loading}
                                                    completed={completed}
                                                    text={'Обновить'}
                                                    action={handleSubmit}
                                                    setCompleted={setCompleted}
                                                    height="38px"
                                                />
                                            </Buttons>
                                        </Flex>
                                    ),
                                }
                            return { title: el.toString(), content: <></> }
                        })}
                        onChangePage={(id) => setPage(id || '')}
                        appearance={false}
                    />
                ) : (
                    typeof value[0] === 'object' && (
                        <Flex gap="8px" d="column">
                            <Title align="left" size={3}>
                                {value[0].post}
                            </Title>
                            <Content {...value[0]} setInputValue={(val) => setInputValue([val])} />
                            <Divider />
                            <Buttons>
                                <Button text="Отменить" width="100%" onClick={close} />
                                <SubmitButton
                                    isLoading={loading}
                                    completed={completed}
                                    text={'Обновить'}
                                    action={handleSubmit}
                                    setCompleted={setCompleted}
                                    height="38px"
                                />
                            </Buttons>
                        </Flex>
                    )
                ))}
        </TextFieldModalStyled>
    )
}

const Content = ({
    room,
    address,
    setInputValue,
    guid_staff,
    post,
}: LocationSettingsType & { setInputValue: (value: LocationSettingsType) => void }) => {
    const [select, setSelect] = useState<SelectPage | null>(findCurrentInSelect(sites, address))
    const [value, setValue] = useState(room)

    useEffect(() => {
        setInputValue({ guid_staff, post, room: value, address: select?.title ?? '' })
    }, [select, value])

    useEffect(() => {
        if (select?.title && address !== select?.title) setValue(getCabinetInitialValue(select?.title))
        else setValue(room)
    }, [select])

    return (
        <>
            <Select width="99%" title="Адрес рабочего места" items={sites} setSelected={setSelect} selected={select} />
            <Input
                title="Кабинет"
                value={value}
                type="cabinet"
                setValue={(val) => setValue(Masks.cabinetMask(val, getCabinetMask(select?.title || '')))}
                mask
            />
        </>
    )
}
