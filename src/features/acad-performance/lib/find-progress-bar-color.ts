import { ColorsByGrade, IColorPalette, IGrade } from '@shared/consts'

const findProgressBarColor = (grade: keyof IGrade | undefined, returnColor?: boolean): IColorPalette | string => {
    if (!!grade) {
        if (returnColor) return ColorsByGrade[grade] || ColorsByGrade.default
        else return ColorsByGrade[grade]?.main || ColorsByGrade.default.main
    } else {
        return 'var(--grey)'
    }
}

export default findProgressBarColor
