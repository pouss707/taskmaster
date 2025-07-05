import type { MonthViewProps, CalendarEvent } from './Calendartypes'

export default function Monthview({
    currentDate,
    events,
    onEventClick,
    onDateClick,
}: MonthViewProps) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const getDaysInMonth = (date: Date): (number | null)[] => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDayOfWeek = firstDay.getDay()

        const days: (number | null)[] = []

        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day)
        }

        return days
    }

    const isToday = (day: number): boolean => {
        const today = new Date()
        return (
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        )
    }

    const getEventsForDate = (day: number): CalendarEvent[] => {
        const dateStr = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
        ).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        return events.filter((event) => event.date === dateStr)
    }

    const handleDateClick = (day: number): void => {
        const dateStr = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
        ).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        onDateClick(dateStr)
    }

    const days = getDaysInMonth(currentDate)

    return (
        <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
            {dayNames.map((day) => (
                <div
                    key={day}
                    className="bg-gray-50 p-3 text-center text-sm font-semibold text-gray-700 border-b"
                >
                    {day}
                </div>
            ))}

            {days.map((day, index) => {
                const dayEvents = day ? getEventsForDate(day) : []

                return (
                    <div
                        key={index}
                        className={`bg-white min-h-24 p-2 relative hover:bg-gray-50 transition-colors ${
                            day ? 'cursor-pointer' : ''
                        }`}
                        onClick={() => day && handleDateClick(day)}
                    >
                        {day && (
                            <>
                                <div
                                    className={`text-sm font-medium mb-1 ${
                                        isToday(day)
                                            ? 'text-blue-600'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {isToday(day) && (
                                        <div className="absolute top-1 left-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                    <span
                                        className={isToday(day) ? 'ml-4' : ''}
                                    >
                                        {day}
                                    </span>
                                </div>

                                <div className="space-y-1">
                                    {dayEvents.slice(0, 2).map((event) => (
                                        <div
                                            key={event.id}
                                            className={`${event.color} text-white text-xs px-2 py-1 rounded-md truncate cursor-pointer hover:opacity-80 transition-opacity`}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                onEventClick(event)
                                            }}
                                        >
                                            {event.title}
                                        </div>
                                    ))}
                                    {dayEvents.length > 2 && (
                                        <div className="text-xs text-gray-500 px-2">
                                            +{dayEvents.length - 2} more
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
