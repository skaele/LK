import Flex from '@shared/ui/flex'
import React from 'react'
import { Buttons, Content, Header, Subtitle, Wrapper } from '../styled'
import { Title } from '@shared/ui/title'
import { InfoItem } from '../info-item'
import UserHeaderBackground from '@shared/ui/user-header/user-header-background'
import { Link } from 'react-router-dom'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { FiClock, FiMessageCircle } from 'react-icons/fi'
import { Button } from '@shared/ui/button'
import { useModal } from 'widgets'
import List from '@shared/ui/list'
import Avatar from '@features/home/ui/molecules/avatar'

export const PhonebookModal = ({
    title,
    info,
    isEmployee,
    avatar,
}: {
    title: string
    info: { subtitle?: string; attributes: { title: string; text: string }[] }[]
    avatar?: string
    isEmployee?: boolean
}) => {
    const { close } = useModal()

    return (
        <Flex d="column">
            <Header padingLeft={isEmployee ? '180px' : '10px'}>
                <UserHeaderBackground
                    fullName={title}
                    height="200px"
                    width="calc(100% + 16px)"
                    baseScale={1}
                    baseScaleDelta={0.5}
                />
                {isEmployee && (
                    <div style={{ position: 'absolute', top: '100px', left: '25px', zIndex: 50 }}>
                        <Avatar
                            avatarModal
                            border
                            name={title}
                            avatar={avatar}
                            width="150px"
                            height="150px"
                            marginRight="0"
                        />
                    </div>
                )}
                <Title align="left" size={3}>
                    {title}
                </Title>
            </Header>
            <Wrapper>
                <List minWidth="100%" direction="horizontal" showPages gap={20}>
                    {info.map(({ subtitle, attributes }) => (
                        <Content key={subtitle || title} padingLeft={isEmployee ? '145px' : '0'}>
                            {subtitle && <Subtitle>{subtitle}</Subtitle>}
                            {attributes.map(({ title, text }) => (
                                <InfoItem key={title} title={title}>
                                    {/* {title === 'Номер телефона' ? (
                                        <a href={`tel:${text}`}>{text}</a>
                                    ) : title === 'Электронная почта' ? (
                                        <a href={`mailto:${text}`}>{text}</a>
                                    ) : (
                                        text
                                    )} */}
                                    {text}
                                </InfoItem>
                            ))}
                        </Content>
                    ))}
                </List>
            </Wrapper>
            {isEmployee && (
                <Buttons>
                    <Link
                        to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                            page: 'current',
                            filter: title,
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
                    <Button
                        icon={<FiMessageCircle />}
                        text={'Написать'}
                        onClick={() => close()}
                        width="100%"
                        background="var(--theme-4)"
                        isActive={false}
                    />
                </Buttons>
            )}
        </Flex>
    )
}
