import { useContext } from 'react'

<<<<<<<< HEAD:src/shared/ui/modal/lib/hooks/use-modal.ts
import { Context, ModalContext } from '../context/context'
========
import { Context, ModalContext } from '../context'
>>>>>>>> master:src/widgets/modal/lib/hooks/use-modal.ts

export interface IModal {
    isOpen: boolean
    back: () => void
    open: (Component: React.ReactElement<any, any> | undefined, title?: string, deps?: unknown[]) => void
    close: () => void
}

export const useModal = (): IModal => {
    const { open, isOpen, ...rest } = useContext<ModalContext>(Context)

    return {
        open,
        isOpen,
        ...rest,
    }
}
