import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    background: var(--theme);
    height: 100svh;
    height: 100dvh;
    height: 100vh;
`

export const ContentWrapper = styled.div`
    width: 100%;

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
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding-top: ${({ withHeader }) => (withHeader ? 'var(--header-height)' : '0')};
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        margin-bottom: var(--mobile-bottom-menu-height);
        height: calc(100% - var(--mobile-bottom-menu-height));
    }
`
