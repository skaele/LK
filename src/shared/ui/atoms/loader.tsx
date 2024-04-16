import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Loading } from '../loading'
import { Error } from '../error'
import { Button } from '../button'
import { AiOutlineReload } from 'react-icons/ai'

interface Props {
    children?: React.ReactElement | React.ReactElement[] | string | null
    load: () => void
    loading?: boolean
    error: string | null
    data: any | null
    deps?: any[]
    couldBeReloaded?: boolean
}

type StyledProps = { $loading: boolean }

const WrapperBlock = styled.div`
    position: relative;
    width: 100%;
    padding: 10px;
    height: 100%;

    @media (max-width: 550px) {
        padding: 10px;
    }
`

const LoadingBlock = styled.div<StyledProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.2s;
    opacity: ${({ $loading }) => ($loading ? 1 : 0)};
    visibility: ${({ $loading }) => ($loading ? 'visible' : 'hidden')};
    transform: scale(${({ $loading }) => ($loading ? '1' : '0.98')});
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    img {
        width: 40px;
    }
`

const ContentBlock = styled.div`
    transition: 0.2s;
    height: 100%;
`

const ReloadBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text);

    & > * + * {
        margin-top: 10px;
    }
`

export const Loader = ({ children, load, loading, error, data, deps = [], couldBeReloaded }: Props) => {
    useEffect(() => {
        if (!data && !loading) {
            load()
        }
    }, deps)

    return (
        <WrapperBlock>
            <LoadingBlock $loading={!!error || !data}>
                {!error ? (
                    <Loading />
                ) : (
                    <ReloadBlock>
                        <Error text={error}>
                            {couldBeReloaded && (
                                <Button onClick={() => load()} text="Загрузить снова" icon={<AiOutlineReload />} />
                            )}
                        </Error>
                    </ReloadBlock>
                )}
            </LoadingBlock>
            {!error && !!data && <ContentBlock>{children}</ContentBlock>}
        </WrapperBlock>
    )
}
