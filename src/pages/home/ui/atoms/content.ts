import styled from 'styled-components'

export const Content = styled.div`
    /* display: flex;
	justify-content: center; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--text);
    height: 100%;
    padding: var(--desktop-page-padding);

    .home-page-content-inner {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    @media (max-width: 1000px) {
        margin: 0;
    }

    @media (max-width: 600px) {
        padding-top: 30px;
    }
`
