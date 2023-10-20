import { IRoutes } from '@app/routes/general-routes'
import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'
import Flex from '@shared/ui/flex'
import { MenuItem } from '@shared/ui/menu-item'
import { Title } from '@shared/ui/title'
import { Align } from '@ui/types'
import React from 'react'
import { PageLinkProps } from '../../../all-pages/ui/molecules/page-link'

type Props = Pick<PageLinkProps, 'orientation' | 'shadow' | 'mode' | 'background'> & {
    links: IRoutes
    title?: string
    align?: Align
    doNotShow?: string
    wrapOnMobile?: boolean
}

const LinksList = ({ title, links, doNotShow, orientation }: Props) => {
    return (
        <Flex d="column">
            <Title size={4} align="left" bottomGap>
                {title}
            </Title>
            <Flex gap="8px" $wrap>
                {Object.values(links).map((el) => {
                    if (el?.show !== false && doNotShow !== el?.id)
                        return (
                            <MenuItem
                                type={orientation}
                                key={el.id}
                                {...el}
                                color={el.color.length ? el.color : 'blue'}
                            />
                        )
                })}
                {doNotShow !== 'all' && <AllPagesLink />}
            </Flex>
        </Flex>
    )
}

export default LinksList
