import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import Flex from '@shared/ui/flex'
import { LinkItem } from '@shared/ui/link-item'
import { SkeletonShape } from '@ui/skeleton-shape'
import React from 'react'
import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'

const LeftsideBarList = () => {
    const { leftsideBarRoutes } = menuModel.selectors.useMenu()

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
                .filter((el) => el !== undefined)
                .map((props: IRoute) => {
                    return <LinkItem showFullTitle={false} type="horizontal" keywords={[]} {...props} key={props.id} />
                })}
        </LeftsideBarListWrapper>
    )
}

export default React.memo(LeftsideBarList)
