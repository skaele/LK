import { LinkItem } from '@shared/ui/link-item'
import React from 'react'
import { AiFillFilePdf } from 'react-icons/ai'

export const Documents = () => (
    <>
        <LinkItem
            path="https://e.mospolytech.ru/old/storage/files/Kollektivnyj_dogovor_na_2020-2023_gg.pdf"
            isExternalPage
            title="Коллективный договор на 2020-2023 гг."
            id={''}
            icon={<AiFillFilePdf />}
            color={'red'}
        />
        <LinkItem
            path="https://e.mospolytech.ru/old/storage/files/Lokalnye_normativnye_akty__regulirujuschie_sotsialno-trudovye_otnosheniya.pdf"
            isExternalPage
            title="Локальные нормативные акты, регулирующие социально-трудовые отношения"
            id={''}
            icon={<AiFillFilePdf />}
            color={'red'}
        />
        <LinkItem
            path="https://e.mospolytech.ru/old/storage/files/Polozhenie_o_kadrovom_elektronnom_dokumentooborote_Moskovskogo_Politeha.pdf"
            isExternalPage
            title="Положение о кадровом электронном документообороте Московского Политеха"
            id={''}
            icon={<AiFillFilePdf />}
            color={'red'}
        />
    </>
)
