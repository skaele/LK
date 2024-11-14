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
import { Loading } from '@shared/ui/loading'
import { DevModeMessage } from '../ui/dev-mode-message'
import { AllowancesForbidden } from '../ui/forbidden'

const Info = () => {
    const { id, role, jobId } = useParams<{ id: string; role: Role; jobId: string }>()

    const [infoPageMounted, data, pending, error, roles, jobRoles] = useUnit([
        allowancesModel.events.infoPageMounted,
        allowancesModel.stores.allowance.data,
        allowancesModel.stores.allowance.loading,
        allowancesModel.stores.allowance.error,
        allowancesModel.stores.roles,
        allowancesModel.stores.jobRoles,
    ])
    const initiator = roles.includes('Initiator')
    const approver = roles.includes('Approver')
    const isAllowed = initiator || approver

    useEffect(() => {
        if (isAllowed) infoPageMounted({ id, role, userId: jobId })
    }, [id, role, jobId, isAllowed])

    if (pending)
        return (
            <PageBlock>
                <Flex w="100%" jc="center" ai="center">
                    <Loading />
                </Flex>
            </PageBlock>
        )
    if (!isAllowed) return <AllowancesForbidden jobRoles={jobRoles} />

    return (
        <PageBlock>
            <Loader load={() => {}} data={data} loading={pending} error={error ? (error as Error).message : null}>
                <>
                    <DevModeMessage />
                    {Boolean(data?.files.application.length) || Boolean(data?.files.other.length) ? (
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
                                            {Boolean(data?.files.other.length) && (
                                                <>
                                                    {Boolean(data?.files.application.length) && (
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
                    )}
                </>
            </Loader>
        </PageBlock>
    )
}

export default Info
