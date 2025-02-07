export type HelpfulPage = {
    title: string
    links: Link[]
    visible?: Visibility
}

export type Link = {
    title: string
    href: string
    visible: Visibility
}

type Visibility = 'all' | 'student' | 'staff'

export type HelpfulPages = {
    id: string
    title: string
    visible: Visibility
    content: HelpfulPage[]
}[]
