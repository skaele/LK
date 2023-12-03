import { IRoute } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'
import { userSettingsModel } from '@entities/settings'
import { addPageToHome, addPageToSidebar, deletePageFromHome, deletePageFromSidebar } from '@features/all-pages/model'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import { useUnit } from 'effector-react'
import React from 'react'
import { FiPlus, FiXCircle } from 'react-icons/fi'
import styled from 'styled-components'
import Icon from '../all-pages/ui/atoms/icon'

const ContextContent = (props: IRoute) => {
    const { id, icon, title, color } = props
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const isAddedToHome = settings?.homePage.pages.includes(id)
    const isAddedToMenu = settings?.customizeMenu.pages.includes(id)

    const handleAddToHome = () => {
        addPageToHome({ pageId: id })
        contextMenuModel.events.close()
    }

    const handleAddToMenu = () => {
        addPageToSidebar({ pageId: id })
        contextMenuModel.events.close()
    }

    return (
        <ContextContentWrapper>
            <div className="top">
                <Icon color={color} size={22}>
                    {icon}
                </Icon>
                <PageName>{title}</PageName>
            </div>
            <Divider />
            {isAddedToHome ? (
                <Button
                    text="Убрать с главной"
                    icon={<FiXCircle />}
                    width="100%"
                    align="left"
                    background="var(--block)"
                    onClick={() => {
                        deletePageFromHome({ pageId: id })
                        contextMenuModel.events.close()
                    }}
                />
            ) : (
                <Button
                    text="Добавить на главную"
                    icon={<FiPlus />}
                    width="100%"
                    align="left"
                    background="var(--block)"
                    onClick={handleAddToHome}
                />
            )}
            {!isAddedToMenu ? (
                <Button
                    text="Добавить в меню"
                    icon={<FiPlus />}
                    width="100%"
                    align="left"
                    background="var(--block)"
                    onClick={handleAddToMenu}
                />
            ) : (
                <Button
                    text="Убрать из меню"
                    icon={<FiXCircle />}
                    width="100%"
                    align="left"
                    background="var(--block)"
                    onClick={() => deletePageFromSidebar({ pageId: id })}
                />
            )}
        </ContextContentWrapper>
    )
}

export default ContextContent

const ContextContentWrapper = styled.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`

const PageName = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`
