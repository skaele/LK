import { tutorialModel } from '@entities/tutorial'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'

export const SkipButton = ({ setAnimation }: { setAnimation: (value: 'in' | 'out' | 'removed') => void }) => {
    const module = useUnit(tutorialModel.stores.currentModule)
    const { isMobile, isTablet } = useCurrentDevice()
    if (!module || isMobile || isTablet) return null
    return (
        <Button
            onClick={() => {
                setAnimation('out')

                setTimeout(() => {
                    tutorialModel.events.moduleCompleted(module.id)
                    setAnimation('removed')
                }, 300)
            }}
        >
            Пропустить {'>'}
        </Button>
    )
}

const Button = styled.button`
    position: absolute;
    right: 2.5em;
    bottom: 1.5em;
    color: var(--text);
    z-index: 6;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
`
