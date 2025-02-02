import React from 'react'
import { BiNews } from 'react-icons/bi'

import styled from 'styled-components'

import { Alert } from '@shared/api/model/alert'
import localizeDate from '@shared/lib/dates/localize-date'
import getShortStirng from '@shared/lib/get-short-string'
import { Divider } from '@shared/ui/divider'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import { useModal } from '@shared/ui/modal'
import Subtext from '@shared/ui/subtext'
import { Direction } from '@shared/ui/types'

import getImageURLFromContent from './lib/get-image-url-from-content'
import { AlertContent, AlertItemBadge, AlertItemStyled, AlertTitle, Image } from './styles'

interface AlertModalProps {
    alert: Alert
}

const AlertModal: React.FC<AlertModalProps> = ({ alert }) => {
    const { content, time, date } = alert
    return (
        <Wrapper>
            <Subtext fontSize="0.9rem">
                <DotSeparatedWords words={[localizeDate(date), time]} />
            </Subtext>
            <Divider width="100%" margin="12px 0" />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 600px;

    & > div {
        width: 100%;

        p {
            margin-top: 10px;
            width: 100%;
            opacity: 0.9;
            line-height: 1.7rem;
        }

        a {
            text-decoration: underline;
        }

        strong {
            font-weight: 600;
        }

        p:nth-child(1) {
            margin: 0;
            opacity: 1;
            text-align: left !important;
        }

        span {
            font-size: 1rem !important;
        }

        img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
            border-radius: var(--brLight);
            margin-bottom: 20px;
            box-shadow: var(--block-content-shadow);
        }
    }
`

type Props = {
    news: Alert
    orientation?: Direction
    isNew?: boolean
}

const AlertItem = ({ news, orientation = 'vertical', isNew = false }: Props) => {
    const cover = getImageURLFromContent(news.content)
    const { open } = useModal()
    const handleOpenModal = () => open(<AlertModal alert={news} />, news.title)

    return (
        <AlertItemStyled onClick={handleOpenModal} orientation={orientation}>
            <Image orientation={orientation}>{cover ? <img src={cover} alt="" /> : <BiNews />}</Image>
            <AlertContent orientation={orientation}>
                <AlertTitle orientation={orientation}>
                    {orientation === 'vertical' ? getShortStirng(news.title, 38) : news.title}
                </AlertTitle>

                <Subtext>
                    <DotSeparatedWords words={[localizeDate(news.date), news.time]} />
                </Subtext>
            </AlertContent>
            <AlertItemBadge visible={isNew}>New</AlertItemBadge>
        </AlertItemStyled>
    )
}

export default AlertItem
