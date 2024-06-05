import { Editor } from '@tiptap/react'
import React from 'react'
import { FaBold, FaItalic, FaListOl, FaListUl, FaStrikethrough } from 'react-icons/fa'
import { Button } from '../atoms'
import styled from 'styled-components'
import { Colors } from '@shared/constants'

type MenuBarProps = {
    editor: Editor
}

export const MenuBar = ({ editor }: MenuBarProps) => {
    return (
        <Wrapper>
            <MenuBarButton
                background={editor.isActive('bold') ? Colors.blue.main : undefined}
                textColor={editor.isActive('bold') ? Colors.white.main : undefined}
                height="26px"
                width="26px"
                onClick={() => editor.chain().focus().toggleBold().run()}
                icon={<FaBold />}
            />

            <MenuBarButton
                background={editor.isActive('italic') ? Colors.blue.main : undefined}
                textColor={editor.isActive('italic') ? Colors.white.main : undefined}
                height="24px"
                width="24px"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                icon={<FaItalic />}
            />
            <MenuBarButton
                background={editor.isActive('strike') ? Colors.blue.main : undefined}
                textColor={editor.isActive('strike') ? Colors.white.main : undefined}
                height="24px"
                width="24px"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                icon={<FaStrikethrough />}
            />

            <MenuBarButton
                background={editor.isActive('orderedList') ? Colors.blue.main : undefined}
                textColor={editor.isActive('orderedList') ? Colors.white.main : undefined}
                height="24px"
                width="24px"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                icon={<FaListOl />}
            />

            <MenuBarButton
                background={editor.isActive('bulletList') ? Colors.blue.main : undefined}
                textColor={editor.isActive('bulletList') ? Colors.white.main : undefined}
                height="24px"
                width="24px"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                icon={<FaListUl />}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;

    flex-direction: row;
    gap: 5px;
`

const MenuBarButton = styled(Button)`
    svg {
        width: 12px !important;
        height: 12px !important;
    }
`
