import React, { useState } from 'react'

import normalizeString from '@shared/lib/normalize-string'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'
import List from '@shared/ui/list'
import { LocalSearch } from '@shared/ui/molecules'
import { Title } from '@shared/ui/title'

type FacultyInternship = { faculty: string; link: string }
const facultyInternships: FacultyInternship[] = [
    {
        faculty: 'Факультет информационных технологий',
        link: 'https://mospolytech.ru/upload/medialibrary/e47/c51sofwkdvf7jdyl8yj1h4tw6jx2htzf/Grafik-praktik-2024_25_FIT.pdf',
    },
    {
        faculty: 'Факультет машиностроения',
        link: 'https://mospolytech.ru/upload/medialibrary/512/eeh0ipuxp9apu21ll3jtxv8fmkw9or9p/Grafik-praktik-2024_25_FM.pdf',
    },
    {
        faculty: 'Транспортный факультет',
        link: 'https://mospolytech.ru/upload/medialibrary/84d/pjnxdolq8nsktsu8oaq2zbijy4sb5uyc/Grafik-praktik-2024_25_TF.pdf',
    },
    {
        faculty: 'Факультет химической технологии и биотехнологии',
        link: 'https://mospolytech.ru/upload/medialibrary/1b2/d3hzvv8fds10rtr66omrghwcr39lns55/Grafik-praktik-2024_25_FKHTiB.pdf',
    },
    {
        faculty: 'Факультет урбанистики и городского хозяйства',
        link: 'https://mospolytech.ru/upload/medialibrary/6e0/31xlhlzr896yapjm0zkhnih7xwvmotc2/Grafik-praktik-2024_25_FUiGKH.pdf',
    },
    {
        faculty: 'Факультет экономики и управления',
        link: 'https://mospolytech.ru/upload/medialibrary/a22/1wvmtrmtwiz64ljdpjforwrl8esxjru2/Grafik-praktik-2024_25_FEiU.pdf',
    },
    {
        faculty: 'Институт графики и искусства книги имени В.А. Фаворского',
        link: 'https://mospolytech.ru/upload/medialibrary/2f6/z8iq5z3rmb5sjufl25204t0jbvl5wtcr/Grafik-praktik-2024_25_IGRIK.pdf',
    },
    {
        faculty: 'Институт издательского дела и журналистики',
        link: 'https://mospolytech.ru/upload/medialibrary/70f/inupo3pjycko52sz80mz5h7yesodz7ip/Grafik-praktik-2024_25_IIDiZH.pdf',
    },
    {
        faculty: 'Полиграфический институт',
        link: 'https://mospolytech.ru/upload/medialibrary/f66/79sc5fkorst8ry8mxwxn977tcduxoqt7/Grafik-praktik-2024_25_PI.pdf',
    },
    {
        faculty: 'Передовая Инженерная школа электротранспорта',
        link: 'https://mospolytech.ru/upload/medialibrary/6ac/oldo8lozcx9e7hnd65l3yrm0dzk2bnwp/Grafik-praktik-2024_25_PISHE.pdf',
    },
]
const search = (value: string, links: FacultyInternship[]) =>
    links.filter((link) => normalizeString(link.faculty).includes(normalizeString(value)))
export const Internship = () => {
    return (
        <Flex d="column" gap="0.5rem" ai="flex-start" p="1rem 0">
            <Title align="left" size={4}>
                График практики на 2024/2025 учебный год и ответственные за практику:
            </Title>
            <LinksList links={facultyInternships} />
        </Flex>
    )
}
const LinksList = ({ links }: { links: FacultyInternship[] }) => {
    const [searchBlocks, setSearchBlocks] = useState<FacultyInternship[] | null>(null)
    return (
        <List gap={16}>
            <LocalSearch
                placeholder="Факультет"
                whereToSearch={links}
                searchEngine={search}
                setResult={setSearchBlocks}
                validationCheck
            />
            <List gap={16}>
                {(searchBlocks ?? links).map(({ faculty, link }, index) => {
                    return (
                        <a key={index} href={link} target="_blank" rel="noreferrer">
                            {faculty}
                        </a>
                    )
                })}
            </List>
            {searchBlocks?.length === 0 && <Error text="Ничего не найдено" />}
        </List>
    )
}
