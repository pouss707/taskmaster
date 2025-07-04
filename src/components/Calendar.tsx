import { useState } from 'react'
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addDays,
} from 'date-fns'

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    // Header with month and year and navigation arrows
    const header = () => (
        <div className="flex justify-between items-center mb-4">
            <button
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                aria-label="Previous month"
                className="text-white text-xl p-1 hover:bg-gray-700 rounded"
            >
                &lt;
            </button>
            <div className="text-white text-lg font-semibold cursor-pointer select-none">
                {format(currentDate, 'MMMM yyyy')}
            </div>
            <button
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                aria-label="Next month"
                className="text-white text-xl p-1 hover:bg-gray-700 rounded"
            >
                &gt;
            </button>
        </div>
    )

    // Days of week row
    const daysOfWeek = () => {
        const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        return (
            <div className="grid grid-cols-7 text-sm text-gray-400 mb-2">
                {days.map((day) => (
                    <div key={day} className="text-center">
                        {day}
                    </div>
                ))}
            </div>
        )
    }

    // Calendar cells with selectable days
    const cells = () => {
        const monthStart = startOfMonth(currentDate)
        const monthEnd = endOfMonth(monthStart)
        const startDate = startOfWeek(monthStart)
        const endDate = endOfWeek(monthEnd)

        const rows = []
        let days = []
        let day = startDate
        let formattedDate = ''

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day
                const isSelected = selectedDate && isSameDay(day, selectedDate)
                const isToday = isSameDay(day, new Date())
                const isCurrentMonth = isSameMonth(day, currentDate)

                formattedDate = format(day, 'd')

                days.push(
                    <div
                        key={day.toISOString()}
                        className={`text-center p-2 rounded-full cursor-pointer select-none
              ${isCurrentMonth ? 'text-white' : 'text-gray-600'}
              ${
                  isSelected
                      ? 'bg-blue-600 text-white font-semibold shadow-lg'
                      : ''
              }
              ${
                  isToday && !isSelected
                      ? 'border border-blue-600 rounded-full'
                      : ''
              }
            `}
                        onClick={() => setSelectedDate(cloneDay)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ')
                                setSelectedDate(cloneDay)
                        }}
                        aria-label={`Select day ${formattedDate}`}
                    >
                        {formattedDate}
                    </div>
                )
                day = addDays(day, 1)
            }

            rows.push(
                <div key={day.toISOString()} className="grid grid-cols-7">
                    {days}
                </div>
            )
            days = []
        }

        return <div className="space-y-1">{rows}</div>
    }

    return (
        <div className="w-full bg-gray-800 text-white p-2 select-none border-b border-gray-700 ">
            {header()}
            {daysOfWeek()}
            {cells()}
        </div>
    )
}

export default Calendar
