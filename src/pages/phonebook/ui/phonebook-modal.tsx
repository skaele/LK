import Flex from '@shared/ui/flex'
import React from 'react'
import { AvatarWrapper, Buttons, Content, Header, Subtitle, Wrapper } from '../styled'
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
import useCurrentDevice from '@shared/lib/hooks/use-current-device'

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
    const { isMobile } = useCurrentDevice()

    return (
        <Flex d="column">
            <Header isEmployee={!!isEmployee}>
                <UserHeaderBackground
                    fullName={title}
                    height="200px"
                    width="calc(100% + 16px)"
                    baseScale={1}
                    baseScaleDelta={0.5}
                />
                {isEmployee && (
                    <AvatarWrapper>
                        <Avatar
                            avatarModal
                            border
                            name={title}
                            avatar={avatar}
                            width={isMobile ? '110px' : '150px'}
                            height={isMobile ? '110px' : '150px'}
                            marginRight="0"
                        />
                    </AvatarWrapper>
                )}
                <b>{title}</b>
            </Header>
            <Wrapper>
                <List minWidth="100%" direction="horizontal" showPages gap={20}>
                    {info.map(({ subtitle, attributes }) => (
                        <Content key={subtitle || title} isEmployee={!!isEmployee}>
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
