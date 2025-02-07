import { createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'

import { Align, VerticalAlign } from '@shared/ui/types'

export type StyledProps = {
    textAlign?: Align
    color?: string
    align: { horizontal: Align; vertical: VerticalAlign }
    imageAlign?: { horizontal?: Align; vertical?: VerticalAlign }
    background?: string
}

export type StoryProps = StyledProps & {
    title: string
    text?: string
    image?: string
    children?: ChildrenType
    imageSize?: { width: string; height: string }
    link?: {
        text: string
        to: string
    }
}

export interface IStory {
    isOpen: boolean
    pages: StoryProps[]
    currentPage: number
}

const DEFAULT_STORE: IStory = {
    isOpen: false,
    pages: [],
    currentPage: 0,
}

const useStory = () => {
    return useStore($story)
}

const open = createEvent<{ pages: StoryProps[] }>()

const close = createEvent()
const changeCurrentPage = createEvent<{ value: number }>()
const clearStore = createEvent()

const $story = createStore<IStory>(DEFAULT_STORE)
    .on(open, (_, { pages }) => ({
        isOpen: true,
        pages,
        currentPage: 0,
    }))
    .on(close, (oldState) => ({
        pages: oldState.pages,
        currentPage: oldState.currentPage,
        isOpen: false,
    }))
    .on(changeCurrentPage, (oldData, { value }) => ({
        ...oldData,
        currentPage: value,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useStory,
}

export const events = {
    open,
    close,
    clearStore,
    changeCurrentPage,
}
