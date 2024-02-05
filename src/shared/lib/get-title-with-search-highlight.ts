export const getTitleWithSearchHighlight = (startIndex: number, title: string, value: string) => {
    return startIndex !== -1
        ? title.slice(0, startIndex) +
              '<span style="color: var(--reallyBlue);font-weight:500">' +
              title.slice(startIndex, startIndex + value.length) +
              '</span>' +
              title.slice(startIndex + value.length)
        : title
}
