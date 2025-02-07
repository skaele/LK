import { TutorialId } from '@shared/api/tutorial/types'

export type HintPosition = 'right' | 'bottom' | 'top' | 'left'

export type Dimensions = { width: number; height: number }

export type Position = { top: number; left: number; right: number; bottom: number }

export interface TutorialWrapperProps {
    tutorialModule?: {
        id: TutorialId
        step: number | number[]
        params?: {
            noPadding?: boolean
            position?: HintPosition

            // TODO: implement
            inside?: boolean
            widthMatchParent?: boolean
            heightMatchParent?: boolean
            noScroll?: boolean
        }
    }
}
