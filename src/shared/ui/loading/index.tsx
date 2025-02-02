import React, { HtmlHTMLAttributes } from 'react'

import styled from 'styled-components'

import LoadingImage from './loading.gif'

type BaseProps = HtmlHTMLAttributes<HTMLImageElement>

type LoadingProps = BaseProps & {
    width?: string
    height?: string
}

const LoadingStyled = styled.img<{ isInButton?: boolean }>`
    width: 40px;
`

export function Loading(props: LoadingProps) {
    return <LoadingStyled {...props} src={LoadingImage} alt="loading" className="loading-circle" />
}
