import { MutableRefObject, useEffect, useState } from 'react'
import { Hint } from '@ui/search'

type InputCoords = {
    left: number
    top: number
    width: number
}

type Args = {
    inputRef: MutableRefObject<HTMLDivElement | null>
    hintsListRef: MutableRefObject<HTMLDivElement | null>
    hintsListPortalMode: boolean
    openHints: boolean
    hints: Hint[] | undefined
}

const useHintsListPortal = ({ inputRef, hintsListRef, hintsListPortalMode, openHints, hints }: Args) => {
    const [inputCoords, setInputCoords] = useState<InputCoords | null>(null)

    useEffect(() => {
        if (!!inputRef.current && !!hintsListRef.current && hintsListPortalMode) {
            const {
                left: inputLeftSide,
                top: inputTopSide,
                bottom: inputBottomSide,
                height: inputHeight,
                width: inputWidth,
            } = inputRef.current.getBoundingClientRect()
            const { height: hintsListHeight, width: hintsListWidth } = hintsListRef.current.getBoundingClientRect()

            const topPoint =
                // Если потенциальный список будет выходить за нижний край экрана,
                // расположить его сверху; иначе — снизу
                inputBottomSide + hintsListHeight + 8 > document.documentElement.clientHeight
                    ? inputTopSide - hintsListHeight - 8
                    : inputTopSide + inputHeight + 8

            const leftPoint = (() => {
                // Если потенциальный список будет выходить за правый край экрана,
                // прибить его к правому краю экрана
                if (inputLeftSide + hintsListWidth > document.documentElement.clientWidth) {
                    return document.documentElement.clientWidth - hintsListWidth
                }

                // Если потенциальный список будет выходить за левый край экрана,
                // прибить его к левому краю экрана
                if (inputLeftSide < 0) {
                    return 0
                }

                // Если не граничный случай — выровнять левый край списка с левым краем инпута
                return inputLeftSide
            })()

            setInputCoords({ top: topPoint, left: leftPoint, width: inputWidth })
        }
    }, [openHints, hints])

    return {
        inputCoords,
    }
}

export default useHintsListPortal
