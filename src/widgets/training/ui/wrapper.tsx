import { tutorialModel } from '@entities/tutorial'
import { TutorialId } from '@entities/tutorial/lib/tutorials'
import { useUnit } from 'effector-react'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useChildDimensions } from '../lib/use-child-dimensions'
import { Title } from '@shared/ui/title'

export const TutorialWrapper = ({
    children,
    desiredId,
    desiredStep,
}: {
    children: ReactElement
    desiredId: TutorialId
    desiredStep: number
}) => {
    const { childHeight, childWidth, childPosition, childWithRef } = useChildDimensions(children)
    // const [visible, setVisible] = useState(true)

    const [tutorialState, [currentTutorial, currentStep]] = useUnit([
        tutorialModel.stores.tutorialState,
        tutorialModel.stores.currentTutorial,
    ])

    const { title, description } = currentTutorial.steps[currentStep]

    if (!tutorialState || desiredStep !== currentStep || desiredId !== currentTutorial.id) {
        return <>{children}</>
    }
    return (
        <>
            {childWithRef}
            <Layout $width={childWidth} $height={childHeight} $top={childPosition?.top} $left={childPosition?.left}>
                <Wrapper></Wrapper>
                <Hint $width={childWidth} $height={childHeight} $top={childPosition?.top} $left={childPosition?.left}>
                    <Title size={4} align="left">
                        {title}
                    </Title>
                    <Description>{description}</Description>
                </Hint>
                {/* {visible && <Dark onClick={() => setVisible(false)} />} */}
            </Layout>
        </>
    )
}

const Layout = styled.div<{ $width: number; $height: number; $top: number; $left: number }>`
    position: fixed;
    width: ${({ $width }) => $width + 20}px;
    height: ${({ $height }) => $height + 20}px;
    top: ${({ $top }) => $top - 10}px;
    left: ${({ $left }) => $left - 10}px;
    padding: 10px;
    z-index: 5000;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 10000px;
`

const Wrapper = styled.div`
    /* border: 1px solid #fff; */
    /* background-color: var(--block); */
`

export const Dark = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
`

const Hint = styled.div<{ $width: number; $height: number; $top: number; $left: number }>`
    background: linear-gradient(0deg, rgba(95, 109, 236, 0.6), rgba(95, 109, 236, 0.6)), rgba(35, 35, 36, 0.7);
    backdrop-filter: blur(6.5px);
    border-radius: 15px;
    z-index: 5001;
    position: fixed;
    padding: 20px 30px;
    top: ${({ $top }) => $top - 10}px;
    left: ${({ $left, $width }) => $left + $width + 20}px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    color: #f4f4f4;
    font-size: 16px;
    line-height: 20px;
`

const Description = styled.div`
    font-size: 12px;
    line-height: 140%;
`
