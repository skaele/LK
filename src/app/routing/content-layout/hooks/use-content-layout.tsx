import React, { useEffect } from 'react'

<<<<<<<< HEAD:src/app/routing/content-layout/hooks/use-content-layout.tsx
import useIsShowWhatsNew from '@app/routing/content-layout/hooks/use-is-whats-new'

import WhatsNew from '@widgets/whats-new'

import useLkNotifications from '@entities/lk-notifications/hooks/use-lk-notifications'

import useCurrentExactPage from '@shared/routing/hooks/use-current-exact-page'
import { useModal } from '@shared/ui/modal'
========
import { WhatsNew } from 'widgets'
import useModal from 'widgets/modal'
>>>>>>>> master:src/widgets/content-layout/hooks/use-content-layout.tsx

import useLkNotifications from '@entities/lk-notifications/hooks/use-lk-notifications'

import useCurrentExactPage from '@shared/lib/hooks/use-current-exact-page'
import useIsShowWhatsNew from '@shared/lib/hooks/use-is-whats-new'

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
