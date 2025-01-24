// import Highlight from "@tiptap/extension-highlight";
import React, { useEffect, useRef } from 'react'

import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import sanitize from 'sanitize-html'
import styled from 'styled-components'

import { MenuBar } from './menu-bar'

type RichTextInputProps = {
    value: string
    setValue(value: string): void
    placeholder?: string
    disabled?: boolean
}

export const RichTextInput = ({ value, placeholder, setValue, disabled }: RichTextInputProps) => {
    const valueSetted = useRef(false)

    const editor = useEditor({
        extensions: [
            StarterKit,
            BulletList,
            OrderedList,
            ListItem,
            Placeholder.configure({
                placeholder,
            }),
        ],
        content: value,
        onUpdate({ editor }) {
            setValue(sanitize(editor.getHTML()))
        },
    })

    useEffect(() => {
        if (!value && editor) {
            editor.commands.clearContent()
        }

        if (value && !valueSetted.current) {
            editor?.commands.setContent(value)
            valueSetted.current = true
        }
    }, [value])

    if (!editor) return null

    return (
        <Wrapper>
            <MenuBar disabled={disabled} editor={editor} />
            <StyledEditorContent editor={editor} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 8px;
    flex: 1;
    width: 0;
    justify-content: space-between;

    flex-direction: column;
`

const StyledEditorContent = styled(EditorContent)`
    .ProseMirror:not(:focus) p.is-editor-empty:first-child::before {
        content: attr(data-placeholder);
        color: var(--text-color);
        font-weight: 300;
    }

    li {
        margin-left: 1em;
    }

    .tiptap {
        color: var(--text);
        outline: none;
        background: var(--theme-1);
        width: 100%;
        padding: 10px;

        max-height: 300px;
        overflow-y: auto;
        font-size: 0.85rem;
        border-radius: 7px;

        &:focus-visible {
            outline: 4px solid var(--almostTransparentOpposite);
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }
`
