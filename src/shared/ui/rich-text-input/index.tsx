import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
// import Highlight from "@tiptap/extension-highlight";
import React from 'react'
import { MenuBar } from './menu-bar'
import OrderedList from '@tiptap/extension-ordered-list'
import sanitize from 'sanitize-html'
import styled from 'styled-components'
import Placeholder from '@tiptap/extension-placeholder'

type RichTextInputProps = {
    value: string
    setValue(value: string): void
    placeholder?: string
}

export const RichTextInput = ({ value, placeholder, setValue }: RichTextInputProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            OrderedList,
            Placeholder.configure({
                placeholder,
            }),
        ],
        content: value,
        onUpdate({ editor }) {
            setValue(sanitize(editor.getHTML()))
        },
    })

    if (!editor) return null

    return (
        <Wrapper>
            <MenuBar editor={editor} />
            <StyledEditorContent editor={editor} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 8px;
    flex: 1;
    justify-content: space-between;

    flex-direction: column;
`

const StyledEditorContent = styled(EditorContent)`
    .tiptap {
        &:not(:focus) p {
            &.is-editor-empty:first-child::before {
                content: attr(data-placeholder);
                color: var(--text-color);
                font-weight: 300;
                float: left;
                height: 0;
            }
        }

        & p {
            color: var(--text);
            outline: none;
            background: var(--theme-1);
            width: 100%;
            padding: 10px;

            border-radius: 7px;

            /* list-style-position: inside; */

            &:focus-visible {
                outline: 4px solid var(--almostTransparentOpposite);
            }

            &:focus:not(:focus-visible) {
                outline: none;
            }
        }
    }
`
