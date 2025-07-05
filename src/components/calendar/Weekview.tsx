import type { WeekViewProps } from './Calendartypes'

export default function WeekView({ currentDate, events }: WeekViewProps) {
    console.log(currentDate, events)
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const hours: number[] = Array.from({ length: 24 }, (_, i) => i)

    return (
        <div className="bg-white rounded-lg border overflow-hidden h-132">
            <div className="grid grid-cols-8 border-b">
                <div className="p-3 text-sm font-semibold text-gray-700">
                    Time
                </div>
                {dayNames.map((day) => (
                    <div
                        key={day}
                        className="p-3 text-center text-sm font-semibold text-gray-700 border-l"
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-8 max-h-121 overflow-y-auto">
                {hours.map((hour) => (
                    <div key={hour} className="contents">
                        <div className="p-2 text-xs text-gray-500 border-b border-r">
                            {hour.toString().padStart(2, '0')}:00
                        </div>
                        {dayNames.map((day) => (
                            <div
                                key={`${hour}-${day}`}
                                className="p-2 border-b border-l min-h-12 hover:bg-gray-50"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
