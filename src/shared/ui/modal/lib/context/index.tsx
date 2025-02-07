<<<<<<<< HEAD:src/shared/ui/modal/lib/context/index.tsx
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useUnit } from 'effector-react'
========
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { useUnit } from 'effector-react'
import { modalModel } from 'widgets/modal/model'
>>>>>>>> master:src/widgets/modal/lib/context/index.tsx

import { modalModel } from '../../model'
import { Context } from './context'

interface Props {
    children: JSX.Element
}

export const ModalProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [titles, setTitles] = useState<string[]>([])
    const [openModals, setOpenModals] = useState<React.ReactElement<any, any>[]>([])
    const isModalOpen = useUnit(modalModel.stores.$isModalOpen)

    const canBack = openModals.length > 1

    const back = useCallback(() => {
        if (canBack) {
            openModals.pop()
            titles.pop()
            setOpenModals([...openModals])
            setTitles([...titles])
        }
    }, [openModals, setOpenModals])

    const open = useCallback(
        (Component: React.ReactElement<any, any> | undefined, title?: string) => {
            if (Component) {
                if (!isOpen) {
                    setOpenModals(() => [Component])
                    setTitles(title ? [title] : [])
                } else {
                    setOpenModals(() => [...openModals, Component])
                    setTitles(() => [...titles, title ?? ''])
                }
                setIsOpen(() => true)
                modalModel.events.open()
            }
        },
        [setOpenModals, setIsOpen, openModals, isOpen],
    )

    const close = useCallback(() => {
        setIsOpen(() => false)
        modalModel.events.close()
    }, [setOpenModals, setIsOpen])

    const component = useMemo(() => openModals[openModals.length - 1], [openModals])
    const title = useMemo(() => titles[titles.length - 1], [titles])

    const setComponent = useCallback((Component: React.ReactElement<any, any> | undefined) => {
        if (Component) {
            setOpenModals([...openModals, Component])
        }
    }, [])

    useEffect(() => {
        if (isModalOpen !== isOpen) {
            setIsOpen(isModalOpen)
        }
    }, [isModalOpen])

    return (
        <Context.Provider
            value={{
                back,
                open,
                close,
                isOpen,
                canBack,
                component,
                title,
                setComponent,
            }}
        >
            {children}
        </Context.Provider>
    )
}
