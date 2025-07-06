import type {
    CalendarEvent,
    CustomFullCalendarProps,
    ViewType,
} from './Calendartypes'
import { useState, useEffect } from 'react'
import CalendarHeader from './Header'
import EventList from './Eventlist'
import Monthview from './Monthview'
import WeekView from './Weekview'
import MiniCalendar from './Minicalendar'

function CustomFullCalendar({
    initialEvents = [],
    onEventClick,
    onDateClick,
    setEvents,
    inputValue,
    onAddEvent,
}: CustomFullCalendarProps) {
    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const [view, setView] = useState<ViewType>('month')
    const [events, setLocalEvents] = useState<CalendarEvent[]>(
        initialEvents.length > 0
            ? initialEvents
            : [
                  {
                      id: 1,
                      title: 'Team Meeting',
                      date: '2025-01-15',
                      time: '10:00',
                      duration: '1h',
                      color: 'bg-blue-500',
                      attendees: 5,
                  },
                  {
                      id: 2,
                      title: 'Product Launch',
                      date: '2025-01-20',
                      time: '14:00',
                      duration: '2h',
                      color: 'bg-purple-500',
                      attendees: 12,
                  },
                  {
                      id: 3,
                      title: 'Client Presentation',
                      date: '2025-01-25',
                      time: '09:30',
                      duration: '1.5h',
                      color: 'bg-green-500',
                      attendees: 8,
                  },
              ]
    )

    useEffect(() => {
        if (initialEvents.length > 0) {
            setLocalEvents(initialEvents)
        }
    }, [initialEvents])

    const navigateMonth = (direction: number): void => {
        const newDate = new Date(currentDate)
        newDate.setMonth(currentDate.getMonth() + direction)
        setCurrentDate(newDate)
    }

    const handleEventClick = (event: CalendarEvent): void => {
        if (onEventClick) {
            onEventClick(event)
        }
    }

    const handleDateClick = (date: string): void => {
        if (onDateClick) {
            onDateClick(date)
        }
    }

    const handleAddEvent = (): void => {
        if (onAddEvent) {
            onAddEvent()
        } else {
            if (inputValue && inputValue.title.trim() !== '') {
                const newEvent = { ...inputValue, id: events.length + 1 }
                setLocalEvents([...events, newEvent])
                if (setEvents) {
                    setEvents([...events, newEvent])
                }
            }
        }
    }

    return (
        <div className="w-full mx-auto p-6 bg-gradient-to-br min-h-screen flex flex-col justify-center gap-10">
            <CalendarHeader
                currentDate={currentDate}
                view={view}
                onNavigate={navigateMonth}
                onViewChange={setView}
                onAddEvent={handleAddEvent}
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 ">
                    <div className="bg-white rounded-xl shadow-sm border p-6 h-145">
                        {view === 'month' && (
                            <Monthview
                                currentDate={currentDate}
                                events={events}
                                onEventClick={handleEventClick}
                                onDateClick={handleDateClick}
                            />
                        )}
                        {view === 'week' && (
                            <WeekView
                                currentDate={currentDate}
                                events={events}
                            />
                        )}
                        {view === 'day' && (
                            <div className="text-center text-gray-500 py-12">
                                Day view implementation
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <MiniCalendar
                        currentDate={currentDate}
                        onDateClick={handleDateClick}
                    />

                    <EventList
                        events={events}
                        onEventClick={handleEventClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomFullCalendar
