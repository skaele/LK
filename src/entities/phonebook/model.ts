import { SelectPage } from '@features/select'
import { ExpandableItemType } from '@pages/phonebook/expandable-item'
import { teacherApi } from '@shared/api'
import { Subdivision } from '@shared/api/model/phonebook'
import { createEffect, createEvent, createStore, sample } from 'effector'

const setChosenSubdivision = createEvent<string>()

const getSubdivisions = createEvent<ServerListRequest<SelectPage | null>>()
const getSubdivisionsFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<ExpandableItemType> => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { search = '', page, limit, filter } = request
        // const { data } = await api.get(search, filter?.id.toString() ?? '', page, limit)
        const data: ExpandableItemType = {
            'Проректор по цифровому развитию и делопроизводству': {
                'Центр развития технологий в цифровом образовании': {
                    'Отдел внутренней разработки ': {},
                    'Отдел внедрения и обеспечения технологий цифрового образования': {},
                },
                'Центр управления делами': {},
            },
            'Кафедра "Информатика и информационные технологии"': {},
        }
        return data
    },
)
sample({ clock: getSubdivisions, target: getSubdivisionsFx })

const getSubdivisionData = createEvent<ServerListRequest<SelectPage | null>>()
const clearSubdivisionData = createEvent()
const getSubdivisionDataFx = createEffect(
    async (request: ServerListRequest<SelectPage | null>): Promise<Subdivision> => {
        const { search, page, limit, filter } = request
        const group = filter?.title === 'Все' ? '' : filter?.title ?? ''

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { data } = await teacherApi.get(search ?? '', group, page, limit)
        return {
            title: group,
            head: 'Антонова Антонина Антоновна',
            phone: '8 (812) 123-45-67',
            email: 'd.r.khusnulina@mospolytech.ru',
            address: 'г. Москва, ул. Ленина, д. 1',
            cabinet: 'БС А-103',
            staff: [
                {
                    fio: 'Иванов Иван Иванович',
                    jobs: [
                        {
                            post: 'Проректор по цифровому развитию и делопроизводству',
                            mainJob: true,
                            phone: '8 (812) 123-45-67',
                            mobilePhone: '+7 800 300 40 50',
                            email: 'i.i.ivanov@mospolytech.ru',
                            address: 'г. Москва, ул. Ленина, д. 1',
                            cabinet: 'БС А-103',
                        },
                    ],
                },
            ],
        }
    },
)
sample({ clock: getSubdivisionData, target: getSubdivisionDataFx })

const $chosenSubdivision = createStore<string | null>(null).on(setChosenSubdivision, (_, subdivision) => subdivision)
const $subdivisions = createStore<ExpandableItemType | null>(null).on(
    getSubdivisionsFx.doneData,
    (_, subdivisions) => subdivisions,
)
const $subdivisionData = createStore<Subdivision | null>(null)
    .on(getSubdivisionDataFx.doneData, (_, subdivision) => subdivision)
    .reset(clearSubdivisionData)
const $error = createStore<string | null>(null)
    .on(getSubdivisionsFx.failData, (_, error) => error.message)
    .on(getSubdivisionsFx, () => null)
    .on(getSubdivisionDataFx.failData, (_, error) => error.message)
    .on(getSubdivisionDataFx, () => null)

export const events = {
    setChosenSubdivision,
    getSubdivisions,
    getSubdivisionData,
    clearSubdivisionData,
}

export const stores = {
    $chosenSubdivision,
    $subdivisions,
    $subdivisionData,
    $error,
}
