export type CalendarEvent = {
    id: number
    title: string
    date: string
    time: string
    duration: string
    color: string
    attendees: number
}

export type ViewType = 'month' | 'week' | 'day'

export type CalendarHeaderProps = {
    currentDate: Date
    view: ViewType
    onNavigate: (direction: number) => void
    onViewChange: (view: ViewType) => void
    onAddEvent: () => void
}

export type MonthViewProps = {
    currentDate: Date
    events: CalendarEvent[]
    onEventClick: (event: CalendarEvent) => void
    onDateClick: (date: string) => void
}

export type WeekViewProps = {
    currentDate: Date
    events: CalendarEvent[]
}

export type MiniCalendarProps = {
    currentDate: Date
    onDateClick: (date: string) => void
}

export type EventListProps = {
    events: CalendarEvent[]
    onEventClick: (event: CalendarEvent) => void
}

export type QuickActionsProps = {
    onAction: (action: string) => void
}

export interface CustomFullCalendarProps {
    initialEvents?: CalendarEvent[]
    onEventClick?: (event: CalendarEvent) => void
    onDateClick?: (date: string) => void
    setEvents?: React.Dispatch<React.SetStateAction<CalendarEvent[]>>
    inputValue?: CalendarEvent
    setInputValue?: React.Dispatch<React.SetStateAction<CalendarEvent>>
    onAddEvent?: () => void
}
