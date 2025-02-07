import { useContext } from 'react'

<<<<<<<< HEAD:src/shared/ui/modal/lib/hooks/use-core-modal.ts
import { Context, ModalContext } from '../context/context'
========
import { Context, ModalContext } from '../context'
>>>>>>>> master:src/widgets/modal/lib/hooks/use-core-modal.ts

const useCoreModal = () => {
    const { isOpen, component, canBack, back, close, title } = useContext<ModalContext>(Context)

    return {
        back,
        close,
        isOpen,
        canBack,
        component,
        title,
    }
}

export default useCoreModal
