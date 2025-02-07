import React from 'react'
import { useLocation } from 'react-router'

import { useUnit } from 'effector-react'

import { menuModel } from '@entities/menu'

import { Page } from '@shared/routing'
import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import Flex from '@shared/ui/flex'
import { SkeletonShape } from '@shared/ui/skeleton-shape'
import { TutorialComponent } from '@shared/ui/types'

import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'
import LeftsideBarItem from '../molecules/leftside-bar-item'

const LeftsideBarList = ({ forwardedRef }: TutorialComponent) => {
    const leftsideBarRoutes = useUnit(menuModel.stores.leftSidebar)

    const location = useLocation()

    if (!leftsideBarRoutes)
        return (
            <Flex d="column">
                <Flex gap="8px">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '160px',
                            height: '18px',
                        }}
                    />
                </Flex>
                <Flex gap="8px">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '160px',
                            height: '18px',
                        }}
                    />
                </Flex>
                <Flex gap="8px">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '160px',
                            height: '18px',
                        }}
                    />
                </Flex>
                <Flex gap="8px">
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '160px',
                            height: '18px',
                        }}
                    />
                </Flex>
            </Flex>
        )

    return (
        <LeftsideBarListWrapper ref={forwardedRef}>
            {Object.values(leftsideBarRoutes)
                .filter(Boolean)
                .map((props: Page) => {
                    return (
                        <LeftsideBarItem
                            {...props}
                            key={props?.id}
                            isCurrent={location.pathname.includes(props.path)}
                        />
                    )
                })}
        </LeftsideBarListWrapper>
    )
}

export default React.memo(LeftsideBarList)
export const LeftSideBarListTutorial = withTutorial(LeftsideBarList)
