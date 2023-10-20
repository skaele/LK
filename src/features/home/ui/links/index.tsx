import { IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { Divider } from '@shared/ui/divider'
import { MenuItem } from '@shared/ui/menu-item'
import React from 'react'
import styled from 'styled-components'

const LinksStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 750px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: 90px;

    @media (max-width: 1000px) {
        height: 75px;
    }
`

type Props = {
    links: IRoutes
}

const Links = ({ links }: Props) => {
    const linksKeysArray = Object.keys(links)
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!allRoutes) return null

    return (
        <LinksStyled>
            {linksKeysArray.map((key, index) => {
                return (
                    <React.Fragment key={key}>
                        <MenuItem {...links[key]} type="vertical" />
                        {index !== linksKeysArray.length - 1 && (
                            <Divider direction="vertical" margin="10px 0" width="70%" />
                        )}
                    </React.Fragment>
                )
            })}
        </LinksStyled>
    )
}

export default Links
