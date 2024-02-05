import { Email } from '@shared/ui/email'
import Flex from '@shared/ui/flex'
import { Telephone } from '@shared/ui/telephone'
import { CenterPage, Message, Title } from '@ui/atoms'
import KeyValue from '@ui/atoms/key-value'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import React from 'react'
import { FiInfo } from 'react-icons/fi'

const CantAccessPage = () => {
    return (
        <CenterPage alignItems="center" height="100%">
            <Block height="fit-content" orientation="vertical" maxWidth="500px" gap="10px">
                <GoBackButton />
                <Title size={4} align="left">
                    Не получается войти в Личный кабинет
                </Title>
                <Message type="info" lineHeight="1.3rem">
                    Если не получается войти в Личный кабинет - обратитесь в службу технической поддержки: опишите
                    проблему, укажите ФИО, группу/место работы, логин, приложите скришноты.
                </Message>
                <Flex d="column" ai="flex-start">
                    <KeyValue keyStr="Напишите письмо" value={<Email email="help@mospolytech.ru" />} />
                    <KeyValue
                        direction="vertical"
                        keyStr="Позвоните по телефону"
                        value={
                            <Flex d="column" gap="4px" ai="flex-start">
                                <Telephone tel="+7(495) 223-05-23,1111">+7 (495) 223-05-23 доб. 1111</Telephone>
                                <Telephone tel="+7(985) 350-41-73" />
                                <Telephone tel="+7(985) 350-39-44" />
                                <Telephone tel="+7(985) 352-31-22" />
                            </Flex>
                        }
                    />
                </Flex>
                <Message
                    type="tip"
                    icon={<FiInfo />}
                    title="Служба технической поддержки работает по рабочему графику с 9.30 до 20:00 в будние дни."
                />
            </Block>
        </CenterPage>
    )
}

export default CantAccessPage
