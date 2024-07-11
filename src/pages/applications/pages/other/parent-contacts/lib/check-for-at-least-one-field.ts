import { IInputArea } from '@shared/ui/input-area/model'

export const checkForAtLeastOneField = (data: IInputArea[]) => {
    return data.some((form) =>
        form.data.some((field) =>
            Array.isArray(field) ? field.some((item) => item.value) : typeof field === 'boolean' ? field : field.value,
        ),
    )
}
