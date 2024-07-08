import { TEMPLATE_USEFUL_INFO_ROUTE, USEFUL_INFO_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import PageBlock from '@shared/ui/page-block'
import React, { useCallback, useMemo } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import { SliderPage } from 'widgets'
import pages from './config/pages-config'
import getPages from './lib/get-pages'
import { CenterPage } from '@shared/ui/atoms'
import { useUnit } from 'effector-react'

const HelpfulInformation = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const { replace } = useHistory()
    const params = useRouteMatch(TEMPLATE_USEFUL_INFO_ROUTE)?.params as { infoType: string | undefined }
    const { currentUser: user } = useUnit(userModel.stores.user)
    const isStaff = useMemo(() => user?.user_status === 'staff', [user])

    const sliderPages = useMemo(() => getPages(Object.values(pages), isStaff), [pages, isStaff])

    const sliderPageOnMount = useMemo(
        () => (params?.infoType ? sliderPages.findIndex(({ id }) => id === params.infoType) ?? 0 : 0),
        // Without dependencies to save value on mounting moment
        [],
    )

    const onChangeSliderPage = useCallback(
        (pageId: Nullable<string>) => {
            pageId && replace(`${allRoutes?.['helpful-information']?.path ?? USEFUL_INFO_ROUTE}/${pageId}`)
        },
        [allRoutes],
    )

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <SliderPage
                    pages={sliderPages}
                    currentPage={sliderPageOnMount}
                    onChangePage={onChangeSliderPage}
                    appearance={false}
                />
            </PageBlock>
        </CenterPage>
    )
}

export default HelpfulInformation
