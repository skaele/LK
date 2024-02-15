const normalizeString = (str: string, removeComma = true) => {
    if (!str.length) return ''

    const result = str
        // .replace(/\s/g, '')
        .replace(/\$/g, 's')
        .replace(/-/g, '')
        .toLowerCase()
    return removeComma ? result.replace(/[,'._/]/g, '') : result
}

export default normalizeString
