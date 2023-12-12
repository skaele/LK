import PerhapsYouMeant from '@features/perhaps-you-meant'
import { Colors } from '@shared/constants'
import useOnClickOutside from '@shared/lib/hooks/use-on-click-outside'
import limitNumber from '@shared/lib/limit-number'
import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import { Input } from '../atoms'
import BlockWrapper from '../block/styles'
import { Size } from '../types'
import { createPortal } from 'react-dom'
import useHintsListPortal from '@ui/search/lib/use-hints-list-portal'

const SearchStyled = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({ width }) => width ?? '100%'};
    position: relative;
`

const Hints = styled(BlockWrapper)<{ top?: number; left?: number }>`
    position: absolute;
    top: ${({ top = 45 }) => `${top}px`};
    z-index: 10;
    height: auto;
    width: ${({ width }) => width};
    left: ${({ left = 0 }) => `${left}px`};
    overflow-y: auto;
`

const HintItem = styled.div<{ selected: boolean }>`
    padding: 8px 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: ${({ selected }) => (selected ? '600' : '500')};
    color: ${({ selected }) => (selected ? '#fff' : 'var(--text)')};
    background: ${({ selected }) => (selected ? Colors.blue.main : 'transparent')};
    font-size: 0.85rem;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 16px;
            height: 16px;
        }
    }

    &:hover {
        background: ${({ selected }) => (selected ? Colors.blue.main : 'var(--theme-1)')};
    }
`

export type Hint = {
    id: string
    value: string
    title: string
    icon?: ChildrenType
}

type SearchProps = {
    value: string
    setValue: (value: string) => void
    width?: string
    placeholder?: string
    inputAppearance?: boolean
    validationCheck?: boolean
    loading?: boolean
    hints?: Hint[]
    leftIcon?: ChildrenType
    focusOn?: any
    onHintClick?: (hint: Hint | undefined) => void
    customMask?: (value: string, prevValue?: string) => string
    size?: Size
    hintsListPortalMode?: boolean
    hideInputCross?: boolean
}

const Search = ({
    value,
    width,
    placeholder,
    inputAppearance,
    loading,
    hints,
    leftIcon,
    focusOn,
    setValue,
    customMask,
    onHintClick,
    validationCheck = false,
    size = 'middle',
    hintsListPortalMode = false,
    hideInputCross = false,
}: SearchProps) => {
    const [currentSelectedHint, setCurrentSelectedHint] = useState<number | null>(0)
    const [openHints, setOpenHints] = useState(false)
    const hintsRef = useRef<HTMLDivElement>(null)
    const hintsListRef = useRef<HTMLDivElement>(null)
    const selectedRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const { inputCoords } = useHintsListPortal({
        hintsListPortalMode,
        hintsListRef,
        inputRef,
        openHints,
        hints,
    })

    useOnClickOutside(hintsRef, () => setOpenHints(false))

    useEffect(() => {
        if (focusOn) {
            setTimeout(() => inputRef.current?.focus(), 50)
        }
    }, [focusOn])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if ((hints?.length ?? 0) > 0 || loading) setOpenHints(true)

        if (e.key === 'ArrowDown') {
            selectedRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
            if (typeof currentSelectedHint === 'number')
                setCurrentSelectedHint(limitNumber(currentSelectedHint + 1, (hints?.length ?? 1) - 1, 0))
        } else if (e.key === 'ArrowUp') {
            selectedRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })
            if (typeof currentSelectedHint === 'number')
                setCurrentSelectedHint(limitNumber(currentSelectedHint - 1, (hints?.length ?? 1) - 1, 0))
        } else if (e.key === 'Enter') {
            hints?.[currentSelectedHint ?? 0].title && setValue(hints?.[currentSelectedHint ?? 0].title)
            setOpenHints(false)
            onHintClick?.(hints?.[currentSelectedHint ?? 0])
        } else setCurrentSelectedHint(0)
    }

    const handleItemClick = (index: number) => {
        return () => {
            setCurrentSelectedHint(index)
            setValue(hints?.[index].title ?? '')
            setOpenHints(false)
            onHintClick?.(hints?.[index])
        }
    }

    const handleMouseDown = () => {
        if (hints?.length) setOpenHints(true)
    }

    const hintsList = (
        <Hints
            height="fit-content"
            maxWidth={hintsListPortalMode ? width : '100%'}
            maxHeight="250px"
            width="100%"
            onKeyDown={handleKeyDown}
            padding="0"
            orientation="vertical"
            top={inputCoords?.top}
            left={inputCoords?.left}
            onMouseDown={hintsListPortalMode ? (e) => e.stopPropagation() : undefined}
            onTouchStart={hintsListPortalMode ? (e) => e.stopPropagation() : undefined}
            ref={hintsListRef}
        >
            {hints?.map(({ title, icon }, index) => {
                const selected = currentSelectedHint === index
                return (
                    <HintItem
                        onClick={handleItemClick(index)}
                        key={title + index}
                        ref={selected ? selectedRef : null}
                        selected={selected}
                    >
                        {icon && <div className="icon">{icon}</div>}
                        <span>{title}</span>
                    </HintItem>
                )
            })}
        </Hints>
    )

    return (
        <SearchStyled width={width} onKeyDown={handleKeyDown} onMouseDown={handleMouseDown} ref={hintsRef}>
            <Input
                size={size}
                value={value}
                placeholder={placeholder}
                leftIcon={leftIcon ?? <FiSearch />}
                inputAppearance={inputAppearance}
                setValue={setValue}
                loading={loading}
                width={width}
                mask
                customMask={customMask}
                ref={inputRef}
                hideCross={hideInputCross}
            />
            <PerhapsYouMeant setValue={setValue} value={value} visible={validationCheck} />
            {!hintsListPortalMode && openHints && hintsList}
            {hintsListPortalMode && openHints && createPortal(hintsList, document.body)}
        </SearchStyled>
    )
}

export default Search
