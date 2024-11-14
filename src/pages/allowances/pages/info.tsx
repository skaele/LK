import { allowancesModel } from '@entities/allowances'
import { AllowanceEmployee, AllowanceFiles, Role } from '@entities/allowances/types'
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
import { Forbidden } from '@shared/ui/forbidden'

// https://e.mospolytech.ru/#/allowances-info/7f9a30ea-e7b3-11ea-9434-b4b52f5f5349/approver/9ccdceab-1ba5-467c-9669-fc740c1c5f69
// https://e.mospolytech.ru/#/allowances-info/9ccdceab-1ba5-467c-9669-fc740c1c5f69

const Info = () => {
    const { id } = useParams<{ id: string; role: Role; jobId: string }>()

    const [infoPageMounted, data, pending, error, roles, jobRoles, role, setRole, jobId, setJobId] = useUnit([
        allowancesModel.events.infoPageMounted,
        allowancesModel.stores.allowance.data,
        allowancesModel.stores.allowance.loading,
        allowancesModel.stores.allowance.error,
        allowancesModel.stores.roles,
        allowancesModel.stores.jobRoles,
        allowancesModel.stores.allowance.role,
        allowancesModel.events.setCurrentRole,
        allowancesModel.stores.allowance.jobId,
        allowancesModel.events.setCurrentJobId,
    ])

    const initiator = roles.includes('Initiator')
    const approver = roles.includes('Approver')
    const isAllowed = initiator || approver

    if (isAllowed) {
        if (!jobId) {
            if (approver) {
                setJobId(jobRoles?.find((job) => job.roles.includes('Approver'))?.employeeId || '')
                setRole('Approver')
            } else {
                setJobId(jobRoles?.find((job) => job.roles.includes('Initiator'))?.employeeId || '')
                setRole('Initiator')
            }
        }
    }

    useEffect(() => {
        if (isAllowed && role && jobId) infoPageMounted({ id, role, userId: jobId })
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
                {role && jobId ? (
                    <>
                        <DevModeMessage />
                        {roles.length > 1 ? (
                            <SliderPage
                                pages={[
                                    {
                                        id: 'Approver',
                                        title: 'Согласование',
                                        content: (
                                            <InfoContent
                                                id={id}
                                                role={role}
                                                jobId={jobId}
                                                files={data?.files}
                                                employees={data?.employees}
                                            />
                                        ),
                                    },
                                    {
                                        id: 'Initiator',
                                        title: 'Установление',
                                        content: (
                                            <InfoContent
                                                id={id}
                                                role={role}
                                                jobId={jobId}
                                                files={data?.files}
                                                employees={data?.employees}
                                            />
                                        ),
                                    },
                                ]}
                                currentPage={role === 'Initiator' ? 1 : 0}
                                onChangePage={(role) => {
                                    setRole((role as Role) || 'Approver')
                                }}
                                appearance={false}
                            />
                        ) : roles[0] === 'Initiator' ? (
                            <InfoContent
                                id={id}
                                role="Initiator"
                                jobId={jobId}
                                files={data?.files}
                                employees={data?.employees}
                            />
                        ) : (
                            <InfoContent
                                id={id}
                                role="Approver"
                                jobId={jobId}
                                files={data?.files}
                                employees={data?.employees}
                            />
                        )}
                    </>
                ) : (
                    <Forbidden text="Произошла ошибка" />
                )}
            </Loader>
        </PageBlock>
    )
}

function InfoContent({
    id,
    files,
    employees,
    role,
    jobId,
}: {
    id: string
    files?: AllowanceFiles
    employees?: AllowanceEmployee[]
    role: Role
    jobId: string
}) {
    return Boolean(files?.application.length) || Boolean(files?.other.length) ? (
        <SliderPage
            pages={[
                {
                    title: 'Сотрудники',
                    content: (
                        <Flex d="column" gap="1rem" w="100%">
                            {employees?.map((employee, index) => (
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
                            {Boolean(files?.application.length) && (
                                <>
                                    <Title size={4} align="left">
                                        Файлы заявления
                                    </Title>
                                    <Flex d="column" gap="1rem">
                                        {files?.application.map((file) => (
                                            <File key={file.id} file={file} />
                                        ))}
                                    </Flex>
                                </>
                            )}
                            {Boolean(files?.other.length) && (
                                <>
                                    {Boolean(files?.application.length) && (
                                        <Title size={4} align="left">
                                            Другое
                                        </Title>
                                    )}

                                    <Flex d="column" gap="0.5rem">
                                        {files?.other.map((file) => (
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
            {employees?.map((employee, index) => (
                <>
                    {index !== 0 && <Divider />}
                    <Employee key={employee.id} employee={employee} role={role} userId={jobId} id={id} />
                </>
            ))}
        </Flex>
    )
}

export default Info
