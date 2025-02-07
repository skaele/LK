import { User } from '@shared/api/model'

const isEnabledForDegreeLevel = (
    currentDegreeLevel: User['degreeLevel'] | undefined,
    exceptionalDegreeLevelList: User['degreeLevel'][] | undefined,
) => {
    if (!exceptionalDegreeLevelList?.length || !currentDegreeLevel) return true
    return !exceptionalDegreeLevelList?.includes(currentDegreeLevel)
}

export default isEnabledForDegreeLevel
