import { LinkButton } from '@shared/ui/atoms'
import Card from '@shared/ui/card'
import List from '@shared/ui/list'
import Subtext from '@shared/ui/subtext'
import React from 'react'

const calendarUrls = {
    fiveWorkDays:
        'https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_pyatidnevnoj_rabochej_nedeli.pdf',
    sixWorkDays:
        'https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2024_god_dlya_shestidnevnoj_rabochej.pdf',
}
export const Calendars = () => {
    return (
        <>
            <Subtext width="100%" maxWidth="100%">
                Производственный календарь на 2024 год
            </Subtext>
            <List scroll={false} direction="horizontal" gap={12} wrapOnMobile>
                <Card
                    title="Для пятидневной рабочей недели"
                    height="120px"
                    width="50%"
                    background="5"
                    padding="20px 40px 20px 20px"
                >
                    <LinkButton
                        onClick={() => null}
                        href={calendarUrls.fiveWorkDays}
                        textColor="var(--reallyBlue)"
                        text="Подробнее"
                        background="transparent"
                        padding="10px 0"
                    />
                </Card>
                <Card
                    title="Для шестидневной рабочей недели"
                    height="120px"
                    width="50%"
                    background="6"
                    padding="20px 40px 20px 20px"
                >
                    <LinkButton
                        onClick={() => null}
                        href={calendarUrls.sixWorkDays}
                        textColor="var(--reallyBlue)"
                        text="Подробнее"
                        background="transparent"
                        padding="10px 0"
                    />
                </Card>
            </List>
        </>
    )
}
