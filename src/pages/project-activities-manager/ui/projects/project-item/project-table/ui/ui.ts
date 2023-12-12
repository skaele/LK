import styled, { css } from 'styled-components'
import { Colors, MEDIA_QUERIES } from '@shared/constants'
import Flex from '@ui/flex'
import ToggleItem from '@ui/toggle-item'
import { Loading } from '@ui/loading'

export const FIO = styled.span<{ expelled: boolean }>`
    ${({ expelled }) =>
        expelled &&
        css`
            color: ${Colors.red.main};
        `}
`

export const Email = styled.span`
    overflow: visible;
    word-wrap: break-word;
`

export const ToggleContainer = styled(Flex)`
    width: 280px;

    ${MEDIA_QUERIES.isTablet} {
        width: 200px;
    }
`

export const StyledToggle = styled(ToggleItem)`
    // && — to higher specificity
    && > label b {
        white-space: normal;
    }
`

export const TableContainer = styled.div`
    width: 100%;
    overflow: auto;
    display: flex;
`

export const StyledLoader = styled(Loading)`
    margin-left: 16px;
`
