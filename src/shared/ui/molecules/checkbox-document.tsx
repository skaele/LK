import React from 'react'

import styled from 'styled-components'

import Checkbox, { CheckboxProps } from '@ui/checkbox'
import FileInput, { FileInputProps } from '@ui/file-input'

const CheckboxDocumentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

type Props = { checkbox: CheckboxProps; loadfile: FileInputProps; docVisible: boolean }

const CheckboxDocument = ({ checkbox, loadfile, docVisible }: Props) => {
    return (
        <CheckboxDocumentWrapper>
            <Checkbox {...checkbox} />
            {docVisible && <FileInput {...loadfile} />}
        </CheckboxDocumentWrapper>
    )
}

export default CheckboxDocument
