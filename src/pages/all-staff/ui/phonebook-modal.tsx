import React from 'react'
import { FiClock, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { ALL_TEACHERS_ROUTE, SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { phonebookModel } from '@entities/phonebook'
import Avatar from '@features/home/ui/molecules/avatar'
import { SendMessage } from '@features/send-first-message'
import { SiteName } from '@pages/teachers-applications/pages/contact-details/lib/get-form'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import List from '@shared/ui/list'
import UserHeaderBackground from '@shared/ui/user-header/user-header-background'
import { useUnit } from 'effector-react'
import styled from 'styled-components'
import { useModal } from 'widgets'

import { InfoItem } from '../info-item'
import { findEmployeeByFio } from '../lib/find-employee-by-fio'
import { findSubdivisionByName } from '../lib/find-subdivision-by-name'
import { getEmployeeInfo } from '../lib/get-employee-info'
import { getSubdivisionInfo } from '../lib/get-subdivision-info'
import { AvatarWrapper, Buttons, Content, Header, LinkStyled, Subtitle, Title, Wrapper } from '../styled'
import { PlaceModal } from './place-modal'

export type PhonebookInfo = {
    subdivision?: string
    post?: string
    attributes: {
        id?: 'email' | 'innerPhone' | 'mobile' | 'jobType' | 'head' | 'address'
        title: string
        text: string
    }[]
}

// TODO: make two separate components for divisions and employees
export const PhonebookModal = ({
    title,
    info,
    isEmployee,
    avatar,
    id,
}: {
    id?: number | string
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
                <UserHeaderBackground fullName={title} height="200px" width="100%" baseScale={1} baseScaleDelta={0.5} />
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
                                            ) : id === 'address' ? (
                                                <DivStyled
                                                    onClick={() => {
                                                        close()

                                                        open(<PlaceModal place={text as SiteName} />, text)
                                                    }}
                                                >
                                                    {text}
                                                </DivStyled>
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

                    <SendMessage avatar={avatar} fio={title} status="staff" userId={id?.toString()} />
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
