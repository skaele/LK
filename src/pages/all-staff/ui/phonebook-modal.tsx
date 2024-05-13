import Flex from '@shared/ui/flex'
import React from 'react'
import { AvatarWrapper, Buttons, Content, Header, LinkStyled, Subtitle, Title, Wrapper } from '../styled'
import { InfoItem } from '../info-item'
import UserHeaderBackground from '@shared/ui/user-header/user-header-background'
import { Link } from 'react-router-dom'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { ALL_TEACHERS_ROUTE, SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { FiClock, FiList, FiMessageCircle } from 'react-icons/fi'
import { Button } from '@shared/ui/button'
import { useModal } from 'widgets'
import List from '@shared/ui/list'
import Avatar from '@features/home/ui/molecules/avatar'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { getSubdivisionInfo } from '../lib/get-subdivision-info'
import { findSubdivisionByName } from '../lib/find-subdivision-by-name'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { findEmployeeByFio } from '../lib/find-employee-by-fio'
import { getEmployeeInfo } from '../lib/get-employee-info'
import styled from 'styled-components'

export type PhonebookInfo = {
    subdivision?: string
    post?: string
    attributes: { id?: 'email' | 'innerPhone' | 'mobile' | 'jobType' | 'head'; title: string; text: string }[]
}

export const PhonebookModal = ({
    title,
    info,
    isEmployee,
    avatar,
}: {
    title: string
    info: PhonebookInfo[]
    avatar?: string
    isEmployee?: boolean
}) => {
    const { open, close } = useModal()
    const { isMobile } = useCurrentDevice()
    const subdivisions = useUnit(phonebookModel.stores.subdivisions)

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
                <Title>{title}</Title>
            </Header>
            <Wrapper>
                <List key={title} minWidth="100%" direction="horizontal" showPages gap={20}>
                    {info.map(({ subdivision, post, attributes }) => {
                        const subtitle = subdivision && post
                        const jobType = attributes.find((attribute) => attribute.id === 'jobType')
                        return (
                            <Content
                                key={subtitle ? title + subtitle + jobType?.text : title}
                                isEmployee={!!isEmployee}
                            >
                                {subtitle && (
                                    <SubtitleStyled
                                        onClick={() => {
                                            close()

                                            if (!subdivisions) return
                                            const subdiv = findSubdivisionByName(subdivisions, subdivision)
                                            if (!subdiv) return
                                            open(
                                                <PhonebookModal
                                                    title={subdivision}
                                                    info={getSubdivisionInfo(subdiv)}
                                                />,
                                            )
                                        }}
                                    >
                                        {subdivision + ' • ' + post}
                                    </SubtitleStyled>
                                )}
                                {attributes.map(({ title, text, id }) => (
                                    <InfoItem key={title} title={title}>
                                        {text ? (
                                            id === 'email' ? (
                                                <a href={`mailto:${text}`}>{text}</a>
                                            ) : id === 'head' ? (
                                                <DivStyled
                                                    onClick={() => {
                                                        close()

                                                        if (!subdivisions) return
                                                        const employee = findEmployeeByFio(subdivisions, text)[0]
                                                        if (!employee) return
                                                        open(
                                                            <PhonebookModal
                                                                title={employee.fio}
                                                                info={getEmployeeInfo(employee)}
                                                                avatar={employee.avatar}
                                                                isEmployee
                                                            />,
                                                        )
                                                    }}
                                                >
                                                    {text}
                                                </DivStyled>
                                            ) : id === 'innerPhone' ? (
                                                text.split('; ').map((tel, i, arr) => (
                                                    <a key={tel} href={`tel:+7(495) 223-05-23,${tel}`}>
                                                        {i === arr.length - 1 ? tel : `${tel}; `}
                                                    </a>
                                                ))
                                            ) : id === 'mobile' ? (
                                                <a href={`tel:${text}`}>{text}</a>
                                            ) : (
                                                <>{text}</>
                                            )
                                        ) : (
                                            '-'
                                        )}
                                    </InfoItem>
                                ))}
                            </Content>
                        )
                    })}
                </List>
            </Wrapper>
            {isEmployee ? (
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
            ) : isMobile ? (
                <LinkStyled to={`${ALL_TEACHERS_ROUTE}/${title}`} onClick={close}>
                    <Button icon={<FiList />} width="100%" text="Список" />
                </LinkStyled>
            ) : null}
        </Flex>
    )
}

const SubtitleStyled = styled(Subtitle)`
    cursor: pointer;
`

const DivStyled = styled.div`
    cursor: pointer;
`
