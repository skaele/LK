import styled from 'styled-components'

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    max-height: 100%;
    flex: 1;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`

export const PageContent = styled.div<{ withHeader?: boolean }>`
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-gutter: stable;
    padding-top: ${({ withHeader }) => (withHeader ? 'var(--header-height)' : '0')};
    width: 100%;
    flex: 1;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
    }
`
