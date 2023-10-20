import { CenterPage } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import React from 'react'
import useSettings from './hooks/use-settings'
import SettingsContent from './settings-content'
import ListOfSettings from './ui/list-of-settings'

const SettingsPage = () => {
    const fullSettings = useSettings()
    if (fullSettings === null) return null

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Flex ai="stretch">
                    <ListOfSettings settingsConfig={fullSettings} />
                    <SettingsContent settingsConfig={fullSettings} />
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

export default SettingsPage
