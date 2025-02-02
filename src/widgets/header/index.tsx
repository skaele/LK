import React from 'react'

import UserInfo from '@widgets/user-info'

import { Page } from '@shared/routing'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'

import { HeaderWrapper } from './ui'
import { HeaderTitle } from './ui/atoms/header-wrapper'
import useHeader from './use-header'

type Props = {
    currentPage: Page | null
    headerVisible?: boolean
    noTitle?: boolean
}

const Header: React.FC<Props> = ({ currentPage, headerVisible = false, noTitle = false }) => {
    const { isMobile, isTablet } = useCurrentDevice()

    const { headerTitle, backButton, isHeaderVisible, maxWidth } = useHeader({
        currentPage,
        headerVisible,
    })

    if (currentPage?.withoutHeader) return null

    return (
        <HeaderWrapper headerVisible={isHeaderVisible} hidden={(currentPage ?? currentPage)?.withoutHeader}>
            <HeaderTitle maxWidth={maxWidth} noButton={currentPage?.withoutBackButton} headerVisible={isHeaderVisible}>
                {!noTitle && headerTitle}
            </HeaderTitle>
            <Flex jc="space-between" mw={maxWidth}>
                <div className="back-button-wrapper">{backButton ?? <div />}</div>

                {(isMobile || isTablet) && <UserInfo showSearch />}
            </Flex>
        </HeaderWrapper>
    )
}

export default React.memo(Header)
