import React from 'react'
import { PEStudentVisits } from '.'
import { PEStudentAdditionalPoints } from '../pe-student-additional-points'
import { PEStudentRegulationPoints } from '../pe-student-regulation-points'

export const sliderData = [
    { title: 'Посещения', content: <PEStudentVisits /> },
    { title: 'Нормативы ', content: <PEStudentRegulationPoints /> },
    { title: 'Дополнительные баллы ', content: <PEStudentAdditionalPoints /> },
]
