import { menuModel } from '@entities/menu'
import { userSettingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import { addPageToSidebar, deletePageFromSidebar } from '@features/all-pages/model'
import CustomizeMenu from '@features/customize-menu'
import { REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import AddedElementsList, { FilterElementList } from '@shared/ui/added-elements-list'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'
import { useModal } from 'widgets'
import { TITLE_CONFIG } from '../constants'

const MenuSettings = () => {
    const [settings, menu] = useUnit([userSettingsModel.stores.userSettings, menuModel.stores.menu])
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const list = settings?.customizeMenu.pages.reduce(
        (prev, curr) => ({ ...prev, [curr]: menu.allRoutes?.[curr] }),
        {},
    ) as FilterElementList

    const requiredLeftsideBarItems =
        user?.user_status === 'staff' ? REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG : REQUIRED_LEFTSIDE_BAR_CONFIG

    return (
        <>
            <Title {...TITLE_CONFIG}>Разделы меню</Title>
            <AddedElementsList
                padding="0 10px 10px 10px"
                list={list}
                onRemoveOne={(id) => {
                    deletePageFromSidebar({ pageId: id })
                }}
                onAddElement={() => {
                    open(
                        <CustomizeMenu
                            enabledListStore={menuModel.stores.leftSidebar}
                            requiredList={requiredLeftsideBarItems}
                            remove={(pageId) => deletePageFromSidebar({ pageId })}
                            add={(pageId) => addPageToSidebar({ pageId })}
                        />,
                        'Настройка меню',
                    )
                }}
            />
        </>
    )
}

export default MenuSettings
