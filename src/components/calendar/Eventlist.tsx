import type { EventListProps, CalendarEvent } from './Calendartypes'
import { Clock, Users } from 'lucide-react'

function EventList({ events, onEventClick }: EventListProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-4 h-80">
            <h3 className="font-semibold text-gray-900 mb-3">
                Upcoming Events
            </h3>
            <div className="space-y-3">
                {events.map((event: CalendarEvent) => (
                    <div
                        key={event.id}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => onEventClick(event)}
                    >
                        <div
                            className={`w-3 h-3 rounded-full ${event.color} mt-1`}
                        ></div>
                        <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">
                                {event.title}
                            </h4>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                                <Clock className="w-3 h-3" />
                                <span>{event.time}</span>
                                <Users className="w-3 h-3" />
                                <span>{event.attendees}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EventList
