import retakeRoutes from '@features/schedule/config/retake-routes'
import Flex from '@shared/ui/flex'
import { LinkItem } from '@shared/ui/link-item'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

const LinksListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--text);
`

const RetakeSchedule = () => {
    const { open } = useModal()

    return (
        <LinksListWrapper>
            <Flex $wrap gap="8.2px">
                {Object.values(retakeRoutes).map(({ Component: Modal, id, title, color, icon, path }) => {
                    const hasModal = !!Modal({})

                    return (
                        <LinkItem
                            key={id}
                            as={hasModal ? 'button' : 'a'}
                            title={title}
                            path={hasModal ? '' : path}
                            id={id}
                            color={color}
                            icon={icon}
                            showMore={false}
                            onClick={hasModal ? () => open(<Modal />, title) : undefined}
                            showCurrent={false}
                            isExternalPage={!hasModal}
                            type="vertical"
                        />
                    )
                })}
            </Flex>
        </LinksListWrapper>
    )
}

export default RetakeSchedule
