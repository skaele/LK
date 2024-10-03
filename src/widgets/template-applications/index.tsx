import { applicationsModel } from '@entities/applications'
import getApplicationsColumns from '@features/applications/lib/get-applications-columns'
import { getExtendedApplicationsColumns } from '@features/applications/lib/get-extended-application-columns'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import { ButtonTutorial } from 'widgets/tutorial/tutorials/button-tutorial'
import PageBlock from '@shared/ui/page-block'
import { TableTutorial } from 'widgets/tutorial/tutorials/table-tutorial'
import { Message, Wrapper } from '@ui/atoms'
import React, { memo, useCallback } from 'react'
import { FiInfo, FiPlus } from 'react-icons/fi'
import { useModal } from 'widgets'

interface Props {
    isTeachers: boolean
}

const TeachersHrApplicationsPage = ({ isTeachers }: Props) => {
    const {
        data: { listApplication, dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const { open } = useModal()

    const handleOpenModal = useCallback(() => {
        open(
            <CreateApplicationList
                isTeachers={isTeachers}
                currentFormEducation={dataUserApplication?.educationForm}
                currentDegreeLevel={dataUserApplication?.degreeLevel}
            />,
            'Создать заявку',
        )
    }, [])

    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            // Метод getWorkerData работает нестабильно. Для этого раздела он не нужен, но ошибку ставит именно в этот стор.
            // Таким образом все запросы отрабатывают корректно, но все равно отображается ошибка.
            error={null}
            data={listApplication}
        >
            <PageBlock
                topRightCornerElement={
                    <ButtonTutorial
                        onClick={handleOpenModal}
                        text="Подать заявку"
                        background="var(--reallyBlue)"
                        textColor="#fff"
                        icon={<FiPlus />}
                        minWidth="35px"
                        height="36px"
                        shrinkTextInMobile
                        tutorialModule={{ id: 'applications', step: 3, params: { position: 'bottom' } }}
                    />
                }
            >
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    <p>
                        Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                        (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В
                        колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда
                        необходимо приехать за готовым документом.
                        {isTeachers && (
                            <>
                                <br />
                                Остальные Цифровые сервисы доступны{' '}
                                <a
                                    href="https://e.mospolytech.ru/old/index.php?p=sprav"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    по ссылке
                                </a>
                                .
                            </>
                        )}
                    </p>
                </Message>

                <TableTutorial
                    loading={!listApplication}
                    columns={getApplicationsColumns()}
                    columnsExtended={getExtendedApplicationsColumns()}
                    data={listApplication}
                    maxOnPage={7}
                    tutorialModule={{ id: 'applications', step: [0, 1, 2], params: { position: 'top' } }}
                />
            </PageBlock>
        </Wrapper>
    )
}

export default memo(TeachersHrApplicationsPage)
