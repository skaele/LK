import { IRoutes } from '@app/routes/general-routes'
import { MenuItem } from '@shared/ui/menu-item'
import { Error } from '@ui/error'
import React from 'react'
import styled from 'styled-components'

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
    if (!pages || (!showNotFound && Object.keys(pages).length === 0)) return null

    if (!Object.keys(pages).length && showNotFound) return <Error text="Ничего не было найдено" />

    return (
        <FoundPagesWrapper>
            {Object.values(pages).map((page) => {
                return page?.show !== false && <MenuItem {...page} type="horizontal" key={page.id} />
            })}
        </FoundPagesWrapper>
    )
}

export default FoundPages
