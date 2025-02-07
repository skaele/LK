import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

<<<<<<<< HEAD:src/shared/tutorial/ui/skip-button.tsx
import useCurrentDevice from '@shared/ui/hooks/use-current-device'

import { tutorialModel } from '..'
========
import { tutorialModel } from '@entities/tutorial'

import useCurrentDevice from '@shared/lib/hooks/use-current-device'
>>>>>>>> master:src/widgets/tutorial/ui/skip-button.tsx

export const SkipButton = ({ setAnimation }: { setAnimation: (value: 'in' | 'out' | 'removed') => void }) => {
    const module = useUnit(tutorialModel.stores.currentModule)
    const { isMobile, isTablet } = useCurrentDevice()
    if (!module) return null
    if (isMobile || isTablet)
        return (
            <MobileButton
                onClick={() => {
                    setAnimation('out')

                    setTimeout(() => {
                        tutorialModel.events.moduleCompleted(module.id)
                    }, 200)
                }}
            >
                <IoMdClose size={24} />
            </MobileButton>
        )

    return (
        <DesktopButton
            onClick={() => {
                setAnimation('out')

                setTimeout(() => {
                    tutorialModel.events.moduleCompleted(module.id)
                }, 200)
            }}
        >
            Пропустить {'>'}
        </DesktopButton>
    )
}

const Button = styled.button`
    position: absolute;
    color: #ffffff;
    z-index: 6;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
`

const MobileButton = styled(Button)`
    right: 1.5em;
    top: 0.5em;
    padding: 1rem;
`

const DesktopButton = styled(Button)`
    right: 2.5em;
    bottom: 1.5em;
`
