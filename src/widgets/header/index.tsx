import React from 'react'

import { IRoute } from '@app/routes/general-routes'

import UserInfo from '@features/user-info'

import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Flex from '@shared/ui/flex'

import { HeaderWrapper } from './ui'
import { HeaderTitle } from './ui/atoms/header-wrapper'
import useHeader from './use-header'

type Props = {
    currentPage: IRoute | null
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
