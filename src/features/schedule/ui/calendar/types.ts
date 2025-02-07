import { DayCalendarEvent } from '@shared/api/model'

export type WeekEvents = {
    monday: DayCalendarEvent[]
    tuesday: DayCalendarEvent[]
    wednesday: DayCalendarEvent[]
    thursday: DayCalendarEvent[]
    friday: DayCalendarEvent[]
    saturday: DayCalendarEvent[]
} | null
