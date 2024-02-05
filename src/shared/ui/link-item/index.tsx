import { contextMenuModel } from '@entities/context-menu'
import { ContextContent } from '@features/all-pages'
import { Colors } from '@shared/constants'
import getShortStirng from '@shared/lib/get-short-string'
import useTheme from '@shared/lib/hooks/use-theme'
import React from 'react'
import { HiOutlineArrowCircleLeft, HiOutlineDotsVertical, HiOutlineExternalLink } from 'react-icons/hi'
import { useLocation } from 'react-router'
import Badge from '../badge'
import Checkbox from '../checkbox'
import Flex from '../flex'
import Subtext from '../subtext'
import {
    AdminPageIndication,
    Icon,
    ItemTitle,
    LinkIcon,
    LinkItemLink,
    LinkItemStyled,
    MoreIcon,
    NewPageIndication,
    NotificationBadge,
} from './styles'
import { LinkItemProps } from './types'
import { Link } from 'react-router-dom'

export const LinkItem = (props: LinkItemProps) => {
    const {
        id,
        path,
        menuPath,
        title,
        icon,
        chosen,
        color,
        isOldLkPage,
        isExternalPage,
        isAdmin,
        subtext,
        isNew,
        notifications,
        onChoose,
        onClick,
        isOpenInNewWindow,
        collapsed,
        height,
        minWidth,
        as,
        smallInMobile = false,
        showMore = true,
        showBoxShadow = true,
        textIconGap = '12px',
        type = 'horizontal',
        disabled = false,
        showCurrent = true,
        showFullTitle = true,
    } = props
    const to = menuPath ?? path
    const location = useLocation()
    const { theme } = useTheme()

    const isCurrentRoute = showCurrent ? location.pathname.includes(to) : false
    const textColor = isCurrentRoute ? (theme === 'light' ? Colors[color].dark3 : Colors[color].light3) : 'var(--text)'
    const isHorizontal = type === 'horizontal'
    const background = isCurrentRoute
        ? Colors[color].transparent3
        : isHorizontal
        ? 'var(--block)'
        : `var(--block-content)`
    const direction = isHorizontal ? 'row' : 'column'
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        onClick?.(e)
        if (onChoose) {
            e.preventDefault()
            if (!disabled) onChoose(id)
        }
    }
    const itemTitle = isHorizontal ? title : getShortStirng(title, 50)
    const showTopIcon = isOldLkPage || isExternalPage
    const isDoubleSize = title.length > 27

    const handleClickMore: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        contextMenuModel.events.open({
            e,
            height: 105,
            content: <ContextContent {...props} />,
        })
    }

    return (
        <LinkItemLink
            as={as ?? (isExternalPage ? 'a' : Link)}
            href={to}
            isDoubleSize={isDoubleSize}
            to={to}
            target={isOpenInNewWindow ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={handleClick}
            orientation={type}
        >
            <LinkItemStyled
                showBoxShadow={showBoxShadow}
                disabled={disabled}
                background={background}
                color={textColor}
                type={type}
                height={height}
                minWidth={minWidth}
                smallInMobile={smallInMobile}
            >
                {showTopIcon && (
                    <LinkIcon isHorizontal={isHorizontal}>
                        {isOldLkPage && <HiOutlineArrowCircleLeft title="Раздел в старом лк" />}
                        {isExternalPage && <HiOutlineExternalLink title="Раздел на внешнем ресурсе" />}
                    </LinkIcon>
                )}
                {showMore && chosen === undefined && !collapsed && (
                    <MoreIcon orientation={type} onClick={handleClickMore}>
                        <HiOutlineDotsVertical />
                    </MoreIcon>
                )}
                <Flex gap={textIconGap} d={direction}>
                    <Icon
                        smallInMobile={smallInMobile}
                        showBackground={type === 'vertical'}
                        pallete={Colors[color]}
                        theme={theme}
                    >
                        {icon}
                        <NotificationBadge visible={(notifications ?? 0) > 0 && type === 'vertical'}>
                            {notifications}
                        </NotificationBadge>
                    </Icon>
                    <Flex
                        w={isHorizontal ? 'calc(100% - 30px)' : '100%'}
                        d="column"
                        ai={isHorizontal ? 'flex-start' : 'center'}
                    >
                        {!collapsed && (
                            <ItemTitle
                                smallInMobile={smallInMobile}
                                showFullTitle={showFullTitle}
                                orientation={type}
                                dangerouslySetInnerHTML={{ __html: itemTitle }}
                            />
                        )}
                        <Subtext visible={!!subtext} fontSize="0.7rem">
                            {subtext}
                        </Subtext>
                    </Flex>
                </Flex>
                {isNew && <NewPageIndication orientation={type}>New</NewPageIndication>}
                {isAdmin && <AdminPageIndication orientation={type}>Admin</AdminPageIndication>}
                <Flex w="fit-content" gap="8px">
                    <Badge visible={(notifications ?? 0) > 0 && isHorizontal}>{notifications}</Badge>
                    {chosen !== undefined && onChoose && <Checkbox checked={chosen} setChecked={() => null} />}
                </Flex>
            </LinkItemStyled>
        </LinkItemLink>
    )
}
