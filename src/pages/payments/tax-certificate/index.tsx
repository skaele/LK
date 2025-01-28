import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import { useModal } from 'widgets'

import { File } from '@pages/allowances/ui/file'

import Select, { SelectPage } from '@features/select'

import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Wrapper } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import { Grid } from '@shared/ui/grid'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { Title } from '@shared/ui/title'

function getYears(): SelectPage[] {
    const currentYear = new Date().getFullYear()
    const startYear = 2024

    return Array.from({ length: currentYear - startYear }, (_, index) => ({
        id: index,
        title: (startYear + index).toString(),
    }))
}
const years = getYears()

const TaxCertificate = () => {
    const { open } = useModal()
    const { isTablet } = useCurrentDevice()

    return (
        <Wrapper data={true} load={() => {}} error={null}>
            <PageBlock
                topRightCornerElement={
                    <Button
                        onClick={() => open(<FormModal />, 'Получить новую справку')}
                        text="Получить новую справку"
                        background="var(--reallyBlue)"
                        textColor="#fff"
                        icon={<FiPlus />}
                        minWidth="35px"
                        height="36px"
                        shrinkTextInMobile
                    />
                }
            >
                <Flex d="column" gap="2rem" ai="flex-start">
                    <Flex d="column" w="fit-content" gap="0.5rem" jc="flex-start">
                        <a href="" style={{ width: 250 }}>
                            <File
                                file={{
                                    contentType: 'pdf',
                                    id: '1',
                                    name: 'Печатная форма',
                                    sizeB: 0,
                                    digitalSignature: '',
                                    extension: 'pdf',
                                }}
                            />
                        </a>
                        <a href="" style={{ width: 250 }}>
                            <File
                                file={{
                                    contentType: 'pdf',
                                    id: '1',
                                    name: 'Форма с ЭЦП',
                                    sizeB: 0,
                                    digitalSignature: '',
                                    extension: 'pdf',
                                }}
                            />
                        </a>
                    </Flex>
                    <Flex d="column" gap="0.5rem">
                        <Title size={4} align="left">
                            Справки в ФНС
                        </Title>
                        <Table
                            innerPadding="0.5rem"
                            columns={[
                                {
                                    title: 'Дата справки',
                                    field: '1',
                                },
                                {
                                    title: 'Номер справки',
                                    field: '2',
                                },
                                {
                                    title: 'Номер корректировки',
                                    field: '3',
                                },
                                {
                                    title: 'Отчетный год',
                                    field: '4',
                                },
                                {
                                    title: 'Плательщик',
                                    field: '5',
                                },
                                {
                                    title: 'Очная форма',
                                    field: '6',
                                },
                                {
                                    title: 'Сумма справки',
                                    field: '7',
                                },
                                {
                                    title: 'Код справки',
                                    field: '8',
                                },
                            ]}
                            data={[]}
                        />
                    </Flex>
                    <Grid
                        columnGap="2rem"
                        rowGap="2rem"
                        columns={isTablet ? '1fr' : '1fr 1fr'}
                        rows={isTablet ? '1fr 1fr' : '1fr'}
                    >
                        <Flex d="column" gap="0.5rem" jc="space-between" h="100%">
                            <Title size={4} align="left">
                                Список договоров к справке
                                <br />
                            </Title>
                            <Table
                                innerPadding="0.33rem"
                                fontSize="0.75rem"
                                columns={[
                                    {
                                        title: 'Номер договора',
                                        field: '1',
                                    },
                                    {
                                        title: 'Дата договора',
                                        field: '2',
                                    },
                                ]}
                                data={[]}
                            />
                        </Flex>
                        <Flex d="column" gap="0.5rem">
                            <Title size={4} align="left">
                                Список оплат с редакциями к договору к справке (договор, доп.соглашение)
                            </Title>
                            <Table
                                innerPadding="0.33rem"
                                fontSize="0.75rem"
                                columns={[
                                    {
                                        title: 'Дата оплаты',
                                        field: '1',
                                    },
                                    {
                                        title: 'Сумма оплаты',
                                        field: '2',
                                    },
                                    {
                                        title: 'Тип редакции',
                                        field: '3',
                                    },
                                    {
                                        title: 'Дата редакции',
                                        field: '4',
                                    },
                                ]}
                                data={[]}
                            />
                        </Flex>
                    </Grid>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

const FormModal = () => {
    const [selected, setSelected] = useState<SelectPage | null>(null)

    useEffect(() => {
        if (years.length === 1) setSelected(years[0])
    }, [years])

    return (
        <Flex d="column" gap="1rem" ai="flex-end">
            <Select
                title="Год"
                items={years}
                selected={selected}
                setSelected={setSelected}
                isActive={years.length > 1}
                required
                width="100%"
                placeholder="Выберите год"
            />
            <Button text="Получить" background="var(--reallyBlue)" textColor="#fff" />
        </Flex>
    )
}

export default TaxCertificate
