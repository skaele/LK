import React, { useEffect } from 'react'
import { Initiator } from '../ui/initiator'
import { Approver } from '../ui/approver'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { userModel } from '@entities/user'
import { SliderPage } from 'widgets'
import PageBlock from '@shared/ui/page-block'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import { ALLOWANCES, CREATE_ALLOWANCE } from '@app/routes/teacher-routes'
import { useHistory, useParams } from 'react-router'

const Allowances = () => {
    const history = useHistory()
    const { role } = useParams<{ role: 'approver' | 'initiator' }>()
    const setRole = (role: string | undefined) => {
        history.push(ALLOWANCES + `/${role}`)
    }
    const [pageMounted, roles, user] = useUnit([
        allowancesModel.events.pageMounted,
        allowancesModel.queries.role.$data,

        userModel.stores.user,
    ])

    const handleCreateApplication = () => {
        history.push(CREATE_ALLOWANCE)
    }

    useEffect(() => {
        pageMounted()
    }, [])
    if (roles && user?.currentUser?.guid) {
        return (
            <PageBlock
                topRightCornerElement={
                    roles.some((employee) => employee.roles.includes('Initiator')) && (
                        <Button
                            onClick={handleCreateApplication}
                            text="Подать заявку"
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
                {roles.some((employee) => employee.roles.length > 1) ? (
                    <SliderPage
                        pages={[
                            { id: 'approver', title: 'Согласование надбавок', content: <Approver /> },
                            { id: 'initiator', title: 'Установление надбавок', content: <Initiator /> },
                        ]}
                        currentPage={role === 'initiator' ? 1 : 0}
                        onChangePage={setRole}
                        appearance={false}
                    />
                ) : roles.some((employee) => employee.roles[0] === 'Initiator') ? (
                    <Initiator />
                ) : (
                    <Approver />
                )}
            </PageBlock>
        )
    }

    return null
}

export default Allowances
