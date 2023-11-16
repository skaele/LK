import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { Spacing } from '@ui/atoms'
import Intro from './ui/intro'
import Projects from '@pages/project-activities-manager/ui/projects'

const Container = styled.div`
    @media (max-width: 1000px) {
        padding: 0px;
    }
`

const ProjectActivitiesActivitiesPage = () => {
    return (
        <Wrapper load={() => '1'} error={null} loading={false} data="1">
            <Container>
                <PageBlock>
                    <Intro />
                    <Spacing size={2} />
                    <Projects />
                </PageBlock>
            </Container>
        </Wrapper>
    )
}

export default ProjectActivitiesActivitiesPage
