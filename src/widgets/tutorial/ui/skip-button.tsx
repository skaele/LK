import { tutorialModel } from '@entities/tutorial'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'

export const SkipButton = () => {
    const module = useUnit(tutorialModel.stores.currentModule)
    if (!module) return null
    return <Button onClick={() => tutorialModel.events.completeModule(module.id)}>Пропустить {'>'}</Button>
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
