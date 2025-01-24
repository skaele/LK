import { SelectPage } from '@features/select'

import { IndexedProperties } from '@shared/models/indexed-properties'
import { CheckboxDocs, IComplexInputAreaData, IInputArea, IInputAreaData } from '@shared/ui/input-area/model'

import prepareFormData from '../prepare-form-data'

export const parseInputArea = (inputAreas: IInputArea[], isAttachedFiles = false) => {
    const inputs = inputAreas
        .map((listElementForm) => {
            if (isAttachedFiles) return prepareFormData<IndexedProperties>(listElementForm)

            if (!Array.isArray(listElementForm.data[0])) {
                return (listElementForm.data as IInputAreaData[]).map((elementForm) => {
                    return createResultElementForm(elementForm)
                })
            } else {
                if (listElementForm.id) {
                    const resultNestedElementForm = (listElementForm.data as IComplexInputAreaData).map(
                        (nestedListElementForm) => {
                            return Object.assign(
                                {},
                                ...nestedListElementForm?.map((elementForm) => {
                                    return createResultElementForm(elementForm)
                                }),
                            )
                        },
                    )
                    const obj = {} as IndexedProperties

                    obj[listElementForm.id] = resultNestedElementForm

                    return obj
                }
            }
        })
        .flat()

    const files = inputAreas.map((area) => {
        const obj: IndexedProperties = {}
        if (area.documents?.fieldName) {
            for (let fileIndex = 0; fileIndex < area.documents.files.length; fileIndex++) {
                obj[area.documents?.fieldName + `[${fileIndex}]`] = area.documents.files[fileIndex]
            }
        }

        return obj
    })

    const checkboxes = inputAreas.map((area) => {
        const obj: IndexedProperties = {}
        if (area.optionalCheckbox?.fieldName) {
            obj[area.optionalCheckbox?.fieldName] = area.optionalCheckbox.value
        }

        return obj
    })

    return Object.assign({}, ...inputs, ...files, ...checkboxes)
}

const createResultElementForm = (elementForm: IInputAreaData) => {
    const obj: IndexedProperties = {}

    obj[elementForm?.fieldName ?? ''] = getValueElementForm(elementForm)

    if (elementForm.type === 'multiselect') {
        obj[elementForm?.fieldName ?? ''] = JSON.stringify(
            (elementForm?.value as SelectPage[]).map((itemSelect) => itemSelect.title),
        )
    }
    if (elementForm.type === 'select') {
        obj[elementForm.fieldName] = !!elementForm.isSpecificSelect
            ? (elementForm.value as SelectPage).id
            : (elementForm.value as SelectPage).title || null
    }

    if (elementForm.type === 'checkbox-docs') {
        return (elementForm.items as CheckboxDocs[])?.reduce(
            (obj, element) => {
                for (let fileIndex = 0; fileIndex < element.files.length; fileIndex++) {
                    obj[element?.fieldName + `[${fileIndex}]`] = element.files[fileIndex]
                }
                return obj
            },
            {} as { [key: string]: any },
        )
    }

    return obj
}

const getValueElementForm = (elementForm: IInputAreaData) => {
    const isSimpleField = !elementForm.value || typeof elementForm.value !== 'object'
    return isSimpleField ? elementForm?.value : (elementForm.value as SelectPage).title
}
