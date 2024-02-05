import { IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { MEDIA_QUERIES } from '@shared/constants'
import { Divider } from '@shared/ui/divider'
import { LinkItem } from '@shared/ui/link-item'
import React from 'react'
import styled from 'styled-components'

const LinksStyled = styled.div<{ componentHeight?: number }>`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 750px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: ${({ componentHeight }) =>
        !!componentHeight && componentHeight > 33
            ? '120px'
            : !!componentHeight && componentHeight > 10
            ? '110px'
            : '100px'};

    ${MEDIA_QUERIES.isNotMobile} {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    ${MEDIA_QUERIES.isTablet} {
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
                        <LinkItem
                            smallInMobile
                            height="90px"
                            minWidth="120px"
                            showBoxShadow={false}
                            textIconGap="0px"
                            showMore={false}
                            {...links[key]}
                            type="vertical"
                        />
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
