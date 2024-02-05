import { SCHEDULE_CURRENT_ROUTE, scheduleRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { scheduleModel } from '@entities/schedule'
import { SESSION_VIEWS, VIEWS } from '@entities/schedule/consts'
import { ErrorIconIndicator } from '@shared/ui/error-icon-indicator'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { Button, Wrapper } from '@ui/atoms'
import React from 'react'
import { FiMenu, FiSidebar } from 'react-icons/fi'
import { Redirect, Route, Switch } from 'react-router'
import { Slider } from 'widgets'
import useSchedule from './hooks/use-schedule'
import { SideMenu } from './ui/side-menu'
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi'
import Subtext from '@shared/ui/subtext'

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
        scaleValue,
        onHintClick,
        handleValue,
        handleReturnToMySchedule,
        handleLoad,
        handleOpenSideMenu,
        handleErrorClick,
        handleScaleMinus,
        handleScalePlus,
        handleResetScale,
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
                    <Flex w="fit-content" gap="10px">
                        {<ErrorIconIndicator visible={!!errorInData} onClick={handleErrorClick} />}
                        {shouldShowSlider && (
                            <Flex gap="4px">
                                {scaleValue !== '100%' && (
                                    <Button
                                        onClick={handleResetScale}
                                        background="var(--block)"
                                        height="30px"
                                        textColor="grey"
                                        text="Сбросить"
                                    />
                                )}
                                <Button
                                    onClick={handleScaleMinus}
                                    background="var(--block)"
                                    width="30px"
                                    height="30px"
                                    icon={<HiOutlineMinus />}
                                />
                                <Subtext>{scaleValue}</Subtext>
                                <Button
                                    onClick={handleScalePlus}
                                    background="var(--block)"
                                    width="30px"
                                    height="30px"
                                    icon={<HiOutlinePlus />}
                                />
                            </Flex>
                        )}
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
                                const { path, id, Component } = scheduleRoutes[key]
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
