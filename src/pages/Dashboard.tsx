import { useState } from 'react'
import Sidebar from '../components/sidebar/M_Sidebar'
import MenuIcon from '@mui/icons-material/Menu'
import CustomFullCalendar from '../components/calendar/M_Maincalendar'
import type { CalendarEvent } from '../components/calendar/Calendartypes'

function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const [inputValue, setInputValue] = useState<CalendarEvent>({
        id: 0,
        title: '',
        date: '',
        time: '',
        duration: '',
        color: '',
        attendees: 0,
    })

    const [events, setEvents] = useState<CalendarEvent[]>([])

    const handleAddEvent = () => {
        if (inputValue.title.trim() !== '') {
            setEvents([...events, { ...inputValue, id: events.length + 1 }])
            setInputValue({
                id: 0,
                title: '',
                date: '',
                time: '',
                duration: '',
                color: '',
                attendees: 0,
            })
        }
    }

    const handleSidebar = () => setIsSidebarOpen((prev) => !prev)

    return (
        <div className="flex bg-blue-50">
            {isSidebarOpen && (
                <Sidebar
                    onClose={handleSidebar}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onAddEvent={handleAddEvent}
                />
            )}

            {!isSidebarOpen && (
                <button
                    onClick={handleSidebar}
                    className="w-10 h-10 ml-2 mt-2 text-gray-700 hover:text-black z-50 bg-white p-2 rounded-md shadow"
                    aria-label="Open sidebar"
                >
                    <MenuIcon />
                </button>
            )}

            <CustomFullCalendar
                initialEvents={events}
                setEvents={setEvents}
                inputValue={inputValue}
                setInputValue={setInputValue}
                onAddEvent={handleAddEvent}
            />
        </div>
    )
}

export default DashboardLayout
