import { UserApplication } from '@api/model'
import { getFormattedSubDivisionsWithRate } from '@features/applications/lib/get-subdivisions'
import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'
import { IInputArea } from '@ui/input-area/model'

export const getJob = (
    dataUserApplication: UserApplication,
    jobTitle: string | null,
    setJobTitle: React.Dispatch<React.SetStateAction<string | null>>,
    setJobGuid: React.Dispatch<React.SetStateAction<string | null>>,
): IInputArea => {
    const { subdivisions } = dataUserApplication
    const jobTitleData = !!jobTitle ? jobTitle : getDefaultSubdivision(subdivisions)

    return {
        title: 'Должность',
        data: [
            {
                title: 'Подразделение/должность',
                value: jobTitleData,
                fieldName: 'guid_staff',
                editable: true,
                width: '100',
                required: true,
                type: 'select',
                items: getFormattedSubDivisionsWithRate(subdivisions),
                isSpecificSelect: true,
                onChange: (value) => {
                    setJobTitle(value)
                    setJobGuid(value.id)
                },
            },
        ],
    }
}
