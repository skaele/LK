import { Buildings } from '@pages/teachers-applications/pages/phonebook/lib/getCabinetMask'

const groupMask = (value: string, prevValue?: string) => {
    if (value.length > 8) return value.substring(0, 8)
    if (value.length === 3 && prevValue?.length === 2) return value + '-'
    if (value.length === 3 && prevValue?.length === 4) return value.substring(0, 2)
    return value
}

const phoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const russianNumberBeginnings = ['7', '8', '9']
    const selectionStart = e.target.selectionStart
    let phoneInput = e.target.value.replace(/\D/g, '')
    let formattedPhone = ''

    if (!phoneInput.length) return ''

    if (e.target.value.length !== selectionStart) {
        if (/\D/g.test((e.nativeEvent as InputEvent).data ?? '')) {
            return phoneInput
        }
        return e.target.value
    }

    if (russianNumberBeginnings.indexOf(phoneInput[0]) > -1) {
        // russian number
        if (phoneInput[0] === '9') phoneInput = '7' + phoneInput
        const firstSymbols = phoneInput[0] === '8' ? '8' : '+7'
        formattedPhone = firstSymbols + ' '
        if (!!phoneInput.length) {
            formattedPhone += '(' + phoneInput.substring(1, 4)
        }
        if (phoneInput.length >= 5) {
            formattedPhone += ') ' + phoneInput.substring(4, 7)
        }
        if (phoneInput.length >= 8) {
            formattedPhone += '-' + phoneInput.substring(7, 9)
        }
        if (phoneInput.length >= 10) {
            formattedPhone += '-' + phoneInput.substring(9, 11)
        }
    } else {
        // not russian number
        formattedPhone = `+${phoneInput.substring(0, 16)}`
    }

    return formattedPhone
}

const cabinetMask = (value: string, type: Buildings) => {
    const room = value.replace(/\D/g, '')
    const subroom = value.match(/(?<=\d)[а-яА-Я]/)
    let formattedValue = ''

    if (!value) return ''
    switch (type) {
        case 'БС':
            if (value === 'БС') return ''
            formattedValue = 'БС '
            const building = value.substring(3).match(/^[а-яА-Я]{1,2}/)
            if (!building || !building[0]?.toUpperCase()?.match(/^[А-Я]{1,2}$/)) return formattedValue
            formattedValue += building[0].toUpperCase()
            if (
                building[0].length === 1
                    ? value[3] && !value[5] && value[4] === '-'
                    : value[4] && !value[6] && value[5] === '-'
            )
                return formattedValue + '-'
            if (room.length > 0) formattedValue += '-'
            formattedValue += room.substring(0, 3)
            if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
            formattedValue += subroom[0].toLowerCase()
            return formattedValue.substring(0, 10)
        case 'ПР':
            if (value === 'ПР') return ''
            formattedValue = 'ПР-'
            formattedValue += room.substring(0, 4)
            if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
            formattedValue += subroom[0].toLowerCase()
            return formattedValue.substring(0, 8)
        case 'АВ':
            if (value === 'АВ') return ''
            formattedValue = 'АВ-'
            formattedValue += room.substring(0, 4)
            if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
            formattedValue += subroom[0].toLowerCase()
            return formattedValue.substring(0, 8)
        case 'ПК':
            if (value === 'ПК') return ''
            formattedValue = 'ПК-'
            formattedValue += room.substring(0, 3)
            if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
            formattedValue += subroom[0].toLowerCase()
            return formattedValue.substring(0, 7)
        case 'МИХ':
            if (value === 'МИХ') return ''
            formattedValue = 'МИХ-'
            formattedValue += room.substring(0, 4)
            if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
            formattedValue += subroom[0].toLowerCase()
            return formattedValue.substring(0, 9)
        case 'СС':
            if (value === 'СС') return ''
            formattedValue = 'СС-'
            formattedValue += room.substring(0, 4)
            if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
            formattedValue += subroom[0].toLowerCase()
            return formattedValue.substring(0, 9)
        default:
            return value
    }
}

const innerPhoneMask = (value: string) => value.replace(/\D/g, '').substring(0, 4)

const Masks = {
    groupMask,
    phoneMask,
    cabinetMask,
    innerPhoneMask,
}

export default Masks
