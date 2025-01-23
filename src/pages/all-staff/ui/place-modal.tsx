import React from 'react'

import { SiteName } from '@pages/teachers-applications/pages/contact-details/lib/get-form'
import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'

export const PlaceModal = ({ place }: { place: SiteName }) => {
    return (
        <BlockWrapper>
            {place === 'ул. Большая Семёновская, 38' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/bolshaya_semyonovskaya_ulitsa_38/Z04YcQZhTEQPQFtvfXt5cH5qZQ==/?indoorLevel=1&ll=37.711518%2C55.781292&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Большая Семёновская улица, 38 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.711518%2C55.781292&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjczNzkxORJQ0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCR0L7Qu9GM0YjQsNGPINCh0LXQvNGR0L3QvtCy0YHQutCw0Y8g0YPQu9C40YbQsCwgMzgiCg2Y2BZCFQsgX0I%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Прянишникова, 2А' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.543757%2C55.833709&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица Прянишникова, 2А — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.543757%2C55.833709&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3NTQ0MhJE0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0J_RgNGP0L3QuNGI0L3QuNC60L7QstCwLCAy0JAiCg3QLBZCFbhVX0I%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Автозаводская, 16' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/org/obshchezhitiye_10_moskovskogo_politekhnicheskogo_universiteta/1230540819/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Общежитие № 10 Московского политехнического университета
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/category/dormitory/184106316/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Общежитие в Москве
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.520728%2C55.809720&mode=search&oid=1230540819&ol=biz&z=17.56"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Павла Корчагина, 22' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/ulitsa_pavla_korchagina_22/Z04YcAFjSkAGQFtvfXRweHhgbQ==/?ll=37.663350%2C55.819439&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица Павла Корчагина, 22 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.663350%2C55.819439&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2NzgxOBJI0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0J_QsNCy0LvQsCDQmtC-0YDRh9Cw0LPQuNC90LAsIDIyIgoNRacWQhUbR19C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Михалковская, 7' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/mikhalkovskaya_ulitsa_7/Z04YcwRjTUcAQFtvfXRydnhmbQ==/?ll=37.533427%2C55.837460&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Михалковская улица, 7 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.533427%2C55.837460&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3NzM2NBJC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCc0LjRhdCw0LvQutC-0LLRgdC60LDRjyDRg9C70LjRhtCwLCA3IgoNOyIWQhWPWV9C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Садовая-Спасская, 6' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/sadovaya_spasskaya_ulitsa_6s1/Z04YcARpT0UPQFtvfXt2cH1lYQ==/?ll=37.639608%2C55.771165&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Садовая-Спасская улица, 6с1 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.639608%2C55.771165&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjczMDczMxJM0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCh0LDQtNC-0LLQsNGPLdCh0L_QsNGB0YHQutCw0Y8g0YPQu9C40YbQsCwgNtGBMSIKDfaOFkIVrRVfQg%2C%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Малая Семеновская, 12' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/malaya_semyonovskaya_ulitsa_12/Z04YcQZhSUMHQFtvfXt5dX9lbQ==/?indoorLevel=1&ll=37.711060%2C55.784370&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Малая Семёновская улица, 12 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.711060%2C55.784370&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc0MDE3MRJM0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCc0LDQu9Cw0Y8g0KHQtdC80ZHQvdC-0LLRgdC60LDRjyDRg9C70LjRhtCwLCAxMiIKDSDYFkIVMSNfQg%2C%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Лефортовский вал, 26' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/ulitsa_lefortovskiy_val_26/Z04YcA5mSkEBQFtvfXt0dHtrZw==/?ll=37.696346%2C55.755783&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица Лефортовский Вал, 26 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.696346%2C55.755783&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNTk1OBJK0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JvQtdGE0L7RgNGC0L7QstGB0LrQuNC5INCS0LDQuywgMjYiCg0QyRZCFesFX0I%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. 1-я Дубровская, 16а' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/1_ya_dubrovskaya_ulitsa_16a/Z04YcABiSEYBQFtvfXtzc3VrbQ==/?ll=37.672136%2C55.722989&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        1-я Дубровская улица, 16А — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.672136%2C55.722989&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY4OTcwMRJG0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDEt0Y8g0JTRg9Cx0YDQvtCy0YHQutCw0Y8g0YPQu9C40YbQsCwgMTbQkCIKDUSwFkIVV-ReQg%2C%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. 7-я Парковая, 9/26' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/7_ya_parkovaya_ulitsa_9_26/Z04YcQ5jTEwAQFtvfXt4d31jZQ==/?ll=37.793597%2C55.796102&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        7-я Парковая улица, 9/26 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.793597%2C55.796102&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc0OTA1NhJC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDct0Y8g0J_QsNGA0LrQvtCy0LDRjyDRg9C70LjRhtCwLCA5LzI2IgoNpCwXQhU2L19C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. 800-летия Москвы, 28 корп. 1' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/ulitsa_800_letiya_moskvy_28k1/Z04YcwFiQUABQFtvfXR2eHllZQ==/?ll=37.562856%2C55.879561&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица 800-летия Москвы, 28к1 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.562856%2C55.879561&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc5NjI4NhJJ0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAgODAwLdC70LXRgtC40Y8g0JzQvtGB0LrQstGLLCAyONC6MSIKDV5AFkIVrIRfQg%2C%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Михалковская, 7, корп. 3' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/mikhalkovskaya_ulitsa_7k3/Z04YcwRkTUMHQFtvfXRydn1jYg==/?ll=37.534452%2C55.837175&utm_medium=mapframe&utm_source=maps&z=19.53"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Михалковская улица, 7к3 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.534452%2C55.837175&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3NzIxORJF0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCc0LjRhdCw0LvQutC-0LLRgdC60LDRjyDRg9C70LjRhtCwLCA30LozIgoNSSMWQhUzWV9C&z=19.53"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Бориса Галушкина, 9' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/ulitsa_borisa_galushkina_9/Z04YcAJlSEAPQFtvfXRzdXpgYw==/?ll=37.655158%2C55.824637&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица Бориса Галушкина, 9 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.655158%2C55.824637&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3MDA4MRJJ0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JHQvtGA0LjRgdCwINCT0LDQu9GD0YjQutC40L3QsCwgOSIKDeGeFkIVbkxfQg%2C%2C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'ул. Павла Корчагина, 20А, корп. 3' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/ulitsa_pavla_korchagina_22/Z04YcAFjSkAGQFtvfXRweHhgbQ==/?ll=37.663350%2C55.819439&utm_medium=mapframe&utm_source=maps&z=17.13"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Улица Павла Корчагина, 22 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.663350%2C55.819439&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2NzgxOBJI0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0J_QsNCy0LvQsCDQmtC-0YDRh9Cw0LPQuNC90LAsIDIyIgoNRacWQhUbR19C&z=17.13"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'Рижский проезд, 15, корп. 1' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/rizhskiy_proyezd_15k1/Z04YcAFkT0AEQFtvfXRweXRgYw==/?ll=37.664718%2C55.818864&utm_medium=mapframe&utm_source=maps&z=18.93"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Рижский проезд, 15к1 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.664718%2C55.818864&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2NzM0NBI-0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCg0LjQttGB0LrQuNC5INC_0YDQvtC10LfQtCwgMTXQujEiCg2aqBZCFX1GX0I%2C&z=18.93"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : place === 'Рижский проезд, 15, корп. 2' ? (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >
                        Москва
                    </a>
                    <a
                        href="https://yandex.ru/maps/213/moscow/house/rizhskiy_proyezd_15k2/Z04YcAFkS0wDQFtvfXRweX9kZg==/?ll=37.664464%2C55.818480&utm_medium=mapframe&utm_source=maps&z=18.53"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >
                        Рижский проезд, 15к2 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=37.664464%2C55.818480&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDkxOTU3MDUwEj7QoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0KDQuNC20YHQutC40Lkg0L_RgNC-0LXQt9C0LCAxNdC6MiIKDT2oFkIVA0ZfQg%2C%2C&z=18.53"
                        width="560"
                        height="400"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            ) : (
                place === '1-й Балтийский переулок, 6/21, корп. 3' && (
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <a
                            href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                        >
                            Москва
                        </a>
                        <a
                            href="https://yandex.ru/maps/213/moscow/house/1_y_baltiyskiy_pereulok_6_21k3/Z04YcwVgSkYHQFtvfXRxeHphYg==/?ll=37.520330%2C55.809626&utm_medium=mapframe&utm_source=maps&z=17.13"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                        >
                            1-й Балтийский переулок, 6/21к3 — Яндекс Карты
                        </a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=37.520330%2C55.809626&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2MTUxMBJP0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDEt0Lkg0JHQsNC70YLQuNC50YHQutC40Lkg0L_QtdGA0LXRg9C70L7QuiwgNi8yMdC6MyIKDdIUFkIVDz1fQg%2C%2C&z=17.13"
                            width="560"
                            height="400"
                            frameBorder="1"
                            allowFullScreen={true}
                            style={{ position: 'relative' }}
                        ></iframe>
                    </div>
                )
            )}
        </BlockWrapper>
    )
}

const BlockWrapper = styled.div`
    ${MEDIA_QUERIES.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`
