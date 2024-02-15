import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { NameSettings } from '@entities/settings/model'
import { CenterPage, Error, Title } from '@shared/ui/atoms'
import List from '@shared/ui/list'
import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Route, Switch, useRouteMatch } from 'react-router'
import styled from 'styled-components'
import { TFullSettingsModel } from './model'
import SettingsFields from './settings-fields'
import SettingsSection from './settings-section'

const SettingsContentWrapper = styled.div<{ open: boolean }>`
    width: 100%;
    flex-direction: column;
    display: flex;
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -6px;
        top: -70px;
        height: calc(100% + 90px);
        width: 1px;
        background: var(--almostTransparentOpposite);
    }

    @media (max-width: 768px) {
        &::before {
            display: none;
        }

        display: ${({ open }) => (open ? 'flex' : 'none')};
    }
`

const SettingsContentStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`

const TitleWrapper = styled.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`

type Props = {
    settingsConfig: TFullSettingsModel
}

const SettingsContent = ({ settingsConfig }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }

    if (!allRoutes) return null

    if (settingsConfig === undefined) {
        return null
    }

    return (
        <SettingsContentWrapper open={!!params?.id}>
            <SettingsContentStyled>
                <Switch>
                    {Object.keys(settingsConfig ?? {})?.map((name) => {
                        const sections = settingsConfig[name as keyof typeof settingsConfig]
                        const { path } = allRoutes[name]
                        return (
                            <Route path={path} key={path}>
                                <List direction="vertical" gap={12}>
                                    {sections.map(({ title, fields }) => {
                                        return (
                                            <SettingsSection key={title}>
                                                <TitleWrapper>
                                                    <Title size={4} align="left">
                                                        {title}
                                                    </Title>
                                                </TitleWrapper>
                                                <SettingsFields fields={fields} settingsName={name as NameSettings} />
                                            </SettingsSection>
                                        )
                                    })}
                                </List>
                            </Route>
                        )
                    })}
                    <Route path={'/'}>
                        <CenterPage height="100%">
                            <Error text="Ничего не выбрано" image={<FiSettings />} size="60px" />
                        </CenterPage>
                    </Route>
                </Switch>
            </SettingsContentStyled>
        </SettingsContentWrapper>
    )
}

export default SettingsContent
