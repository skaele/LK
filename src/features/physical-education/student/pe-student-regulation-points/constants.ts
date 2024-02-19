import { RegulationType } from '@entities/pe-student-regulation-points/types'

export const SelectorData: { id: RegulationType; title: string }[] = [
    { id: RegulationType.FlexionAndExtensionOfArms, title: 'Сгибание и разгибание рук' },
    { id: RegulationType.JumpingRopeJumps, title: 'Прыжки со скакалкой' },
    { id: RegulationType.Jumps, title: 'Прыжок в длину' },
    { id: RegulationType.PullUps, title: 'Подтягивания(Вис)' },
    { id: RegulationType.ShuttleRun, title: 'Челночный бег' },
    { id: RegulationType.Squats, title: 'Приседания' },
    { id: RegulationType.Tilts, title: 'Наклон' },
    { id: RegulationType.TorsoLifts, title: 'Подъемы туловища' },
    { id: RegulationType.Other, title: 'Другое' },
]
