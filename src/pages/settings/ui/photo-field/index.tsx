import React from 'react'

import { useModal } from '@shared/ui/modal'
import { FieldProps } from '@shared/ui/text-field/types'

import ChangeAvatar from '../../../../features/change-avatar'
import TextFieldItem from '../../../../shared/ui/text-field/text-field-item'

const PhotoField = (props: Omit<FieldProps, 'type'>) => {
    const { open } = useModal()
    const handleClick = () => {
        open(<ChangeAvatar />)
    }
    return <TextFieldItem {...props} onClick={handleClick} />
}

export default PhotoField
