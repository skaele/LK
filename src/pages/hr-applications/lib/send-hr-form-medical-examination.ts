import { IComplexInputAreaData, IInputArea, IInputAreaData } from '@ui/input-area/model'
import { bufferMedicalExaminationModel } from '../pages/buffer-medical-examination/model'
import { IndexedProperties } from '@shared/models/indexed-properties'
import { createResultElementForm } from '@pages/applications/lib/prepare-form-data'

const SendHrFormMedicalExamination = async (
    employeeId: string,
    inputAreas: IInputArea[],
    setCompleted: (loading: boolean) => void,
) => {
    setCompleted(false)

    const form = inputAreas
        .map((listElementForm) => {
            if (!Array.isArray(listElementForm.data[0])) {
                return (listElementForm.data as IInputAreaData[]).map((elementForm) => {
                    return createResultElementForm(elementForm)
                })
            } else {
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

                obj[employeeId] = JSON.stringify(resultNestedElementForm)

                return obj
            }
        })
        .flat()

    const files = inputAreas.map((area) => {
        return area.documents?.files
    })

    const result = Object.assign({}, ...form, ...files)

    const response = await bufferMedicalExaminationModel.effects.sendBufferMedicalExaminationFx({
        employeeGuid: result.jobGuid,
        start: result.extra_examination_date,
        end: result.isRetirement ? result.extra_examination_date_2 : result.extra_examination_date,
        files,
    })

    !response?.isError && setCompleted(true)
}

export default SendHrFormMedicalExamination
