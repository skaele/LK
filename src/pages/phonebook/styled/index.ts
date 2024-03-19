import styled from 'styled-components'

export const Header = styled.div<{ bgColor: string; padingLeft?: string }>`
    position: absolute;
    display: flex;
    align-items: flex-end;
    top: 0;
    left: 0;
    height: 200px;
    width: 100%;
    background-color: ${({ bgColor }) => bgColor};
    z-index: -1;
    color: #fff;
    padding: 20px 50px;
    padding-left: ${({ padingLeft }) => padingLeft};
`

export const Avatar = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 5px solid var(--block);
    width: 150px;
    height: 150px;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 175px 55px 40px 55px;
`
