import { IComplexInputAreaData, IInputArea, IInputAreaData } from '@ui/input-area/model'
import { bufferHolidayPlanningModel } from '../pages/buffer-holiday-planning/model'
import { IndexedProperties } from '@shared/models/indexed-properties'
import { createResultElementForm } from '@pages/applications/lib/prepare-form-data'

const sendHrFormHolidayPlanning = async (
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

    if (result.holiday_type == 'Ежегодный (основной) оплачиваемый отпуск') result.holiday_type = 1
    else if (result.holiday_type == 'Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)')
        result.holiday_type = 2
    else if (result.holiday_type == 'Отпуск без сохранения заработной платы') result.holiday_type = 3
    else if (result.holiday_type == 'Отпуск по коллективному договору') result.holiday_type = 4

    const response = await bufferHolidayPlanningModel.effects.sendBufferHolidayPlanningFx({
        employeeGuid: result.jobGuid,
        type: result.holiday_type,
        start: result.holiday_start,
        end: result.holiday_end,
        files,
    })

    !response.isError && setCompleted(true)
}

export default sendHrFormHolidayPlanning
