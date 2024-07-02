import React from 'react'
import { Initiator } from '../ui/initiator'
import { Approver } from '../ui/approver'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { Loader } from '@shared/ui/atoms/loader'
import { userModel } from '@entities/user'
import { SliderPage } from 'widgets'
import PageBlock from '@shared/ui/page-block'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'
import { CREATE_ALLOWANCE } from '@app/routes/teacher-routes'
import { useHistory } from 'react-router'

const Allowances = () => {
    const [pageMounted, roles, loading, error, user] = useUnit([
        allowancesModel.events.pageMounted,
        allowancesModel.queries.role.$data,
        allowancesModel.queries.role.$pending,
        allowancesModel.queries.role.$error,

        userModel.stores.user,
    ])

    const history = useHistory()

    const handleCreateApplication = () => {
        history.push(CREATE_ALLOWANCE)
    }
    if (roles && user?.currentUser?.guid) {
        return (
            <>
                <Loader
                    load={() => pageMounted({ role: roles[0], userId: user.currentUser?.guid ?? '' })}
                    loading={loading}
                    error={error ? (error as Error).message : null}
                    data={roles}
                    couldBeReloaded
                >
                    <PageBlock
                        topRightCornerElement={
                            roles.includes('initiator') && (
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
                        ) : roles[0] === 'initiator' ? (
                            <Initiator />
                        ) : (
                            <Approver />
                        )}
                    </PageBlock>
                </Loader>
            </>
        )
    }

    return null
}

export default Allowances
