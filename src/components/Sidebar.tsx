import Accounttab from './Accounttab'
import Calendar from './Calendar'
import Mycalendar from './Mycalendar'
import Favorites from './Favorites'
interface SidebarProps {
    onClose: () => void
}

function Sidebar(props: SidebarProps) {
    return (
        <div className="w-75 h-screen bg-gray-800 text-white gap-5 flex flex-col">
            <div className="w-75 bg-gray-800 text-white flex flex-col items-center">
                <Accounttab onClose={props.onClose} />
                <Calendar />
            </div>
            <div className="p-2">
                <Mycalendar />
                <Favorites />
            </div>
        </div>
    )
}

export default Sidebar
