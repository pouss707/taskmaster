import type { MiniCalendarProps } from './Calendartypes'

function MiniCalendar({ currentDate, onDateClick }: MiniCalendarProps) {
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

    const handleDateClick = (day: number): void => {
        const dateStr = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
        ).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        onDateClick(dateStr)
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Mini Calendar</h3>
            <div className="grid grid-cols-7 gap-1 text-center">
                {dayNames.map((day: string) => (
                    <div key={day} className="text-xs text-gray-500 p-1">
                        {day.charAt(0)}
                    </div>
                ))}
                {getDaysInMonth(currentDate).map(
                    (day: number | null, index: number) => (
                        <div
                            key={index}
                            className={`text-xs p-1 rounded cursor-pointer hover:bg-gray-100 ${
                                day && isToday(day)
                                    ? 'bg-blue-500 text-white'
                                    : ''
                            }`}
                            onClick={() => day && handleDateClick(day)}
                        >
                            {day}
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
export default MiniCalendar
