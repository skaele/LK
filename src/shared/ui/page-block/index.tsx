import React, { ForwardedRef, forwardRef } from 'react'

import styled from 'styled-components'

import useCurrentExactPage from '@shared/routing/hooks/use-current-exact-page'
import { MEDIA_QUERIES } from '@shared/ui/consts'

import { CenterPage } from '../atoms'
import BlockWrapper from '../block/styles'
import { getPageWidth } from './lib/get-page-width'

const PageBlockStyled = styled(BlockWrapper)<{ titleLen: number; hasCenterEl: boolean }>`
    position: relative;

    ${MEDIA_QUERIES.isNotMobile} {
        padding-top: ${({ titleLen }) => (titleLen === 0 ? '20px' : titleLen < 60 ? '70px' : '140px')};
    }

    ${MEDIA_QUERIES.isMobile} {
        padding-top: ${({ hasCenterEl }) => (hasCenterEl ? '90px' : '45px')};
    }
`

const TopRightCornerElement = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${MEDIA_QUERIES.isMobile} {
        top: -4px;
        right: 7px;
    }
`

const TopCenterElement = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${MEDIA_QUERIES.isMobile} {
        top: 40px;
    }
`

type Props = {
    children: ChildrenType
    topRightCornerElement?: ChildrenType
    topCenterElement?: ChildrenType
    padding?: string
    outerPadding?: string
    height?: string
}

const PageBlock = forwardRef(
    (
        { children, topRightCornerElement, topCenterElement, padding, outerPadding, height }: Props,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const currentPage = useCurrentExactPage()
        const maxWidth = getPageWidth(currentPage?.pageSize)

        return (
            <CenterPage padding={outerPadding ?? '0 0 10px 0'} height={height}>
                <PageBlockStyled
                    hasCenterEl={!!topCenterElement}
                    titleLen={currentPage?.subPageHeaderTitle?.length ?? currentPage?.title?.length ?? 0}
                    justifyContent="flex-start"
                    height="100%"
                    orientation="vertical"
                    maxWidth={maxWidth}
                    gap="24px"
                    ref={ref}
                    alignItems="flex-start"
                    noAppearanceInMobile
                    padding={padding}
                >
                    {topRightCornerElement && <TopRightCornerElement>{topRightCornerElement}</TopRightCornerElement>}
                    {topCenterElement && <TopCenterElement>{topCenterElement}</TopCenterElement>}
                    {children}
                </PageBlockStyled>
            </CenterPage>
        )
    },
)

PageBlock.displayName = 'PageBlock'

export default PageBlock
