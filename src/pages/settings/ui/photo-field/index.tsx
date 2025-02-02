import React from 'react'

import { FieldProps } from '@pages/settings/types'

import { useModal } from '@shared/ui/modal'

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
