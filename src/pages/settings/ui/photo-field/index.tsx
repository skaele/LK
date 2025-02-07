import React from 'react'

import { useModal } from 'widgets'

import { FieldProps } from '@pages/settings/types'

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
