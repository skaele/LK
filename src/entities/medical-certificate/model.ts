import { getMedicalCertForm } from '@shared/api/medical-cert-api'
import { createEffect, createEvent, restore, sample } from 'effector'

const load = createEvent()

const loadFx = createEffect(async () => (await getMedicalCertForm()).data)

sample({ clock: load, target: loadFx })

const $medicalCert = restore(loadFx, null)

export const stores = { medicalCert: $medicalCert }

export const events = { load }
