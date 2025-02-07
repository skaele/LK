import React from 'react'

import { HelpfulPage } from '@pages/helpful-information/types/helpful-pages'
import LinksList from '@pages/helpful-information/ui/molecules/links-list'

import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'

const SafetyInformation = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <LinksList
                    blocks={safetyPages}
                    // Поиск по материалам
                    title="материалам"
                    isStaff={false}
                />
            </PageBlock>
        </CenterPage>
    )
}

export const safetyPages: HelpfulPage[] = [
    {
        title: 'Полезные материалы',
        links: [
            {
                title: 'Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)',
                visible: 'all',
                href: 'https://youtu.be/cH7-sC7kRwc',
            },
            {
                title: 'Если оказались на территории вуза в момент наступившей чрезвычайной ситуации',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf',
            },
            {
                title: 'Памятка «Подозрительный предмет»',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf',
            },
            {
                title: 'Памятка студента по действиям в экстремальных ситуациях',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf',
            },
            {
                title: 'Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF',
            },
            {
                title: 'Безопасность в экстремальных и чрезвычайных ситуациях',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF',
            },
            {
                title: 'Как понять, что материал экстремистский, и что с этим делать',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF',
            },
            {
                title: 'Последствия и ответственность за ложное сообщение об акте терроризма',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF',
            },
            {
                title: 'Последствия участия в несогласованных митингах и протестных акциях',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF',
            },
            {
                title: 'Признаки вербовки в экстремистскую организацию и как с этим справиться',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF',
            },
            {
                title: 'Что делать, если вы обнаружили бесхозный предмет',
                visible: 'all',
                href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF',
            },
        ],
    },
]

export default SafetyInformation
