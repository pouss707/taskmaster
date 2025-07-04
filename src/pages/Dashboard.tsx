import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MenuIcon from '@mui/icons-material/Menu'

function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    function handleSidebar(): void {
        setIsSidebarOpen((prev) => !prev)
    }

    return (
        <div className="flex">
            {isSidebarOpen && <Sidebar onClose={handleSidebar} />}
            {!isSidebarOpen && (
                <button
                    onClick={handleSidebar}
                    className=" w-10 h-10 ml-2 mt-2 text-gray-700 hover:text-black z-50 bg-white p-2 rounded-md shadow"
                    aria-label="Open sidebar"
                >
                    <MenuIcon />
                </button>
            )}
        </div>
    )
}

export default DashboardLayout
