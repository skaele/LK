import { menuModel } from '@entities/menu'
import { userSettingsModel } from '@entities/settings'
import { addPageToHome, deletePageFromHome } from '@features/all-pages/model'
import CustomizeMenu from '@features/customize-menu'
import AddedElementsList, { FilterElementList } from '@shared/ui/added-elements-list'
import { Title } from '@shared/ui/title'
import ToggleItem from '@shared/ui/toggle-item'
import { useUnit } from 'effector-react'
import React from 'react'
import { useModal } from 'widgets'
import { TITLE_CONFIG } from '../constants'
import { setHomePageWidgetView } from './model'
import { Wrapper } from '../styled'

const MainPageSettings = () => {
    const [settings, menu] = useUnit([userSettingsModel.stores.userSettings, menuModel.stores.menu])
    const { open } = useModal()
    const list = settings?.homePage.pages.reduce(
        (prev, curr) => ({ ...prev, [curr]: menu.allRoutes?.[curr] }),
        {},
    ) as FilterElementList

    return (
        <Wrapper>
            <div>
                <Title {...TITLE_CONFIG}>Разделы домашней страницы</Title>
                <AddedElementsList
                    padding="0 10px 10px 10px"
                    list={list}
                    onRemoveOne={(id) => {
                        deletePageFromHome({ pageId: id })
                    }}
                    onAddElement={() => {
                        open(
                            <CustomizeMenu
                                enabledListStore={menuModel.stores.homeRoutes}
                                requiredList={[]}
                                remove={(pageId) => deletePageFromHome({ pageId })}
                                add={(pageId) => addPageToHome({ pageId })}
                            />,
                            'Разделы домашней страницы',
                        )
                    }}
                />
            </div>
            <div>
                <Title {...TITLE_CONFIG} bottomGap={'4px'}>
                    Виджеты
                </Title>
                <ToggleItem
                    title="Новости"
                    action={(state) => {
                        setHomePageWidgetView({ hasNews: state })
                    }}
                    state={Boolean(settings?.homePage.hasNews)}
                />
                <ToggleItem
                    title="Оплаты"
                    action={(state) => setHomePageWidgetView({ hasPayment: state })}
                    state={Boolean(settings?.homePage.hasPayment)}
                />
                <ToggleItem
                    title="Расписание"
                    action={(state) => {
                        setHomePageWidgetView({ hasSchedule: state })
                    }}
                    state={Boolean(settings?.homePage.hasSchedule)}
                />
            </div>
        </Wrapper>
    )
}

export default MainPageSettings
