import React, { ComponentType, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import { useUnit } from 'effector-react'
import { tutorialModel } from '@entities/tutorial'
import { TutorialId } from '@entities/tutorial/lib/tutorials'
import styled from 'styled-components'
import { Title } from '@shared/ui/title'
import { Button } from '@shared/ui/button'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import Flex from '@shared/ui/flex'

type HintPosition = 'right' | 'bottom' | 'top'
type Dimensions = { width: number; height: number }
type Position = { top: number; left: number; right: number; bottom?: number }
export interface TutorialWrapperProps {
    tutorialModule?: {
        id: TutorialId
        step: number
        params?: {
            position?: HintPosition
        }
    }
}

export type TutorialComponent = {
    forwardedRef?: (node: HTMLElement | null) => void
}

export const withTutorial = <P,>(WrappedComponent: ComponentType<P & TutorialComponent>) => {
    const Wrapper: React.FC<P & TutorialWrapperProps> = (props) => {
        const portal = document.getElementById('portal')
        const root = document.getElementById('root')

        const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })
        const [position, setPosition] = useState<Position | null>(null)

        const handleRef = useCallback((node: HTMLElement | null) => {
            if (!node || !root) return
            const measureDOMNode = () => {
                const rect = node.getBoundingClientRect()
                setDimensions({ width: rect.width, height: rect.height })
                setPosition({ top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom })
            }
            measureDOMNode()

            const mutationObserver = new MutationObserver(measureDOMNode)
            mutationObserver.observe(root, { childList: true, subtree: true })
            window.addEventListener('resize', measureDOMNode)
            window.addEventListener('scroll', measureDOMNode, true)
        }, [])
        const [tutorialState, currentModule, currentStep] = useUnit([
            tutorialModel.stores.tutorialState,
            tutorialModel.stores.currentModule,
            tutorialModel.stores.currentStep,
        ])

        if (!portal || !position || !tutorialState || !currentModule || !props.tutorialModule)
            return <WrappedComponent forwardedRef={handleRef} {...props} />

        const { title, description } = currentModule.steps[currentStep]
        const { id, step } = props.tutorialModule

        return (
            <>
                <WrappedComponent forwardedRef={handleRef} {...props} />
                {step === currentStep &&
                    id === currentModule.id &&
                    ReactDOM.createPortal(
                        <Layout dimensions={dimensions} position={position}>
                            <Hint
                                dimensions={dimensions}
                                childPosition={position}
                                relativePosition={props.tutorialModule.params?.position}
                            >
                                <Title size={4} align="left">
                                    {title}
                                </Title>
                                <Description>{description}</Description>
                                <Buttons jc="flex-end" gap="20px">
                                    <Button
                                        background="transparent"
                                        icon={<FaArrowLeftLong />}
                                        onClick={() => tutorialModel.events.prevStep()}
                                    />
                                    <div style={{ minWidth: '5ch', textAlign: 'end' }}>
                                        {currentStep + 1} / {currentModule.steps.length}
                                    </div>
                                    <Button
                                        background="transparent"
                                        icon={<FaArrowRightLong />}
                                        onClick={() => tutorialModel.events.nextStep()}
                                    />
                                </Buttons>
                            </Hint>
                        </Layout>,
                        portal,
                    )}
            </>
        )
    }

    return Wrapper
}

const Layout = styled.div<{ dimensions: Dimensions; position: Position }>`
    position: fixed;
    top: ${({ position: { top } }) => top - 10}px;
    left: ${({ position: { left } }) => left - 10}px;
    z-index: 6;

    width: ${({ dimensions: { width } }) => width + 20}px;
    height: ${({ dimensions: { height } }) => height + 20}px;

    padding: 10px;

    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px 10000px;
`

const Hint = styled.div<{ dimensions: Dimensions; childPosition: Position; relativePosition?: HintPosition }>`
    position: fixed;
    z-index: 6;
    bottom: 0;
    left: 0;

    width: calc(100% - 16px);
    margin: 8px;
    padding: 20px 30px;

    border-radius: 15px;

    color: #f4f4f4;
    background: rgba(95, 109, 236, 0.6);
    backdrop-filter: blur(6.5px);

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    @media (min-width: 1000px) {
        top: ${({ dimensions: { height }, childPosition: { top }, relativePosition }) =>
            relativePosition === 'bottom' ? top + height + 10 : relativePosition === 'top' ? top - 30 : top}px;
        left: ${({ dimensions: { width }, childPosition: { left }, relativePosition }) =>
            relativePosition === 'bottom' || relativePosition === 'top' ? left - 20 : left + width + 10}px;
        transform: ${({ relativePosition }) => (relativePosition === 'top' ? 'translateY(-100%)' : 'translateY(0)')};
        bottom: auto;

        min-width: 250px;
        width: 20%;
        max-width: 600px;

        margin: 10px;
    }
`

const Description = styled.div`
    margin-top: 20px;
    font-size: 12px;
    line-height: 140%;
`

const Buttons = styled(Flex)`
    margin-top: 30px;
    left: 0;
`
