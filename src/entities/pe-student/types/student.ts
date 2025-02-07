import { HealthGroup, Specialization } from '@shared/api/physical-education'

export const healthGroupToTitle: Record<HealthGroup, string> = {
    None: '-',
    Basic: 'Основная',
    SpecialA: 'Специальная А',
    SpecialB: 'Специальная Б',
    Preparatory: 'Подготовительная',
    HealthLimitations: 'ОВЗ',
    Disabled: 'Инвалид',
}
export const specializationToTitle: Record<Specialization, string> = {
    None: '-',
    Basketball: 'Баскетбол',
    Volleyball: 'Волейбол',
    Aerobics: 'Аэробика',
    PowerLiftingAndCrossfit: 'Пауэрлифтинг и кроссфит',
    StreetLiftingAndArmLifting: 'Стритлифтинг и армлифтинг',
    GeneralPhysicalTraining: 'ОФП',
    GeneralPhysicalTrainingGym: 'ОФП (тренажерный зал)',
    FootRoom: 'Футзал',
    SMG: 'СМГ',
    TableTennis: 'СМГ настольный теннис',
    NordicWalking: 'СМГ скандинавская ходьба',
    InternalTeam: 'Сборная',
}
