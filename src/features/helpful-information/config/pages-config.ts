import instructionsTeacherData from '@features/helpful-information/instructions/data/teacher-data'

import { HelpfulInfoEnum, helpfulInfoName } from '@entities/useful-information'

import { HelpfulPages } from '../types'

const pages: HelpfulPages = [
    {
        id: HelpfulInfoEnum.information,
        title: helpfulInfoName[HelpfulInfoEnum.information],
        visible: 'all',
        content: [
            {
                title: 'Учёба',
                links: [
                    {
                        title: 'Промежуточная аттестация',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf',
                    },
                    {
                        title: 'Оплата обучения',
                        visible: 'student',
                        href: 'https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027',
                    },
                    {
                        title: 'Программы дополнительного профессионального образования',
                        visible: 'all',
                        href: 'https://study.mospolytech.ru/dpo',
                    },
                    {
                        title: 'Международные программы',
                        visible: 'student',
                        href: 'https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/',
                    },
                    {
                        title: 'Дополнительное образование',
                        visible: 'student',
                        href: 'https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/',
                    },

                    {
                        title: 'Электронная библиотека Московского Политеха',
                        visible: 'staff',
                        href: 'https://online.mospolytech.ru/course/view.php?id=7621',
                    },
                    {
                        title: 'Библиотечно-информационный центр',
                        visible: 'all',
                        href: 'https://new.mospolytech.ru/obuchauschimsya/biblioteka/',
                    },
                    {
                        title: 'Электронный каталог библиотеки Электростальского института',
                        visible: 'all',
                        href: 'http://lib.elpol.ru',
                    },
                    {
                        title: 'Образовательные программы',
                        visible: 'all',
                        href: 'https://mospolytech.ru/sveden/education/educationplan/',
                    },
                ],
            },
            {
                title: 'Воинский учёт',
                visible: 'student',
                links: [
                    {
                        title: 'Военнообязанным и призывникам',
                        visible: 'student',
                        href: 'https://mospolytech.ru/obuchauschimsya/voennoobyazannym-i-prizyvnikam/',
                    },
                    {
                        title: 'Единый пункт призыва',
                        visible: 'student',
                        href: 'https://www.mos.ru/city/projects/prizyv/',
                    },
                ],
            },
            {
                title: 'Общежития',
                links: [
                    {
                        title: 'Правила внутреннего распорядка в студенческом городке',
                        visible: 'all',
                        href: 'https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf',
                    },
                ],
            },
            {
                title: 'Наука',
                links: [
                    {
                        title: 'Анонсы научных мероприятий',
                        visible: 'all',
                        href: 'https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/',
                    },
                    {
                        title: 'Как получить патент',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx',
                    },
                    {
                        title: 'Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации',
                        visible: 'all',
                        href: 'https://www.elsevier.com',
                    },
                    {
                        title: 'Список низкорейтинговых журналов',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx',
                    },
                    {
                        title: 'SciVal онлайн-платформа для мониторинга и анализа международных научных исследований',
                        visible: 'all',
                        href: 'https://www.scival.com/landing',
                    },
                    {
                        title: 'Студенческое научно-техническое общество',
                        visible: 'staff',
                        href: 'http://snto.mospolytech.ru',
                    },
                ],
            },
            {
                title: 'Внеучебная деятельность',
                links: [
                    {
                        title: 'Спортивная деятельность',
                        visible: 'student',
                        href: 'https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/',
                    },
                    {
                        title: 'Расписание спортивных секций',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf',
                    },
                    {
                        title: 'Студенческая жизнь',
                        visible: 'student',
                        href: 'https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039',
                    },
                    { title: 'Профорганизация', visible: 'all', href: 'https://profkommospolytech.ru' },
                    {
                        title: 'Студенческое научно-техническое общество',
                        visible: 'student',
                        href: 'http://snto.mospolytech.ru',
                    },
                    { title: 'Формула Студент', visible: 'all', href: 'http://fdr.mospolytech.ru' },
                    {
                        title: 'Медицинское обслуживание',
                        visible: 'all',
                        href: 'https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/',
                    },
                    {
                        title: 'Центр подготовки водителей (автошкола)',
                        visible: 'student',
                        href: 'https://mospolytech.ru/dop-obrazovanie/avtoshkola/',
                    },
                    {
                        title: 'Яхт-клуб',
                        visible: 'all',
                        href: 'https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/',
                    },
                    {
                        title: 'Многофункциональный центр',
                        visible: 'all',
                        href: 'https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/',
                    },
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.instructions,
        title: helpfulInfoName[HelpfulInfoEnum.instructions],
        visible: 'all',
        content: [
            {
                title: 'Инструкции',
                links: [
                    {
                        title: 'Инструкция по получению логина и пароля единой учётной записи студентов первого курса',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1',
                    },
                    {
                        title: 'Как подключиться к городскому WiFi',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Kak_podkljuchitsya_k_gorodskomu_WiFi.pdf',
                    },
                    {
                        title: 'Мобильное приложение Московского Политеха',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/MP_mobile_app_instruction.pdf',
                    },
                    {
                        title: 'График выбора общежития',
                        visible: 'student',
                        href: 'https://mospolytech.ru/upload/files/Dormitory_select_2022.docx',
                    },
                    {
                        title: 'Памятка по действия в экстремальных ситуациях',
                        visible: 'student',
                        href: 'https://mospolytech.ru/upload/files/Pamyatka_ekstr_sit.docx',
                    },
                    {
                        title: 'Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Rabota_obuchajuschihsya_v_Microsoft_Teams.pdf?1',
                    },
                    {
                        title: 'Доступ к облачным сервисам Microsoft',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Dostup_studentov_k_oblachnym_servisam_Microsoft.pdf?1',
                    },
                    {
                        title: 'Доступ к Microsoft OneDrive для обучающихся Московского Политеха',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Ispolzovanie_studentami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1',
                    },
                    {
                        title: 'Как студенту получить доступ к курсу в LMS',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Kak_studentu_poluchit_dostup_k_kursu_v_LMS.pdf',
                    },
                    {
                        title: 'Инструкция по использованию платного Сервиса Печати Московского Политеха',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati_Moskovskogo_Politeha_dlya_studentov_(2).pdf',
                    },
                    {
                        title: 'Информация для старост групп. Как вести трансляцию очных занятий для тех, кого нет в аудитории',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Kak_vesti_translyatsii_zanyatij_dlya_nahodyaschihsya_za_predelami_RF.pdf',
                    },
                    {
                        title: 'Как смотреть трансляции занятий, находясь за пределами РФ',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Kak_smotret_translyatsii_zanyatij__nahodyas_za_predelami_RF(1).pdf',
                    },
                    {
                        title: 'How to watch lectures online (for the students located outside the Russian Federation)',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/BROADCASTING.pdf',
                    },
                    {
                        title: 'Где найти коворкинги - там есть WiFi, столы, пуфы и розетки',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf',
                    },

                    ...instructionsTeacherData[0].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' })),
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.instructions,
        title: 'Положения',
        visible: 'all',
        content: [
            {
                title: 'Положения',
                links: [
                    {
                        title: 'Порядок предоставления каникул после прохождения итоговой аттестации',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Poryadok_predostavleniya_kanikul_posle_prohozhdeniya_itogovoj_attestatsii.pdf',
                    },
                    {
                        title: 'Положение о проектной деятельности обучающихся',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_proektnoj_deyatelnosti_obuchajuschihsya_(s_prilozheniyami).pdf',
                    },
                    {
                        title: 'Положение о комиссии по противодействию коррупции Московского Политеха',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_komissii_po_protivodejstviju_korruptsii_Moskovskogo_Politeha.pdf',
                    },
                    {
                        title: 'Положение о проведении текущего контроля успеваемости и промежуточной аттестации обучающихся в условиях обеспечения режима изоляции в целях предотвращения распространения коронавирусной инфекции',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf',
                    },
                    {
                        title: 'Положение о проведении государственной итоговой аттестации с применением электронного обучения и ДОТ',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_provedenii_gosudarstvennoj_itogovoj_attestatsii_s_primeneniem_elektronnogo_obucheniya_i_DO.pdf',
                    },
                    {
                        title: 'Положение о комиссии по урегулированию споров между участниками образовательных отношений',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_komissii_po_uregulirovaniju_sporov.pdf',
                    },
                    {
                        title: 'Положение об организации образовательного процесса',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_ob_organizacii_obrazovatelnogo_processa.pdf',
                    },
                    {
                        title: 'Положение о дисциплинарной комиссии',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_distsiplinarnoj_komissii.pdf',
                    },
                    {
                        title: 'Положение о заполнении вакантных мест',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_zapolnenii_vakantnyh_mest.pdf',
                    },
                    {
                        title: 'Положение о порядке зачета результатов освоения обучающимися учебных дисциплин и практик при переводе, восстановлении, получении последующего образования',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_O_poryadke_zacheta_2023.pdf',
                    },
                    {
                        title: 'Положение о порядке оказания материальной поддержки нуждающимся обучающимся',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_poryadke_okazaniya_materialnoj_podderzhki_nuzhdajuschimsya_obuchajuschimsya.pdf',
                    },
                    {
                        title: 'Положение о порядке проведения государственной итоговой аттестации',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_poryadke_provedeniya_gosudarstvennoj_itogovoj_attestatsii.pdf',
                    },
                    {
                        title: 'Положение о стипендиальном обеспечении и других формах материальной поддержки',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_stipendialnom_obespechenii_i_drugih_formah_materialnoj_podderzhki.pdf',
                    },
                    {
                        title: 'Положение об освоении факультативных и элективных дисциплин',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_ob_osvoenii_fakultativnyh_i_elektivnyh_distsiplin.pdf',
                    },
                    {
                        title: 'Положение об обучении по индивидуальному учебному плану, в том числе об ускоренном обучении',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_ob_obuchenii_po_individualnomu_uchebnomu_planu__v_tom_chisle_ob_uskorennom_obuchenii.pdf?1',
                    },
                    {
                        title: 'Порядок подачи и рассмотрения апелляции о нарушении процедуры проведения государственного аттестационного испытания или несогласии с его результатами',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Poryadok_podachi_i_rassmotreniya_apellyatsii_o_narushenii_protsedury_provedeniya_gosudarstvennogo_attestatsionnogo_ispytaniya_ili_nesoglasii_s_ego_rezultatami.pdf',
                    },
                    {
                        title: 'Положение о промежуточной аттестации аспирантов',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_promezhutochnoj_attestatsii_aspirantov.pdf',
                    },
                    {
                        title: 'Положение о порядке проведения государственной итоговой аттестации по аспирантуре',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Polozhenie_o_poryadke_provedeniya_gosudarstvennoj_itogovoj_attestatsii_po_aspiranture.pdf',
                    },
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.instructions,
        title: 'Правила',
        visible: 'all',
        content: [
            {
                title: 'Правила',
                links: [
                    {
                        title: 'Правила внутреннего распорядка в студенческом городке',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Pravila_vnutrennego_rasporyadka_v_studencheskom_gorodke.pdf',
                    },
                    {
                        title: 'Правила внутреннего распорядка обучающихся',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Pravila_vnutrennego_rasporyadka_obuchajuschihsya.pdf',
                    },
                    {
                        title: 'Приказ от 25.01.2021 № 89-ОД «Об изменении  Правил внутреннего распорядка обучающихся»',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Prikaz_ot_25_01_2021_No_89-OD_Ob_izmenenii_Pravil_vnutrennego_rasporyadka_obuchajuschihsya.pdf',
                    },
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.instructions,
        title: 'Бланки заявлений',
        visible: 'student',
        content: [
            {
                title: 'МФЦ',
                links: [
                    {
                        title: 'Заявление в комиссию по урегулированию споров',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Zayavlenie_v_komissiju_po_sporam_2022.pdf',
                    },
                    {
                        title: 'Заявление на апелляцию по  результатам ГИА',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_apellyatsiju_po_rezultatam_GIA.pdf',
                    },
                    {
                        title: 'Заявление на апелляцию по результатам  промежуточной аттестации',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_apellyatsiju_po_rezultatam_promezhutochnoj_attestatsii.pdf',
                    },
                    {
                        title: 'Заявление на восстановление студенческого билета,  зачетной книжки, удостоверения аспиранта',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_vosstanovlenie_studencheskogo_bileta__zachetnoj_knizhki__udostovereniya_aspiranta.pdf',
                    },
                    {
                        title: 'Заявление на выдачу документов о предыдущем  образовании',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_vydachu_dokumentov_o_predyduschem_obrazovanii.pdf?1',
                    },
                    {
                        title: 'Заявление  на предоставление академического отпуска',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_predostavlenie_akademicheskogo_otpuska.pdf?2',
                    },
                    {
                        title: 'Заявление на выход из академического отпуска',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_vyhod_iz_akademicheskogo_otpuska.pdf?2',
                    },
                    {
                        title: 'Заявление  на изменение персональных данных',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_izmenenie_personalnyh_dannyh.pdf',
                    },
                    {
                        title: 'Заявление  на отчисление',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_otchislenie.pdf?1',
                    },
                    {
                        title: 'Заявление на получение выписки из приказа',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_poluchenie_vypiski_iz_prikaza.pdf',
                    },
                    {
                        title: 'Заявление на продление промежуточной аттестации или ГИА',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_na_prodlenie_promezhutochnoj_attestatsii_ili_GIA.pdf',
                    },
                    {
                        title: 'Заявление на продление сроков повторной промежуточной аттестации',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Zayavlenie_na_prodlenie_srokov_povtornoj_promezhutochnoj_attestatsii.pdf',
                    },
                    {
                        title: 'Заявление о переводе из группы в группу без  изменения направления, формы и основы обучения',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_o_perevode_iz_gruppy_v_gruppu_bez_izmeneniya_napravleniya__formy_i_osnovy_obucheniya.pdf',
                    },
                    {
                        title: 'Заявление  о перезачете дисциплин',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_o_perezachete_distsiplin.pdf',
                    },
                    {
                        title: 'Заявление о предоставлении каникул в связи с  окончанием университета',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_stud/Zayavlenie_o_predostavlenii_kanikul_v_svyazi_s_okonchaniem_universiteta.pdf',
                    },
                    {
                        title: 'Заявление о переводе на индивидуальный учебный план',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Zayavlenie_o_perevode_na_individualnyj_uchebnyj_plan.pdf?2',
                    },
                    {
                        title: 'Заявление на пересдачу для получения диплома с отличием',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Zayavlenie_na_peresdachu_dlya_polucheniya_diploma_s_otlichiem.pdf?1',
                    },
                ],
            },
            {
                title: 'Общежитие',
                links: [
                    {
                        title: 'Форма 1 - заявление о предоставлении права проживания в студгородке для обучающихся университета',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_hostel/Forma_1_-_zayavlenie_o_predostavlenii_prava_prozhivaniya_v_studgorodke_dlya_obuchajuschihsya_universiteta.pdf',
                    },
                    {
                        title: 'Форма 3 - заявление о предоставлении права проживания в изолированном жилом помещении для обучающихся университета',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_hostel/Forma_3_-_zayavlenie_o_predostavlenii_prava_prozhivaniya_v_izolirovannom_zhilom_pomeschenii_dlya_obuchajuschihsya_universiteta.pdf',
                    },
                    {
                        title: 'Форма 5 - заявление о расторжении договора найма жилого помещения и отмене права проживания в студгородке',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_hostel/Forma_5_-_zayavlenie_o_rastorzhenii_dogovora_najma_zhilogo_pomescheniya_i_otmene_prava_prozhivaniya_v_studgorodke.pdf',
                    },
                    {
                        title: 'Форма 6 - заявление о переселении из одного жилого помещения в другое',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_hostel/Forma_6_-_zayavlenie_o_pereselenii_iz_odnogo_zhilogo_pomescheniya_v_drugoe.pdf',
                    },
                    {
                        title: 'Форма 7 - заявление о временном проживании гостей в студгородке',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_hostel/Forma_7_-_zayavlenie_o_vremennom_prozhivanii_gostej_v_studgorodke_(1).pdf',
                    },
                    {
                        title: 'Форма 8 - заявление о проходе гостей на территорию студгородка',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_hostel/Forma_8_-_zayavlenie_o_prohode_gostej_na_territoriju_studgorodka.pdf',
                    },
                    {
                        title: 'Форма 9 - заявление о предоставлении права пользования жилым помещением и коммунальными услугами в студгородке бесплатно',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/blanks_hostel/Forma_9_-_zayavlenie_o_predostavlenii_prava_polzovaniya_zhilym_pomescheniem_i_kommunalnymi_uslugami_v_studgorodke_besplatno.pdf',
                    },
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.regulations,
        title: helpfulInfoName[HelpfulInfoEnum.regulations],
        visible: 'staff',
        content: [
            {
                title: 'Положения',
                links: [
                    ...instructionsTeacherData[2].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' })),
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.orders,
        title: helpfulInfoName[HelpfulInfoEnum.orders],
        visible: 'staff',
        content: [
            {
                title: 'Приказы',
                links: [
                    ...instructionsTeacherData[1].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' })),
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.courses,
        title: helpfulInfoName[HelpfulInfoEnum.courses],
        visible: 'student',
        content: [
            {
                title: 'Курсы',
                links: [
                    {
                        title: 'Современного курсостроения',
                        visible: 'student',
                        href: 'https://project.lektorium.tv/howtomooc',
                    },
                ],
            },
        ],
    },
]

export default pages
