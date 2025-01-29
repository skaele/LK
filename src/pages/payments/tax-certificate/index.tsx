import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useHistory } from 'react-router'

import { TAX_CERTIFICATES_ROUTE } from '@app/routes/routes'
import { confirmModel } from '@entities/confirm'
import { taxCertificateModel } from '@entities/payments'
import Select, { SelectPage } from '@features/select'
import { Wrapper } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import styled from 'styled-components'
import { useModal } from 'widgets'

import { Docs, File } from './docs'

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
    const history = useHistory()
    const { open } = useModal()
    const [pageMounted, certificates, loading] = useUnit([
        taxCertificateModel.pageMounted,
        taxCertificateModel.certificates,
        taxCertificateModel.certificatesLoading,
    ])

    useEffect(() => {
        pageMounted()
    }, [])

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
                    {!!certificates?.length && (
                        <Docs title="Файлы новейшей справки">
                            <Flex d="column" w="fit-content" gap="0.5rem" jc="flex-start">
                                <File link={certificates[0].cert_file_stamp} title="Справка" />
                                <File link={certificates[0].cert_file_sign} title="Электронная подпись" />
                            </Flex>
                        </Docs>
                    )}
                    <Flex d="column" gap="0.5rem">
                        <Title size={4} align="left">
                            Справки в ФНС
                        </Title>
                        <Table
                            loading={loading}
                            innerPadding="0.5rem"
                            columns={[
                                {
                                    title: 'Дата справки',
                                    field: 'cert_date',
                                    priority: 'one',
                                },
                                {
                                    title: 'Номер справки',
                                    field: 'number',
                                    priority: 'four',
                                },
                                {
                                    title: 'Номер корректировки',
                                    field: 'correction',
                                    priority: 'two',
                                },
                                {
                                    title: 'Отчетный год',
                                    field: 'year',
                                    priority: 'one',
                                },
                                {
                                    title: 'Плательщик',
                                    field: 'payer',
                                    priority: 'four',
                                },
                                {
                                    title: 'Очная форма',
                                    field: 'is_full_time',
                                    priority: 'four',
                                },
                                {
                                    title: 'Сумма справки',
                                    field: 'summ',
                                    priority: 'three',
                                },
                            ]}
                            data={certificates}
                            onRowClick={(row) => history.push(TAX_CERTIFICATES_ROUTE + '/' + row.id)}
                        />
                    </Flex>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

const FormModal = () => {
    const { close } = useModal()
    const [selected, setSelected] = useState<SelectPage | null>(null)
    const [presentYears, certificatedRequested] = useUnit([
        taxCertificateModel.presentYears,
        taxCertificateModel.certificatedRequested,
    ])

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
            <Button
                text="Получить"
                background="var(--reallyBlue)"
                textColor="#fff"
                disabled={!selected}
                onClick={() => {
                    if (!selected) return

                    if (presentYears.has(selected.title)) {
                        confirmModel.events.evokeConfirm({
                            message: (
                                <Flex d="column" gap="0.5rem" ai="flex-start">
                                    <Title align="left" size={4}>
                                        Справка за выбранный год уже сформирована.
                                    </Title>
                                    <P>
                                        Если вы уверены, что есть причина для формирования справки с корректировкой,
                                        например: изменились состав оплат или личные документы, тогда запрос на новую
                                        версию справки будет отправлен.
                                    </P>
                                    <P>Отправить?</P>
                                </Flex>
                            ),
                            onConfirm: () => {
                                certificatedRequested({ year: selected.title })
                                close()
                            },
                        })
                        return
                    }
                    certificatedRequested({ year: selected.title })
                    close()
                }}
            />
        </Flex>
    )
}

const P = styled.p`
    font-size: 1rem;
    line-height: 1.45rem;
`

export default TaxCertificate
