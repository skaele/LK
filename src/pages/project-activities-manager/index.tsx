import { Colors } from '@shared/constants'
import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

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

const ProjectActivitiesActivitiesPage = () => {
    return (
        <Wrapper load={() => '1'} error={null} loading={false} data="1">
            <Container>
                <PageBlock>hello</PageBlock>
            </Container>
        </Wrapper>
    )
}

export default ProjectActivitiesActivitiesPage
