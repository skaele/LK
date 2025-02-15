import React, { useEffect, useRef, useState } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { SliderTutorial } from '@features/tutorials'

import useResize from '@shared/lib/hooks/use-resize'
import { tutorialModel } from '@shared/tutorial'
import { Error } from '@shared/ui/atoms'
import convertHorizontalAlign from '@shared/ui/list/lib/convert-horizontal-align'
import { Align } from '@shared/ui/types'

const SliderPageWrapper = styled.div<{ width?: string; align: Align; maxWidth?: string }>`
    display: flex;
    align-items: ${({ align }) => convertHorizontalAlign(align)};
    flex-direction: column;
    width: ${({ width }) => width ?? '100%'};
    max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
    height: 100%;

    & > .slider-content {
        display: flex;
        width: 100%;
        max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
        overflow-x: auto;
        margin-top: 10px;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar {
            display: none;
        }

        & > * + * {
            margin-left: 10px;
        }

        .slider-page {
            height: 100%;
            min-width: 100%;
            scroll-snap-align: center;
        }
    }

    @media (max-width: 1000px) {
        & > div {
            scroll-behavior: smooth;

            .slider-page {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }
    }
`

export interface Page {
    id?: string
    title: string
    condition?: boolean
    content: React.ReactNode
}

interface Props {
    pages: Page[]
    currentPage?: number
    width?: string
    maxWidth?: string
    className?: string
    sliderWidth?: string
    appearance?: boolean
    align?: Align
    onChangePage?: (pageId?: string) => void
}

const SliderPage = ({
    pages,
    currentPage = 0,
    width,
    className,
    maxWidth,
    sliderWidth,
    onChangePage,
    align = 'center',
    appearance = true,
}: Props) => {
    const [page, setPage] = useState(currentPage)
    const { width: screenWidth } = useResize()
    const sliderContentRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = () => {
        if (sliderContentRef?.current) {
            setPage(Math.round(sliderContentRef.current?.scrollLeft / sliderContentRef.current?.clientWidth))
        }
    }

    const handleChangePage = (page: number) => {
        setPage(page)
        onChangePage?.(pages[page]?.id)

        if (sliderContentRef?.current) {
            sliderContentRef.current.scrollLeft = (sliderContentRef.current.clientWidth + 10) * page
        }
    }

    useEffect(() => {
        handleChangePage(page)
    }, [currentPage, screenWidth])

    const roles = useUnit(tutorialModel.stores.roles)

    return (
        <SliderPageWrapper width={width} align={align} maxWidth={maxWidth}>
            <SliderTutorial
                pages={pages.map(({ title, condition }) => ({
                    title,
                    condition,
                }))}
                currentPage={page}
                setCurrentPage={handleChangePage}
                sliderWidth={sliderWidth}
                appearance={appearance}
                tutorialModule={{
                    id: 'payments',
                    step: roles.includes('dormitory') && roles.includes('education') ? 0 : -1,
                    params: { position: 'bottom', noScroll: true },
                }}
            />
            <div className={className ?? 'slider-content'} ref={sliderContentRef} onScroll={handleScroll}>
                {pages.map((page) =>
                    (page.condition !== undefined && page.condition) || page.condition === undefined ? (
                        <div className="slider-page" key={page.title}>
                            {page.content}
                        </div>
                    ) : (
                        <div className="slider-page" key={page.title}>
                            <Error text={'Нет данных'} />
                        </div>
                    ),
                )}
            </div>
        </SliderPageWrapper>
    )
}

export default SliderPage
