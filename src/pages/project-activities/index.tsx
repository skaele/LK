import React from 'react'
import { FiInfo } from 'react-icons/fi'

import { Button, Divider, Title, Wrapper } from '@ui/atoms'
import { useUnit } from 'effector-react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { TutorialComponent, withTutorial } from 'widgets/tutorial/lib/with-tutorial'
import { DivTutorial } from 'widgets/tutorial/tutorials/div-tutorial'
import { EmptyDiv } from 'widgets/tutorial/ui/empty-div'

import { projectActivitesModel } from '@entities/project-activites'
import { tutorialModel } from '@entities/tutorial'

import { Colors } from '@shared/constants'
import PageBlock from '@shared/ui/page-block'
import Subtext from '@shared/ui/subtext'

import CurrentSemestr from './ui/current-semestr'
import { ProjectActivityIntroMessage } from './ui/intro-message'
import LastSemestr from './ui/last-semestr'
import InfoModal from './ui/project-info/info-modal'
import Result from './ui/result'

const ProjectActivitiesPage = () => {
    const { data, loading, error } = projectActivitesModel.selectors.useData()
    const [currentModule] = useUnit([tutorialModel.stores.currentModule])
    const { open } = useModal()

    const handleOpenModal = () => {
        open(<InfoModal data={data} />, 'Информация')
    }

    return (
        <Wrapper
            load={() => projectActivitesModel.effects.getFx('1')}
            loading={loading || false}
            error={error || null}
            data={data}
        >
            <Container>
                <PageBlock>
                    <ProjectActivityIntroMessage />
                    <ProjectStyledTutorial
                        tutorialModule={{
                            id: 'stud-project-activity',
                            step: 0,
                            params: { position: 'top' },
                        }}
                    >
                        <DivTutorial
                            tutorialModule={{ id: 'stud-project-activity', step: 1, params: { position: 'top' } }}
                        >
                            <Subtext fontSize="0.85rem">Вам назначен проект</Subtext>
                            <Title size={3} align="left" bottomGap>
                                {data?.project ?? '-'}
                            </Title>
                            <Subtext>
                                Тематика проекта: {data?.project_theme ?? '-'}
                                <br />
                                Подпроект: {data?.subproject.length ? data?.subproject : '-'}
                                <br />
                                Куратор: {data?.curator.length === 0 ? '-' : data?.curator}
                            </Subtext>
                            <Button
                                icon={<FiInfo />}
                                onClick={handleOpenModal}
                                text="Подробнее"
                                background="transparent"
                                padding="12px 0 0 0"
                                height="30px"
                            />
                        </DivTutorial>
                        <Divider width="100%" margin="16px 0" />
                        <DivTutorial
                            tutorialModule={{ id: 'stud-project-activity', step: 2, params: { position: 'top' } }}
                        >
                            <CurrentSemestr data={data} />
                        </DivTutorial>
                        {data?.last_semestr_result !== 'Данные отсутствуют' && (
                            <>
                                <Divider width="100%" margin="16px 0" />
                                <DivTutorial
                                    tutorialModule={{
                                        id: 'stud-project-activity',
                                        step: 3,
                                        params: { position: 'top' },
                                    }}
                                >
                                    <LastSemestr data={data} />
                                </DivTutorial>
                            </>
                        )}
                        <Divider width="100%" margin="16px 0" />
                        <DivTutorial
                            tutorialModule={{
                                id: 'stud-project-activity',
                                step: data?.last_semestr_result !== 'Данные отсутствуют' ? 4 : 3,
                                params: { position: 'top' },
                            }}
                        >
                            <Result data={data} />
                        </DivTutorial>
                    </ProjectStyledTutorial>
                    <EmptyDiv height={currentModule?.completed ? 0 : 10} />
                    {/* {data ? (
                        <Content data={data} loading={loading} />
                    ) : (
                        <Error text={'Данных за этот семестр нет, попробуйте другой!'} />
                    )} */}
                </PageBlock>
            </Container>
        </Wrapper>
    )
}

const Container = styled.div`
    h3 {
        background: ${Colors.blue.main};
        background: linear-gradient(to right, ${Colors.blue.main} 0%, ${Colors.pink.main} 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1000px) {
        padding: 0px;
    }
`

const ProjectStyled = styled.div`
    width: 100%;
`
const ProjectStyledTutorial = withTutorial(
    ({ forwardedRef, children }: TutorialComponent & { children?: React.ReactNode }) => (
        <ProjectStyled ref={forwardedRef}>{children}</ProjectStyled>
    ),
)

export default ProjectActivitiesPage
