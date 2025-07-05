import { useState } from 'react'
import Sidebar from '../components/sidebar/M_Sidebar'
import MenuIcon from '@mui/icons-material/Menu'
import CustomFullCalendar from '../components/calendar/M_Maincalendar'
function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const handleSidebar = (): void => {
        setIsSidebarOpen((prev) => !prev)
    }

    return (
        <div className="flex bg-blue-50">
            {isSidebarOpen && <Sidebar onClose={handleSidebar} />}
            {!isSidebarOpen && (
                <button
                    onClick={handleSidebar}
                    className="w-10 h-10 ml-2 mt-2 text-gray-700 hover:text-black z-50 bg-white p-2 rounded-md shadow"
                    aria-label="Open sidebar"
                >
                    <MenuIcon />
                </button>
            )}
            {/* 👇 Pass className as prop (optional) */}
            <CustomFullCalendar />
        </div>
    )
}

export default DashboardLayout
