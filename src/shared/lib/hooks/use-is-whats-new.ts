import { useEffect, useState } from 'react'

import { tutorialModel } from '@entities/tutorial'
import { userModel } from '@entities/user'
import { LastUpdateWhatsNew } from '@shared/constants'
import { useUnit } from 'effector-react'

const useIsShowWhatsNew = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [heroVisited, tutorialState] = useUnit([tutorialModel.stores.heroVisited, tutorialModel.stores.tutorialState])
    const [isShowNotification, setIsShowNotification] = useState<boolean>(false)

    const checkingShowNotification = (lastAccess: string) => {
        const lastLocalAccess = localStorage.getItem('lastLocalAccess') || lastAccess
        const UpdateWhatsNewDate = new Date(LastUpdateWhatsNew)
        if (
            new Date(lastAccess) < UpdateWhatsNewDate &&
            new Date(lastLocalAccess) < UpdateWhatsNewDate &&
            (heroVisited || tutorialState)
        ) {
            localStorage.setItem('lastLocalAccess', new Date().toISOString())
            setIsShowNotification(true)
        }
    }

    useEffect(() => {
        if (!!user) {
            checkingShowNotification(user.lastaccess)
        }
    }, [user])

    return isShowNotification
}

export default useIsShowWhatsNew
