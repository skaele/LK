import { Effect, EventCallable } from 'effector'

<<<<<<<< HEAD:src/features/send-form/send-form.ts
import prepareFormData from '@features/send-form/prepare-form-data'

import { IInputArea } from '@shared/ui/input-area/model'
import { popUpMessageModel } from '@shared/ui/pop-up-message'
========
import { popUpMessageModel } from '@entities/pop-up-message'

import { IInputArea } from '@ui/input-area/model'

import prepareFormData from '@utils/prepare-form-data'
>>>>>>>> master:src/shared/lib/send-form.ts

const sendForm = async <T>(
    form: IInputArea,
    post: Effect<T, void, Error> | Effect<T, string, Error>,
    setLoading: (loading: boolean) => void,
    setCompleted: EventCallable<{
        completed: boolean
    }>,
    formId?: string,
) => {
    setLoading(true)
    const data = prepareFormData<T>(form)

    try {
        formId ? await post({ ...data, formId: formId }) : await post({ ...data })
        // await post(data)
        setLoading(false)
        setCompleted({ completed: true })
    } catch (error) {
        setLoading(false)

        popUpMessageModel.events.evokePopUpMessage({
            message: `${error as string}`,
            type: 'failure',
            time: 30000,
        })
    }
}

export default sendForm
