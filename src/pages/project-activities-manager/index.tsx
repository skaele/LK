import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { Spacing } from '@ui/atoms'
import Intro from './ui/intro'
import Projects from '@pages/project-activities-manager/ui/projects'
import { projectActivitiesManagerStore } from '@pages/project-activities-manager/model'

const Container = styled.div`
    @media (max-width: 1000px) {
        padding: 0px;
    }
`

const ProjectActivitiesActivitiesPage = () => {
    const { loading, data } = projectActivitiesManagerStore.selectors.useData()

    const isNotProjectActivitiesManager = !loading && data === null

    return (
        <Wrapper
            load={projectActivitiesManagerStore.effects.getFx}
            noDataCheck
            error={isNotProjectActivitiesManager ? 'Вы не являетесь руководителем проектов' : null}
            loading={loading}
            data={data}
        >
            <>
                <Container>
                    <PageBlock>
                        <Intro />
                        <Spacing size={2} />
                        <Projects />
                    </PageBlock>
                </Container>
            </>
        </Wrapper>
    )
}

export default ProjectActivitiesActivitiesPage
