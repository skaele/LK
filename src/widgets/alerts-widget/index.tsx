import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { alertModel } from '@entities/alert'

import { Colors } from '@shared/consts'
import { ALERTS_ROUTE } from '@shared/routing'
import { userModel } from '@shared/session'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import PlaneSkeletonList from '@shared/ui/plane-skeleton-list'
import { Title } from '@shared/ui/title'

import AlertItem from './alert-item'

const AlertsWidget = () => {
    const { preparedData, loading } = alertModel.selectors.useData()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const currentNews = preparedData?.[new Date().getFullYear()]?.slice(0, 3)
    const { isMobile } = useCurrentDevice()
    useEffect(() => {
        if (!preparedData) alertModel.effects.getFx()
    }, [])

    return (
        <Flex d="column">
            <Title size={4} bottomGap align="left">
                Последние новости
                <Link to={ALERTS_ROUTE}>
                    <Button
                        width="50px"
                        height="15px"
                        background={Colors.blue.transparent3}
                        textColor={Colors.blue.light1}
                        text="Ещё"
                    />
                </Link>
            </Title>
            <Flex gap="10px" d={isMobile ? 'column' : 'row'}>
                {loading && (
                    <Flex d="column" gap="8px">
                        <PlaneSkeletonList />
                        <PlaneSkeletonList />
                        <PlaneSkeletonList />
                    </Flex>
                )}
                {currentNews?.map((news, index) => (
                    <AlertItem
                        isNew={index === 0 && user?.hasAlerts}
                        news={news}
                        key={news.id}
                        orientation={isMobile ? 'horizontal' : 'vertical'}
                    />
                ))}
            </Flex>
        </Flex>
    )
}

export default AlertsWidget
