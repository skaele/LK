import styled from 'styled-components'

<<<<<<<< HEAD:src/features/schedule/ui/calendar/calendars/week/styles.ts
import { MEDIA_QUERIES } from '@shared/ui/consts'

import { CALENDAR_HEIGHT_DESKTOP, CALENDAR_HEIGHT_MOBILE, CALENDAR_HEIGHT_TABLET } from '../../consts'
import { Wrapper } from '../../ui/wrapper'
========
import { CALENDAR_HEIGHT_DESKTOP, CALENDAR_HEIGHT_MOBILE, CALENDAR_HEIGHT_TABLET } from '@pages/schedule/consts'
>>>>>>>> master:src/shared/ui/calendar/calendars/week/styles.ts

import { MEDIA_QUERIES } from '@shared/constants'

import { Wrapper } from '../../ui/wrapper'

export const WeekCalendarWrapper = styled(Wrapper)`
    height: ${CALENDAR_HEIGHT_DESKTOP};
    position: relative;

    ${MEDIA_QUERIES.isTablet} {
        height: ${CALENDAR_HEIGHT_TABLET};
    }

    ${MEDIA_QUERIES.isMobile} {
        height: ${CALENDAR_HEIGHT_MOBILE};
    }
`
