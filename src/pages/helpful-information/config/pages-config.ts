import instructionsTeacherData from '@pages/instructions/data/teacher-data'
import { HelpfulInfoEnum, helpfulInfoName } from '@entities/useful-information'
import { HelpfulPages, Link } from '../types/helpful-pages'

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
                        title: 'Инструкции',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/index.php?p=instructions',
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
