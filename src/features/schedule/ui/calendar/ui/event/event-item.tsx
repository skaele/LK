import React, { memo, useMemo } from 'react'
import {
    HiOutlineCalendar,
    HiOutlineExternalLink,
    HiOutlineLogin,
    HiOutlineUserCircle,
    HiOutlineUserGroup,
} from 'react-icons/hi'

import { useUnit } from 'effector-react'

import { getSubjectName } from '@features/schedule/lib/get-subject-name'
import { NextSubject } from '@features/schedule/ui'
<<<<<<<< HEAD:src/features/schedule/ui/calendar/ui/event/event-item.tsx
import IconText from '@features/schedule/ui/calendar/calendars/day/ui/icon-text'
import { getTimeInterval } from '@features/schedule/ui/calendar/lib/get-time-interval'
========
>>>>>>>> master:src/shared/ui/calendar/ui/event/event-item.tsx
import { TimeIndicator } from '@features/schedule/ui/subject/time-indicator'

import { userSettingsModel } from '@entities/settings'

<<<<<<<< HEAD:src/features/schedule/ui/calendar/ui/event/event-item.tsx
import { DayCalendarEvent } from '@shared/api/model'
import { ThemeVariant } from '@shared/consts'
import calcTimeLeft from '@shared/lib/dates/calc-time-left'
import getShortString from '@shared/lib/get-short-string'
import { useCalcTimeLeft } from '@shared/lib/hooks/use-calc-time-left'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
========
import { ThemeVariant } from '@shared/constants'
import calcTimeLeft from '@shared/lib/dates/calc-time-left'
import getShortString from '@shared/lib/get-short-string'
import { useCalcTimeLeft } from '@shared/lib/hooks/use-calc-time-left'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { type DayCalendarEvent } from '@shared/ui/calendar'
import IconText from '@shared/ui/calendar/calendars/day/ui/icon-text'
import { getTimeInterval } from '@shared/ui/calendar/lib/get-time-interval'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Flex from '@shared/ui/flex'
>>>>>>>> master:src/shared/ui/calendar/ui/event/event-item.tsx

import { getEventTopPosition } from './lib/get-event-top-position'
import { EventFront, EventItemStyled, EventTitle, MobileIcon } from './styles'
import { UIProps } from './types'

type Props = DayCalendarEvent & UIProps & { isNextEvent?: boolean; isCurrentEvent?: boolean }

const EventItem = (props: Props) => {
    const {
        title,
        duration,
        icon,
        startTime,
        place,
        people,
        shift,
        color,
        scale,
        onClick,
        link,
        rooms,
        dateInterval,
        leftShift,
        quantity,
        groups,
        isCurrentEvent = false,
        nameInOneRow = true,
        isNextEvent = false,
        listView = false,
        shortInfo = false,
    } = props
    const settings = useUnit(userSettingsModel.stores.userSettings)

    const { isMobile } = useCurrentDevice()
    const textColor = settings?.appearance.theme === ThemeVariant.Light ? color.dark3 : color.light3
    const background = settings?.appearance.theme === ThemeVariant.Light ? color.transparent1 : color.transparent2
    const handleClick = () => onClick(props)
    const hideSomeInfo = (isMobile || quantity > 1) && shortInfo
    const extremeSmallSize = isMobile && quantity >= 2 && shortInfo
    const hasPeople = people && !!people.length && !!people[0]
    const shortNames = useMemo(() => {
        return hasPeople
            ? people.map((n) => {
                  const splitted = n.split(' ')
                  const result = `${splitted[0] ?? ''} ${splitted[1]?.[0] ?? ''}.${splitted[2]?.[0] ?? ''}.`

                  return result
              })
            : []
    }, [people])
    const top = getEventTopPosition(startTime, shift, scale)
    const normalizedTitle = getSubjectName(title)
    const eventTitle = !extremeSmallSize
        ? getShortString(normalizedTitle.name, shortInfo ? (hideSomeInfo ? 43 : 35) : nameInOneRow ? 300 : 64)
        : title.split(' ').map((el) => el[0].toUpperCase())
    const groupsArray = groups?.split(',') ?? []

    const timeLeft = useCalcTimeLeft(() => calcTimeLeft(startTime, 'minutes'))

    return (
        <EventItemStyled
            background={background}
            textColor={textColor}
            listView={listView}
            leftShift={100 * leftShift}
            quantity={100 / quantity}
            duration={duration}
            scale={scale}
            top={top}
            onClick={handleClick}
            shortInfo={shortInfo}
        >
            <MobileIcon>{icon}</MobileIcon>

            {/* {!listView && <EventBackground icon={icon} background={background} />} */}
            <Flex
                className="event-body"
                gap="0px"
                ai="flex-start"
                h={!hasPeople ? '100%' : undefined}
                mh={!hasPeople ? '100px' : undefined}
            >
                <EventFront
                    scale={scale}
                    d="column"
                    ai="flex-start"
                    shortInfo={shortInfo}
                    jc={!hasPeople ? 'space-between' : undefined}
                >
                    <Flex d="column" gap="2px">
                        {!shortInfo && (
                            <Flex gap="8px">
                                <TimeIndicator
                                    timeInterval={getTimeInterval(startTime, duration)}
                                    color={color}
                                    isCurrentEvent={isCurrentEvent}
                                />
                                <NextSubject
                                    timeLeft={timeLeft}
                                    isNext={isNextEvent}
                                    color={color}
                                    isCurrentEvent={isCurrentEvent}
                                />
                                {!!rooms?.length && (
                                    <IconText
                                        shortInfo={shortInfo}
                                        icon={isMobile && quantity > 1 ? undefined : <HiOutlineLogin />}
                                        text={<DotSeparatedWords words={rooms} />}
                                    />
                                )}
                                {(!!link || normalizedTitle.link) && (
                                    <a href={link ?? normalizedTitle.link} target="_blank" rel="noreferrer">
                                        <IconText
                                            shortInfo={shortInfo}
                                            icon={<HiOutlineExternalLink />}
                                            text={link ? place : 'Cсылка'}
                                        />
                                    </a>
                                )}
                                {!!groupsArray.length && (
                                    <IconText
                                        icon={<HiOutlineUserGroup />}
                                        text={<DotSeparatedWords words={groupsArray} />}
                                    />
                                )}
                            </Flex>
                        )}
                        <EventTitle listView={listView} nameInOneRow={nameInOneRow} scale={scale} shortInfo={shortInfo}>
                            {eventTitle}
                        </EventTitle>
                    </Flex>

                    {hasPeople && !hideSomeInfo && (
                        <IconText
                            shortInfo={shortInfo}
                            text={<DotSeparatedWords words={shortInfo ? [shortNames[0]] : shortNames} />}
                            icon={<HiOutlineUserCircle />}
                        />
                    )}

                    {!!rooms?.length && shortInfo && !hideSomeInfo && (
                        <IconText
                            shortInfo={shortInfo}
                            icon={<HiOutlineLogin />}
                            text={<DotSeparatedWords words={rooms} />}
                        />
                    )}
                    {!!link && shortInfo && !hideSomeInfo && (
                        <a href={link} target="_blank" rel="noreferrer">
                            <IconText shortInfo={shortInfo} icon={<HiOutlineExternalLink />} text={place} />
                        </a>
                    )}

                    {!!dateInterval && !hideSomeInfo && (
                        <Flex gap="5px">
                            <IconText shortInfo={shortInfo} icon={<HiOutlineCalendar />} text={dateInterval} />
                        </Flex>
                    )}
                </EventFront>
            </Flex>
        </EventItemStyled>
    )
}

export default memo(EventItem)
