import Accounttab from './Accounttab'
import Addevent from './Addevent'
import type { CalendarEvent } from '../calendar/Calendartypes'

interface SidebarProps {
    onClose: () => void
    inputValue: CalendarEvent
    setInputValue: React.Dispatch<React.SetStateAction<CalendarEvent>>
    onAddEvent: () => void
}

function Sidebar({
    onClose,
    inputValue,
    setInputValue,
    onAddEvent,
}: SidebarProps) {
    return (
        <div className="w-75 h-screen bg-gray-800 text-white gap-5 flex flex-col">
            <div className="w-75 bg-gray-800 text-white flex flex-col items-center">
                <Accounttab onClose={onClose} />
            </div>
            <div>
                <Addevent
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onAddEvent={onAddEvent}
                />
            </div>
        </div>
    )
}

export default Sidebar
