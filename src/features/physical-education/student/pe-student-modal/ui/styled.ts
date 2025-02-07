import styled from 'styled-components'

import { MEDIA_QUERIES } from '@shared/constants'

export const Visits = styled.div`
    min-height: 50px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`

export const PEStudentModalWrapper = styled.div`
    ${MEDIA_QUERIES.isNotMobile} {
        width: 500px;
    }
`
