import React from 'react'

import { PageLink } from '@features/all-pages'

import { menuModel } from '@entities/menu'

import { Page } from '@shared/routing'
import Flex from '@shared/ui/flex'

export const LinkList = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    if (!allRoutes) return null

    const links: Page[] = [
        allRoutes['structure-of-the-university'],
        allRoutes['social-environment'],
        allRoutes['psychological-help'],
        allRoutes['health-care'],
        allRoutes['wifi-at-the-university'],
        allRoutes['brandbook'],
        allRoutes['addresses-and-contacts'],
    ]
    return (
        <Flex gap="8px" $wrap>
            {links.map((el) => {
                return <PageLink key={el.id} {...el} />
            })}
        </Flex>
    )
}
