import React from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'

import styled from 'styled-components'
import { useModal } from 'widgets'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

import { Modal } from './ui/modal'

const AddButtonStyled = styled.button`
    width: fit-content;
    padding: 0 12px;
    height: 36px;
    background: var(--search);
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    color: var(--text);

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        filter: brightness(0.98);
    }
`

export const AddNewChat = ({ forwardedRef }: TutorialComponent) => {
    const { open } = useModal()

    const handleClick = () => {
        open(<Modal />, 'Новое сообщение')
    }

    return (
        <AddButtonStyled ref={forwardedRef} onClick={handleClick}>
            <HiOutlinePencilAlt />
            Написать
        </AddButtonStyled>
    )
}
