import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import Flex from '@shared/ui/flex'
import { SkeletonShape } from '@ui/skeleton-shape'
import React from 'react'
import { useLocation } from 'react-router'
import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'
import LeftsideBarItem from '../molecules/leftside-bar-item'
import { useUnit } from 'effector-react'

const LeftsideBarList = () => {
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
        <LeftsideBarListWrapper>
            {Object.values(leftsideBarRoutes)
                .filter(Boolean)
                .map((props: IRoute) => {
                    const escapedRoute = props.path.replace(/[^\w]/g, '\\$&')
                    const routePattern = new RegExp(`^${escapedRoute}([\\/\\?#].*)?$`)
                    return (
                        <LeftsideBarItem {...props} key={props?.id} isCurrent={routePattern.test(location.pathname)} />
                    )
                })}
        </LeftsideBarListWrapper>
    )
}

export default React.memo(LeftsideBarList)
