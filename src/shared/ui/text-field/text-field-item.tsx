import { TSettingsFields } from '@pages/settings/types'
import { Colors } from '@shared/constants'
import React from 'react'
import { FiEdit2 } from 'react-icons/fi'
import styled from 'styled-components'

type FieldProps = Omit<TSettingsFields, 'type'> & {
    onClick?: () => void
    rightIcon?: React.ReactNode
    editable?: boolean
    completed?: boolean
    fancyBG?: boolean
}

const TextFieldItem = ({
    title,
    description,
    onClick,
    icon,
    rightIcon,
    editable = true,
    completed,
    fancyBG,
}: FieldProps) => {
    return (
        <TextFieldStyled onClick={onClick} completed={completed} fancyBG={fancyBG}>
            {icon && <div className="icon">{icon}</div>}
            <TextFieldStyledInfo completed={completed}>
                <b>{title}</b>
                <span>{description}</span>
            </TextFieldStyledInfo>
            <RightIconContainer completed={completed}>
                {rightIcon ?? (!editable ? null : <FiEdit2 />)}
            </RightIconContainer>
        </TextFieldStyled>
    )
}

export default TextFieldItem

const RightIconContainer = styled.div<{ completed?: boolean }>`
    color: ${({ completed }) => (completed ? 'var(--greenMain)' : '')};
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s transform;
`

const TextFieldStyledInfo = styled.div<{ completed?: boolean }>`
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${({ completed }) => (completed ? 'var(--greenMain)' : 'var(--text)')};

    b {
        opacity: ${({ completed }) => (completed ? 1 : 0.8)};
        font-weight: 500;
        font-size: 0.85rem;
    }

    span {
        opacity: 0.6;
        font-size: 0.8rem;
        margin-top: 2px;
    }
`

const TextFieldStyled = styled.div<{ completed?: boolean; fancyBG?: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    padding: 0px 12px;
    min-height: 45px;
    border-radius: var(--brLight);

    background: ${({ fancyBG }) => {
        if (!fancyBG) return ''
        return 'linear-gradient(90deg, var(--bgLink1) 0%, var(--block) 50%)'
    }};

    &:hover {
        background: ${({ completed, fancyBG }) => {
            if (!fancyBG) return 'var(--theme-4)'
            return completed
                ? 'linear-gradient(270deg, rgba(60, 210, 136, 0) 0%, rgba(60, 210, 136, 0.4) 100%)'
                : 'linear-gradient(270deg, var(--bgLink2) 0%, var(--bgLink3) 100%)'
        }};

        ${RightIconContainer}, ${TextFieldStyledInfo}, .icon > svg {
            color: var(--text);
        }

        ${RightIconContainer} {
            ${({ fancyBG }) => fancyBG && 'transform: translateX(-10px);'}
        }
    }

    .icon {
        z-index: 2;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
            opacity: 0.4;
            color: ${({ completed }) => (completed ? 'var(--greenMain)' : 'var(--text)')};
        }
    }

    span {
        opacity: 0.8;
    }
`
