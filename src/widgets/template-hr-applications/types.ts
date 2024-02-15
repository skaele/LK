export interface Section {
    title: string
    disabled?: boolean
    links: { title: string; link: string; isExternalLink?: boolean; isOpenInNewWindow?: boolean }[]
}
