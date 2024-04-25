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

const cabinetMask = (value: string, type: 'BS' | 'other') => {
    const room = value.replace(/\D/g, '')
    const subroom = value.match(/(?<=\d)[а-яА-Я]/)

    if (type === 'BS') {
        if (!value) return ''
        if (value === 'БС') return ''
        let formattedValue = 'БС '
        if (!value[3]?.toUpperCase()?.match(/[А-Я]/)) {
            if (value.length === 1 && value[0]?.toUpperCase()?.match(/[А-Я]/)) {
                formattedValue += value[0].toUpperCase()
            } else return formattedValue
        } else formattedValue += value[3].toUpperCase()
        if (value[3] && !value[5] && value[4] === '-') return formattedValue + '-'
        if (room.length > 0) formattedValue += '-'
        formattedValue += room.substring(0, 3)
        if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
        formattedValue += subroom[0].toLowerCase()
        return formattedValue.substring(0, 9)
    }
    if (type === 'other') {
        const lowercaseValue = value.toLowerCase()
        if (!value) return ''
        let address = ''
        if (lowercaseValue.startsWith('пр') || lowercaseValue.startsWith('пк') || lowercaseValue.startsWith('ав'))
            address = value.substring(0, 2).toUpperCase()
        if (lowercaseValue.startsWith('мих')) address = value.substring(0, 3).toUpperCase()
        if (!address) return value
        let formattedValue = address
        if (
            (value.startsWith('ПР') || value.startsWith('ПК') || value.startsWith('АВ')) &&
            !value[3] &&
            value[2] === '-'
        )
            return formattedValue + '-'
        if (value.startsWith('МИХ') && !value[4] && value[3] === '-') return formattedValue + '-'
        if (room.length > 0) formattedValue += '-'
        if (address === 'ПК') formattedValue += room.substring(0, 3)
        else formattedValue += room.substring(0, 4)
        if (!subroom || !subroom[0]?.toLowerCase()?.match(/[а-я]/)) return formattedValue
        formattedValue += subroom[0].toLowerCase()
        if (address === 'МИХ') return formattedValue.substring(0, 9)
        if (address === 'ПК') return formattedValue.substring(0, 7)
        return formattedValue.substring(0, 8)
    }
    return value
    // if (value.length > 8) return value.substring(0, 8)
    // if (value.length === 3 && prevValue?.length === 2) return value + '-'
    // if (value.length === 3 && prevValue?.length === 4) return value.substring(0, 2)
    // return value

    // if (value.startsWith('БС')) {
    //     // Формат для корпуса БС: БС А-000б
    //     const regex = /^БС ([А-Я])-?(\d*)/

    //     // Ищем соответствие ввода регулярному выражению
    //     const match = value.match(regex)
    //     console.log(match)

    //     if (match) {
    //         const corpsLetter = match[1] // Заглавная русская буква для обозначения корпуса
    //         const roomNumber = match[2] ? match[2] : '' // Номер кабинета, если он есть

    //         // Возвращаем применённую маску
    //         return `БС ${corpsLetter}-УУУ`.replace('УУУ', roomNumber)
    //     }
    // }

    // return value
}

const innerPhoneMask = (value: string) => value.replace(/\D/g, '').substring(0, 4)

const Masks = {
    groupMask,
    phoneMask,
    cabinetMask,
    innerPhoneMask,
}

export default Masks
