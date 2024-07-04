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
import { CREATE_ALLOWANCE } from '@app/routes/teacher-routes'
import { useHistory } from 'react-router'

const Allowances = () => {
    const [pageMounted, roles, user] = useUnit([
        allowancesModel.events.pageMounted,
        allowancesModel.queries.role.$data,

        userModel.stores.user,
    ])

    const history = useHistory()

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
                {roles.length > 1 ? (
                    <SliderPage
                        pages={[
                            { title: 'Согласование надбавок', content: <Approver /> },
                            { title: 'Установление надбавок', content: <Initiator /> },
                        ]}
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
