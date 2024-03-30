import React from 'react'
import { useModal } from 'widgets'
import TextFieldItem from '../text-field/text-field-item'
import ChangeAvatar from '../../../../features/change-avatar'
import { FieldProps } from '@pages/settings/types'

const PhotoField = (props: Omit<FieldProps, 'type'>) => {
    const { open } = useModal()
    const handleClick = () => {
        open(<ChangeAvatar />)
    }
    return <TextFieldItem {...props} onClick={handleClick} />
}

export default PhotoField
