import { allowancesModel } from '@entities/allowances'
import { Role } from '@entities/allowances/types'
import { Loader } from '@shared/ui/atoms/loader'
import PageBlock from '@shared/ui/page-block'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Employee } from '../ui/employee'
import { SliderPage } from 'widgets'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import { File } from '../ui/file'
import { Divider } from '@shared/ui/divider'
import { Forbidden } from '@shared/ui/forbidden'
import { Loading } from '@shared/ui/loading'

const Info = () => {
    const { id, role, jobId } = useParams<{ id: string; role: Role; jobId: string }>()

    const [infoPageMounted, data, pending, error, roles] = useUnit([
        allowancesModel.events.infoPageMounted,
        allowancesModel.queries.allowance.$data,
        allowancesModel.queries.allowance.$pending,
        allowancesModel.queries.allowance.$error,
        allowancesModel.stores.roles,
    ])

    useEffect(() => {
        infoPageMounted({ id, role, userId: jobId })
    }, [id, role, jobId])

    if (pending)
        return (
            <Flex w="100%" jc="center" ai="center">
                <Loading />
            </Flex>
        )
    if (!roles.includes('Initiator') || !roles.includes('Approver'))
        return <Forbidden text={'У вас нет доступа к этому разделу'} />

    return (
        <PageBlock>
            <Loader load={() => {}} data={data} loading={pending} error={error ? (error as Error).message : null}>
                {Boolean(data?.files.order.length) ||
                Boolean(data?.files.application.length) ||
                Boolean(data?.files.other.length) ? (
                    <SliderPage
                        pages={[
                            {
                                title: 'Сотрудники',
                                content: (
                                    <Flex d="column" gap="1rem" w="100%">
                                        {data?.employees.map((employee, index) => (
                                            <>
                                                {index !== 0 && <Divider />}
                                                <Employee
                                                    key={employee.id}
                                                    employee={employee}
                                                    role={role}
                                                    userId={jobId}
                                                    id={id}
                                                />
                                            </>
                                        ))}
                                    </Flex>
                                ),
                            },
                            {
                                title: 'Файлы',
                                content: (
                                    <Flex d="column" gap="2rem">
                                        {Boolean(data?.files.application.length) && (
                                            <>
                                                <Title size={4} align="left">
                                                    Файлы заявления
                                                </Title>
                                                <Flex d="column" gap="1rem">
                                                    {data?.files.application.map((file) => (
                                                        <File key={file.id} file={file} />
                                                    ))}
                                                </Flex>
                                            </>
                                        )}
                                        {Boolean(data?.files.order.length) && (
                                            <>
                                                <Title size={4} align="left">
                                                    Файлы приказа
                                                </Title>
                                                <Flex d="column" gap="1rem">
                                                    {data?.files.order.map((file) => (
                                                        <File key={file.id} file={file} />
                                                    ))}
                                                </Flex>
                                            </>
                                        )}
                                        {Boolean(data?.files.other.length) && (
                                            <>
                                                {(Boolean(data?.files.order.length) ||
                                                    Boolean(data?.files.application.length)) && (
                                                    <Title size={4} align="left">
                                                        Другое
                                                    </Title>
                                                )}

                                                <Flex d="column" gap="0.5rem">
                                                    {data?.files.other.map((file) => (
                                                        <File key={file.id} file={file} />
                                                    ))}
                                                </Flex>
                                            </>
                                        )}
                                    </Flex>
                                ),
                            },
                        ]}
                    />
                ) : (
                    <Flex d="column" gap="1rem" w="100%">
                        {data?.employees.map((employee, index) => (
                            <>
                                {index !== 0 && <Divider />}
                                <Employee key={employee.id} employee={employee} role={role} userId={jobId} id={id} />
                            </>
                        ))}
                    </Flex>
                )}
            </Loader>
        </PageBlock>
    )
}

export default Info
