import styled from 'styled-components'
import LoadingImage from '../../images/loading.gif'
import React from 'react'

export const ButtonLoading = () => {
    return <LoadingStyled src={LoadingImage} alt="loading" className="loading-circle" />
}

const LoadingStyled = styled.img`
    position: relative;
    transform: none;
    left: auto;
    top: auto;
    width: 30px;
    height: 30px;
`
