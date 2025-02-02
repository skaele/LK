import React from 'react'
import { FiMenu, FiSidebar } from 'react-icons/fi'
import { Redirect, Route, Switch } from 'react-router'

import { schedulePages } from '@pages/routes'

import { menuModel } from '@entities/menu'
import { scheduleModel } from '@entities/schedule'
import { SESSION_VIEWS, VIEWS } from '@entities/schedule/consts'

import { SCHEDULE_CURRENT_ROUTE, scheduleRoutes } from '@shared/routing'
import { Button, Wrapper } from '@shared/ui/atoms'
import { ErrorIconIndicator } from '@shared/ui/error-icon-indicator'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import Slider from '@shared/ui/slider'

import useSchedule from './hooks/use-schedule'
import { SideMenu } from './ui/side-menu'

const Schedule = () => {
    const {
        data: { view, schedule, externalSchedule, errorInData },
        loading,
        error,
    } = scheduleModel.selectors.useSchedule()
    const { allRoutes } = menuModel.selectors.useMenu()
    const {
        isSideMenuOpen,
        shouldShowSlider,
        showMonth,
        baseSearchValue,
        isMobile,
        onHintClick,
        handleValue,
        handleReturnToMySchedule,
        handleLoad,
        handleOpenSideMenu,
        handleErrorClick,
    } = useSchedule()

    return (
        <Wrapper loading={loading} load={handleLoad} error={error} data={loading ? externalSchedule : schedule}>
            <PageBlock
                topCenterElement={
                    shouldShowSlider && (
                        <Slider
                            size="small"
                            sliderWidth="240px"
                            pages={showMonth ? SESSION_VIEWS : VIEWS}
                            currentPage={view}
                            appearance={!isMobile}
                            setCurrentPage={scheduleModel.events.changeView}
                        />
                    )
                }
                topRightCornerElement={
                    <Flex w="fit-content" gap="20px">
                        {<ErrorIconIndicator visible={!!errorInData} onClick={handleErrorClick} />}
                        <Button
                            icon={isMobile ? <FiMenu /> : <FiSidebar />}
                            width="36px"
                            height="36px"
                            onClick={handleOpenSideMenu}
                        />
                    </Flex>
                }
            >
                {allRoutes && (
                    <Flex gap="16px" ai="flex-start">
                        {!isMobile && (
                            <SideMenu
                                isSideMenuOpen={isSideMenuOpen}
                                baseSearchValue={baseSearchValue}
                                handleReturnToMySchedule={handleReturnToMySchedule}
                                onHintClick={onHintClick}
                                handleValue={handleValue}
                            />
                        )}
                        <Switch>
                            {Object.keys(scheduleRoutes ?? {}).map((key) => {
                                const { path, id } = scheduleRoutes[key]
                                const Component = schedulePages[id]
                                return (
                                    <Route key={id} path={path}>
                                        {<Component />}
                                    </Route>
                                )
                            })}
                            <Redirect to={SCHEDULE_CURRENT_ROUTE} />
                        </Switch>
                    </Flex>
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default Schedule
