import { FC } from 'react'
import { BiBookBookmark } from 'react-icons/bi'
import { FaRegCalendar, FaRegLightbulb } from 'react-icons/fa'
import { FiTruck } from 'react-icons/fi'
import {
    HiOutlineDesktopComputer,
    HiOutlineDocumentSearch,
    HiOutlineOfficeBuilding,
    HiOutlinePencilAlt,
    HiOutlinePrinter,
} from 'react-icons/hi'
import { MdCarRepair, MdEvStation } from 'react-icons/md'
import { RiBarChartFill, RiFlaskLine } from 'react-icons/ri'
import { TiBrush } from 'react-icons/ti'

import { Page } from '@shared/routing'

import RetakeModal from '../ui/molecules/retake-modal'
import RETAKE_LINKS from './retake-links'

type RetakeRouteRaw = Pick<Page, 'id' | 'title' | 'icon' | 'color' | 'fullTitle'>

const retakeRoutesRaw: RetakeRouteRaw[] = [
    {
        id: 'feiu',
        title: 'ФЭИУ',
        fullTitle: 'Факультет экономики и управления',
        icon: RiBarChartFill,
        color: 'lightGreen',
    },
    {
        id: 'fuigh',
        title: 'ФУИГХ',
        fullTitle: 'Факультет урбанистики и городского хозяйства',
        icon: HiOutlineOfficeBuilding,
        color: 'purple',
    },
    {
        id: 'fbk',
        title: 'ФБК',
        fullTitle: 'Факультет базовых компетенций',
        icon: HiOutlinePencilAlt,
        color: 'red',
    },
    {
        id: 'fhtib',
        title: 'ФХТИБ',
        fullTitle: 'Факультет химической технологии и биотехнологии',
        icon: RiFlaskLine,
        color: 'orange',
    },
    {
        id: 'tf',
        title: 'ТФ',
        fullTitle: 'Транспортный факультет',
        icon: FiTruck,
        color: 'green',
    },
    {
        id: 'fm',
        title: 'ФМ',
        fullTitle: 'Факультет машиностроения',
        icon: MdCarRepair,
        color: 'green',
    },
    {
        id: 'fit',
        title: 'ФИТ',
        fullTitle: 'Факультет информационных технологий',
        icon: HiOutlineDesktopComputer,
        color: 'blue',
    },
    {
        id: 'pi',
        title: 'ПИ',
        fullTitle: 'Полиграфический институт',
        icon: HiOutlinePrinter,
        color: 'pink',
    },
    {
        id: 'iidizh',
        title: 'ИИДИЖ',
        fullTitle: 'Институт издательского дела и журналистики',
        icon: BiBookBookmark,
        color: 'purple',
    },
    {
        id: 'igrik',
        title: 'ИГРИК',
        fullTitle: 'Институт графики и искусства книги имени В.А.Фаворского',
        icon: TiBrush,
        color: 'orange',
    },
    {
        id: 'pishe',
        title: 'ПИШЭ',
        fullTitle: 'Передовая инженерная школа электротранспорта',
        icon: MdEvStation,
        color: 'lightGreen',
    },
    {
        id: 'cpd',
        title: 'ЦПД',
        fullTitle: 'Центр проектной деятельности',
        icon: FaRegLightbulb,
        color: 'purple',
    },
    {
        id: 'nid',
        title: 'НИД (Аспиранты)',
        fullTitle: 'Научно-исследовательская деятельность',
        icon: FaRegCalendar,
        color: 'orange',
    },
    {
        id: 'nivk',
        title: 'НИВК (Аспиранты)',
        icon: HiOutlineDocumentSearch,
        color: 'lightBlue',
    },
]
type RetakeLinks = {
    [id: string]: Page & { Component: FC }
}
const retakeRoutes: RetakeLinks = retakeRoutesRaw.reduce((routes: RetakeLinks, { id, ...rest }: RetakeRouteRaw) => {
    if (!RETAKE_LINKS[id]) {
        return { ...routes }
    }

    const { href, links, fullTitle } = RETAKE_LINKS[id]

    const path = href && !links.length ? href : ''

    const Component = links.length && !href ? () => RetakeModal({ links, fullTitle }) : () => null
    return { ...routes, [id]: { id, path, Component, isTemplate: false, ...rest } }
}, {} as RetakeLinks)

export default retakeRoutes
