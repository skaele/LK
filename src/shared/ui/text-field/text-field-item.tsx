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
            {rightIcon ?? (!editable ? null : <FiEdit2 />)}
            {fancyBG && <CompletedBackground completed={completed} />}
        </TextFieldStyled>
    )
}

export default TextFieldItem

const CompletedBackground = styled.div<{
    completed?: boolean
}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--brLight);
    overflow: hidden;
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        box-shadow: 40px 20px 100px 50px ${({ completed }) => (completed ? Colors.green.main : 'var(--theme-4)')};
        transition: 0.2s all;
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

    background-color: ${({ completed }) => (completed ? Colors.green.transparent3 : '')};

    &:hover {
        background: ${({ completed, fancyBG }) => {
            if (fancyBG) return ''
            return completed ? Colors.green.main : 'var(--theme-4)'
        }};

        ${CompletedBackground}::after {
            box-shadow: 0 20px 110px 100px ${({ completed }) => (completed ? Colors.green.main : 'var(--theme-4)')};
        }
    }

    .icon {
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
        }
    }

    span {
        opacity: 0.8;
    }
`

const TextFieldStyledInfo = styled.div<{ completed?: boolean }>`
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;

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
