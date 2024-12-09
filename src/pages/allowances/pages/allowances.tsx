import React, { useEffect } from 'react'
import { Initiator } from '../ui/initiator'
import { Approver } from '../ui/approver'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { SliderPage } from 'widgets'
import PageBlock from '@shared/ui/page-block'
import { Button, Loading, Message } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import { ALLOWANCES, CREATE_ALLOWANCE } from '@app/routes/teacher-routes'
import { useHistory, useParams } from 'react-router'
import Flex from '@shared/ui/flex'
import { DevModeMessage } from '../ui/dev-mode-message'
import { AllowancesForbidden } from '../ui/forbidden'

const Allowances = () => {
    const history = useHistory()
    const { role } = useParams<{ role: 'approver' | 'initiator' }>()
    const setRole = (role: string | undefined) => {
        history.push(ALLOWANCES + `/${role}`)
    }
    const [pageMounted, loading, roles, jobRoles] = useUnit([
        allowancesModel.events.pageMounted,
        allowancesModel.stores.rolesPending,
        allowancesModel.stores.roles,
        allowancesModel.stores.jobRoles,
    ])

    const handleCreateApplication = () => {
        history.push(CREATE_ALLOWANCE)
    }
    const isAllowed = roles.includes('Initiator') || roles.includes('Approver')
    useEffect(() => {
        if (isAllowed) pageMounted()
    }, [isAllowed])

    if (loading)
        return (
            <PageBlock>
                <Flex w="100%" jc="center" ai="center">
                    <Loading />
                </Flex>
            </PageBlock>
        )

    if (!isAllowed) return <AllowancesForbidden jobRoles={jobRoles} />

    return (
        <PageBlock
            topRightCornerElement={
                roles.includes('Initiator') && (
                    <Button
                        onClick={handleCreateApplication}
                        text="Подать служебную записку"
                        background="var(--reallyBlue)"
                        textColor="#fff"
                        icon={<FiPlus />}
                        minWidth="35px"
                        height="36px"
                        shrinkTextInMobile
                    />
                )
            }
        >
            <Message type="info">
                <p>
                    Инструкция для инициаторов доступна{' '}
                    <a
                        href="https://e.mospolytech.ru/old/storage/files/Ustanovlenie_nadbavok_(dlya_initsiatorov).pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        по ссылке
                    </a>
                    .
                </p>
            </Message>
            <DevModeMessage />
            {roles.length > 1 ? (
                <SliderPage
                    pages={[
                        { id: 'approver', title: 'Согласование надбавок', content: <Approver /> },
                        { id: 'initiator', title: 'Установление надбавок', content: <Initiator /> },
                    ]}
                    currentPage={role === 'initiator' ? 1 : 0}
                    onChangePage={setRole}
                    appearance={false}
                />
            ) : roles[0] === 'Initiator' ? (
                <Initiator />
            ) : (
                <Approver />
            )}
        </PageBlock>
    )
}

export default Allowances
