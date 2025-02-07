import styled from 'styled-components'
<<<<<<<< HEAD:src/features/schedule/ui/calendar/ui/wrapper.ts
========

import { MEDIA_QUERIES } from '@shared/constants'
import Flex from '@shared/ui/flex'
>>>>>>>> master:src/shared/ui/calendar/ui/wrapper.ts

import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'

export const Wrapper = styled(Flex)`
    --time-width: 55px;

    ${MEDIA_QUERIES.isMobile} {
        --time-width: 35px;
    }
`
