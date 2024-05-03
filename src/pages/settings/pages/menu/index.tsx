import { menuModel } from '@entities/menu'
import { userSettingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import { addPageToSidebar, deletePageFromSidebar } from '@features/all-pages/model'
import CustomizeMenu from '@features/customize-menu'
import AddedElementsList, { FilterElementList } from '@shared/ui/added-elements-list'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'
import { useModal } from 'widgets'
import { TITLE_CONFIG } from '../constants'

const MenuSettings = () => {
    const [settings, menu, requiredList] = useUnit([
        userSettingsModel.stores.userSettings,
        menuModel.stores.menu,
        userModel.stores.requiredSidebarItems,
    ])

    const { open } = useModal()
    const list = settings?.customizeMenu.pages
        .filter((route) => !requiredList.includes(route))
        .reduce((prev, curr) => ({ ...prev, [curr]: menu.allRoutes?.[curr] }), {}) as FilterElementList

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
                            requiredListStore={userModel.stores.requiredSidebarItems}
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
