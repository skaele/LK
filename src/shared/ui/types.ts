export type HeaderSize = 1 | 2 | 3 | 4 | 5 | 6

export type Shape = 'rect' | 'circle'
export type Align = 'left' | 'center' | 'right'
export type VerticalAlign = 'top' | 'center' | 'bottom' | 'space-between'
export type Direction = 'horizontal' | 'vertical'
export type Coordinates = { x: number; y: number }
export type Size = 'small' | 'middle' | 'big'
export type ExtSize = Size | 'large'

export type ClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>

export type TutorialComponent = {
    forwardedRef?: (node: HTMLElement | null) => void
}
