import get2DigitDumber from '@shared/lib/get-2-digit-number'

export const TIMES = Array(24)
    .fill(0)
    .map((_, i) => `${get2DigitDumber(i)}:00`)
