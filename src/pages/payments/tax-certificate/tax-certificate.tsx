import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { taxCertificateModel } from '@entities/payments'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Title, Wrapper } from '@shared/ui/atoms'
import KeyValue from '@shared/ui/atoms/key-value'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { useStoreMap, useUnit } from 'effector-react'

import { Docs, File } from './docs'

const TaxCertificatePage = () => {
    const { id } = useParams<{ id: string }>()
    const { isTablet } = useCurrentDevice()
    const [pageMounted, loading] = useUnit([taxCertificateModel.pageMounted, taxCertificateModel.certificatesLoading])
    const certificate = useStoreMap(taxCertificateModel.certificates, (certificates) =>
        certificates?.find((certificate) => certificate.id === id),
    )

    useEffect(() => {
        pageMounted()
    }, [])

    if (!certificate) return null

    return (
        <Wrapper data={true} load={() => {}} error={null}>
            <PageBlock>
                <Flex d="column" gap="2rem" ai="flex-start">
                    <Docs>
                        <File link={certificate.cert_file_stamp} title="Печатная форма Справки в ФНС" />
                        <File link={certificate.cert_file_sign} title="Электронная подпись" />
                    </Docs>
                    <Flex d="column" ai="flex-start">
                        <KeyValue keyStr="Дата справки" value={certificate.cert_date} />
                        <KeyValue keyStr="Год" value={certificate.year} />
                        <KeyValue keyStr="Очная форма" value={certificate.is_full_time ? 'Да' : 'Нет'} />
                        <KeyValue keyStr="Плательщик" value={certificate.payer} />
                        <KeyValue keyStr="Номер справки" value={certificate.number} />
                        <KeyValue keyStr="Номер корректировки" value={certificate.correction} />
                        <KeyValue keyStr="Подписант" value={certificate.signatory} />
                    </Flex>
                    <Flex gap="2rem" d={isTablet ? 'column' : 'row'} ai="flex-start">
                        <Flex d="column" gap="0.5rem" jc="space-between" h="100%">
                            <Title size={4} align="left" bottomGap={isTablet ? '0' : '1lh'}>
                                Список договоров к справке
                            </Title>
                            <Table
                                loading={loading}
                                innerPadding="0.33rem"
                                fontSize="0.75rem"
                                columns={[
                                    {
                                        title: 'Номер договора',
                                        field: 'contractNumber',
                                    },
                                    {
                                        title: 'Дата договора',
                                        field: 'contractDate',
                                    },
                                ]}
                                data={certificate.contracts}
                            />
                        </Flex>
                        <Flex d="column" gap="0.5rem">
                            <Title size={4} align="left">
                                Список оплат с редакциями к договору к справке (договор, доп.соглашение)
                            </Title>
                            <Table
                                loading={loading}
                                innerPadding="0.33rem"
                                fontSize="0.75rem"
                                columns={[
                                    {
                                        title: 'Дата оплаты',
                                        field: 'paymentDate',
                                    },
                                    {
                                        title: 'Сумма оплаты',
                                        field: 'summ',
                                    },
                                    {
                                        title: 'Тип редакции',
                                        field: 'versionType',
                                    },
                                    {
                                        title: 'Дата редакции',
                                        field: 'versionDate',
                                    },
                                ]}
                                data={certificate.payments}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

export default TaxCertificatePage
