import styled from 'styled-components'

import { MEDIA_QUERIES } from '@shared/ui/consts'
import Flex from '@shared/ui/flex'

export const Wrapper = styled(Flex)`
    --time-width: 55px;

    ${MEDIA_QUERIES.isMobile} {
        --time-width: 35px;
    }
`
