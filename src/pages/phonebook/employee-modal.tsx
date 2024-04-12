import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import React from 'react'
import { InfoItem } from './info-item'
import { Button } from '@shared/ui/button'
import getLettersColors from '@shared/lib/get-letters-colors'
import { Header } from './styled'
import { Colors, MEDIA_QUERIES } from '@shared/constants'
import Avatar from '@features/home/ui/molecules/avatar'
import { Employee } from '@shared/api/model/phonebook'
import { Grid } from './styled/grid'
import styled from 'styled-components'
import { FiClock, FiMessageCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { useModal } from 'widgets'
import useResize from '@shared/lib/hooks/use-resize'
import List from '@shared/ui/list'

export const EmployeeModal = ({ fio }: { fio: string }) => {
    const { close } = useModal()
    const employee: Employee = {
        fio,
        post: 'Главный бухгалтер',
        phone: '+7 800 300 40 50',
        email: 'a.n.surname@mospolytech.ru',
        address: 'г. Москва, ул. Ленина, д. 1',
        cabinet: 'ПР 1101',
    }
    const main = getLettersColors(employee.fio ?? '', 'main') ?? Colors.blue.main
    const { width } = useResize()
    return (
        <Flex w={width <= 800 ? '100%' : '600px'} d="column">
            <Header bgColor={main} padingLeft="255px">
                <Title align="left" size={3}>
                    {employee.fio}
                </Title>
            </Header>
            <Grid columns="230px 1fr" rows="1fr">
                <Flex jc="center" ai="center" p="80px 30px">
                    <Avatar
                        border={true}
                        marginRight="0px"
                        name={employee.fio}
                        width="150px"
                        height="150px"
                        avatar={employee.avatar}
                    />
                </Flex>

                <Content>
                    <List direction="horizontal" showPages gap={400}>
                        <D>
                            <InfoItem title="Номер телефона">{employee.phone}</InfoItem>
                            <InfoItem title="Добавочный номер">{employee.extPhone}</InfoItem>
                            <InfoItem title="Электронная почта">{employee.email}</InfoItem>
                            <InfoItem title="Адрес">{employee.address}</InfoItem>
                            <InfoItem title="Кабинет">{employee.cabinet}</InfoItem>
                        </D>
                        <D>
                            <InfoItem title="Номер телефона">{employee.phone}</InfoItem>
                            <InfoItem title="Добавочный номер">{employee.extPhone}</InfoItem>
                            <InfoItem title="Электронная почта">{employee.email}</InfoItem>
                            <InfoItem title="Адрес">{employee.address}</InfoItem>
                            <InfoItem title="Кабинет">{employee.cabinet}</InfoItem>
                        </D>
                    </List>
                </Content>
            </Grid>
            <Grid columns="1fr 1fr" rows="1fr" columnGap="60px" padding="20px 70px">
                <Link
                    to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                        page: 'current',
                        filter: employee.fio,
                    })}
                >
                    <Button
                        icon={<FiClock />}
                        text={'Расписание'}
                        onClick={() => {
                            close()
                        }}
                        background="var(--theme-4)"
                        width="100%"
                    />
                </Link>

                <Button
                    icon={<FiMessageCircle />}
                    text={'Написать'}
                    onClick={() => close()}
                    width="100%"
                    background="var(--theme-4)"
                    isActive={false}
                />
            </Grid>
        </Flex>
    )
}

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 175px 55px 0 0;
    max-width: 380px;
`

const D = styled.div`
    --time-width: 30px;
    scroll-snap-type: y mandatory;

    ${MEDIA_QUERIES.isNotMobile} {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`
