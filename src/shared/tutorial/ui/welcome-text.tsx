import styled from 'styled-components'

<<<<<<<< HEAD:src/shared/tutorial/ui/welcome-text.tsx
import { FadeOut } from './fade-out-animation'
========
import { FadeOut } from '../lib/with-tutorial'
>>>>>>>> master:src/widgets/tutorial/ui/welcome-text.tsx

export const TutorialHeroLayout = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 8px;

    @media (min-width: 1000px) {
        justify-content: center;
        align-items: center;
    }
`

export const TutorialHeroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1000px) {
        width: 60ch;
        max-width: 600px;
        padding: 40px 40px 40px 60px;
    }
`

export const Hero = styled.div<{ deleted?: boolean }>`
    min-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 15px;
    backdrop-filter: blur(6.8px);
    background: rgba(95, 109, 236, 0.7);
    padding: 16px;

    @media (min-width: 1000px) {
        padding: 0;
        bottom: auto;
        min-width: 0;
        max-width: 90%;
        flex-direction: row;
    }

    animation: ${({ deleted }) => (deleted ? FadeOut : '')} 150ms ease-in forwards;
`

export const Title = styled.h2`
    margin-top: 32px;
    margin-bottom: 16px;
    color: #f4f4f4;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;

    @media (min-width: 1000px) {
        margin-bottom: 40px;
    }
`

export const Text = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 139%;
    color: #f4f4f4;
    margin-bottom: 20px;
`

export const Buttons = styled.div`
    margin: auto 0 0 0;
    display: flex;
    justify-content: space-between;
`
