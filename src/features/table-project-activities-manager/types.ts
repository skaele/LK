export enum StudentActivityResult {
    // Зачтено
    passed = 'Зачтено',

    // Не зачтено
    notPassed = 'Не зачтено',
}

/**
 * Возможные колонки таблицы куратора студентов
 */
export enum StudentActivitiesColumn {
    // Подпроект
    subproject = 'subproject',

    // Куратор
    manager = 'manager',

    // Группа
    group = 'group',

    // ФИО
    name = 'name',

    // Почта
    email = 'email',

    // Первая аттестация
    firstValidation = 'first-validation',

    // Вторая аттестация
    secondValidation = 'second-validation',

    // Баллы защиты
    defensePoints = 'defense-points',

    // Итого
    resultPoints = 'resultPoints',

    // Результат
    result = 'result',

    // Звёзды
    stars = 'stars',

    // Перенос баллов
    transferredPoints = 'transferredPoints',

    // Пересдача
    retaking = 'retaking',
}

export type StudentActivityDataPrevSemesterRow = {
    [StudentActivitiesColumn.subproject]: string
    [StudentActivitiesColumn.manager]: string
    [StudentActivitiesColumn.group]: string
    [StudentActivitiesColumn.name]: string
    [StudentActivitiesColumn.email]: string
    [StudentActivitiesColumn.transferredPoints]: number
    [StudentActivitiesColumn.retaking]: number
    [StudentActivitiesColumn.resultPoints]: number
    [StudentActivitiesColumn.result]: StudentActivityResult
    [StudentActivitiesColumn.stars]: number
}

export type StudentActivityDataCurrentSemesterRow = {
    [StudentActivitiesColumn.subproject]: string
    [StudentActivitiesColumn.manager]: string
    [StudentActivitiesColumn.group]: string
    [StudentActivitiesColumn.name]: string
    [StudentActivitiesColumn.email]: string
    [StudentActivitiesColumn.firstValidation]: number
    [StudentActivitiesColumn.secondValidation]: number
    [StudentActivitiesColumn.defensePoints]: number
    [StudentActivitiesColumn.resultPoints]: number
    [StudentActivitiesColumn.result]: StudentActivityResult
    [StudentActivitiesColumn.stars]: number
}

export type StudentActivityData = {
    studentId: number
    expelled: boolean
} & (
    | ({
          isPrevSemester: true
      } & StudentActivityDataPrevSemesterRow)
    | ({
          isPrevSemester: false
      } & StudentActivityDataCurrentSemesterRow)
)

export type ProjectActivityManagerProject = { id: number; name: string }
