import styled from 'styled-components'

export const TrainingLayout = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TrainingWelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 530px; // !!!
    padding: 30px 40px 30px 60px;
`

export const TrainingWelcome = styled.div`
    position: relative;
    display: flex;
    border-radius: 15px;
    overflow: hidden;
    backdrop-filter: blur(6.8px);
    background: rgba(95, 109, 236, 0.7);
`

export const Title = styled.h2`
    color: #f4f4f4;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
`

export const Text = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 139%;
    color: #f4f4f4;
    margin-bottom: 20px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`
