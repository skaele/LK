export function uniqueByProperty<T>(array: T[], property: keyof T): T[] {
    const seen = new Set<any>()
    return array.filter((item) => {
        const key = item[property]
        if (seen.has(key)) {
            return false
        } else {
            seen.add(key)
            return true
        }
    })
}
