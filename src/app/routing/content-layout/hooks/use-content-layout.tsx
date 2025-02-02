import React, { useEffect } from 'react'

import useIsShowWhatsNew from '@app/routing/content-layout/hooks/use-is-whats-new'

import WhatsNew from '@widgets/whats-new'

import useLkNotifications from '@entities/lk-notifications/hooks/use-lk-notifications'

import useCurrentExactPage from '@shared/routing/hooks/use-current-exact-page'
import { useModal } from '@shared/ui/modal'

const useContentLayout = () => {
    const currentPage = useCurrentExactPage()

    const { open } = useModal()
    const isShowWhatsNew = useIsShowWhatsNew()
    // const { seen } = useShowTutorial()

    useLkNotifications()

    useEffect(() => {
        if (isShowWhatsNew) {
            isShowWhatsNew && open(<WhatsNew />, 'Что нового')
        }
    }, [isShowWhatsNew])

    return { currentPage }
}

export default useContentLayout
