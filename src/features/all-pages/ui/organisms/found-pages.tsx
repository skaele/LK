import { IRoutes } from '@app/routes/general-routes'
import { LinkItem } from '@shared/ui/link-item'
import { Error } from '@ui/error'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

const FoundPagesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

interface Props {
    pages: IRoutes | null
    showNotFound?: boolean
}

const FoundPages = ({ pages, showNotFound = true }: Props) => {
    const { close } = useModal()
    if (!pages || (!showNotFound && Object.keys(pages).length === 0)) return null

    if (!Object.keys(pages).length && showNotFound) return <Error text="Ничего не было найдено" />

    return (
        <FoundPagesWrapper>
            {Object.values(pages).map((page) => {
                return (
                    page?.show !== false && (
                        <LinkItem
                            onClick={close}
                            {...page}
                            subtext={page.keywords?.map((word) => `#${word}`).join(' ')}
                            type="horizontal"
                            key={page.id}
                        />
                    )
                )
            })}
        </FoundPagesWrapper>
    )
}

export default FoundPages
