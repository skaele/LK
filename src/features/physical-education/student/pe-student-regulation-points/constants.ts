import { RegulationType } from '@entities/pe-student-regulation-points/types'

export const SelectorData: { id: RegulationType; title: string }[] = [
    { id: RegulationType.FlexionAndExtensionOfArms, title: 'Сгибание и разгибание рук' },
    { id: RegulationType.JumpingRopeJumps, title: 'Прыжки со скакалкой' },
    { id: RegulationType.Jumps, title: 'Прыжки' },
    { id: RegulationType.PullUps, title: 'Подтягивания' },
    { id: RegulationType.ShuttleRun, title: 'Челночный бег' },
    { id: RegulationType.Squats, title: 'Приседания' },
    { id: RegulationType.Tilts, title: 'Наклон' },
    { id: RegulationType.TorsoLifts, title: 'Подъемы туловища' },
    { id: RegulationType.Other, title: 'Другое' },
]
