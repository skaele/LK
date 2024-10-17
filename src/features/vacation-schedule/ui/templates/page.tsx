import { userModel } from '@entities/user'
import { vacationScheduleModel } from '@entities/vacation-schedule'
import Select, { SelectPage } from '@features/select'
import PageBlock from '@shared/ui/page-block'
import { Button, CenterPage, Divider, Title, Wrapper } from '@ui/atoms'
import React, { useEffect, useMemo, useState } from 'react'
import { Vacation } from '../organism'
import { FiPlus } from 'react-icons/fi'
import { Calendars } from './calendars'

const Page = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { data, error } = vacationScheduleModel.selectors.useData()

    const items: SelectPage[] = useMemo(() => {
        return data?.map((value, index) => ({ id: index, title: value.division })) || []
    }, [data])

    const [selected, setSelected] = useState<SelectPage | null>(items[0] ?? {})

    useEffect(() => {
        if (!selected?.id) {
            setSelected(items[0])
        }
    }, [selected?.id, setSelected, items])

    const selectedVacation = data?.[Number(selected?.id || 0)]

    return (
        <Wrapper load={vacationScheduleModel.effects.getFx} error={error} data={data}>
            <CenterPage alignItems="flex-start">
                <PageBlock
                    topRightCornerElement={
                        <Button
                            onClick={() => {
                                window.location.replace('https://e.mospolytech.ru/old/index.php?p=vacation')
                            }}
                            text="Заполнить график"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            minWidth={'35px'}
                            height="36px"
                        />
                    }
                >
                    <Calendars />
                    <Divider />
                    <Title size={3} align="left">
                        Сведения о трудоустройстве
                    </Title>
                    {!!user?.id && (
                        <Select width="fit-content" items={items} selected={selected} setSelected={setSelected} />
                    )}
                    {selectedVacation && <Vacation {...selectedVacation} />}
                </PageBlock>
            </CenterPage>
        </Wrapper>
    )
}

export default Page
