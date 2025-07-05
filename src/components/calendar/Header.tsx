import type { CalendarHeaderProps, ViewType } from './Calendartypes'
import { Calendar, ChevronLeft, ChevronRight, Plus } from 'lucide-react'

function CalendarHeader({
    currentDate,
    onNavigate,
    onViewChange,
    onAddEvent,
    view,
}: CalendarHeaderProps) {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <div className="flex items-center justify-between">
                {/* Title and Month Navigation */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-8 h-8 text-blue-600" />
                        <h1 className="text-2xl font-bold text-gray-900">
                            Calendar
                        </h1>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => onNavigate(-1)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>

                        <h2 className="text-lg font-semibold text-gray-900 min-w-48 text-center">
                            {monthNames[currentDate.getMonth()]}{' '}
                            {currentDate.getFullYear()}
                        </h2>

                        <button
                            onClick={() => onNavigate(1)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* View Type Switch & Add Button */}
                <div className="flex items-center space-x-3">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        {(['month', 'week', 'day'] as ViewType[]).map(
                            (viewType) => (
                                <button
                                    key={viewType}
                                    onClick={() => onViewChange(viewType)}
                                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                        view === viewType
                                            ? 'bg-white text-blue-600 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {viewType.charAt(0).toUpperCase() +
                                        viewType.slice(1)}
                                </button>
                            )
                        )}
                    </div>

                    <button
                        onClick={onAddEvent}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Event</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CalendarHeader
