import { ContactDetails, Subdivision } from '@shared/api/model'
import { sites } from '@shared/lib'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: ContactDetails, subdivision: Subdivision): IInputArea => {
    return {
        title: 'Актуализируйте контактные данные',
        data: [
            {
                fieldName: 'guid_staff',
                title: 'Подразделение/должность',
                value: subdivision.guid_staff,
                width: '100',
                required: true,
                type: 'text',
                visible: false,
            },
            {
                fieldName: '',
                title: `${subdivision.subdivision} (${subdivision.post})`,
                value: `${subdivision.subdivision} (${subdivision.post})`,
                width: '100',
                required: true,
                type: 'text-header',
                visible: true,
            },
            {
                fieldName: 'site',
                title: 'Адрес рабочего места',
                type: 'select',
                value: findCurrentInSelect(sites, data.site as string),
                items: sites,
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'aud_number',
                title: 'Номер кабинета',
                type: 'cabinet',
                mask: true,
                value: data.aud_number,
                editable: true,
                required: true,
            },
            {
                fieldName: 'email_staff',
                title: 'Корпоративная электронная почта',
                type: 'email',
                value: data.email_staff,
                required: true,
            },
            {
                title: 'Показывать рабочий email внутри Личного кабинета',
                fieldName: 'show_email_inner',
                type: 'checkbox',
                value: data.show_email_inner ?? true,
            },
            {
                title: 'Показывать рабочий email на сайте',
                fieldName: 'show_email_outer',
                type: 'checkbox',
                value: data.show_email_outer ?? true,
            },
            {
                title: 'Служебный мобильный телефон',
                type: 'tel',
                value: data?.tel_mob_staff,
                fieldName: 'tel_mob_staff',
                mask: true,
            },
            {
                title: 'Показывать служебный мобильный телефон внутри Личного кабинета',
                fieldName: 'show_tel_mob_staff_inner',
                type: 'checkbox',
                value: data.show_tel_mob_staff_inner ?? true,
            },
            {
                title: 'Показывать служебный мобильный телефон на сайте',
                fieldName: 'show_tel_mob_staff_outer',
                type: 'checkbox',
                value: data.show_tel_mob_staff_outer ?? true,
            },
            {
                title: 'Внутренний телефон',
                type: 'innerPhone',
                value: data?.tel_staff,
                mask: true,
                fieldName: 'tel_staff',
                minValueLength: 4,
            },
            {
                title: 'Показывать внутренний телефон внутри Личного кабинета',
                fieldName: 'show_tel_staff_inner',
                type: 'checkbox',
                value: data.show_tel_staff_inner ?? true,
            },
            {
                title: 'Показывать внутренний телефон на сайте',
                fieldName: 'show_tel_staff_outer',
                type: 'checkbox',
                value: data.show_tel_staff_outer ?? true,
            },
        ],
    }
}

export default getForm
