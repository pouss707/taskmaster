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
                    className="absolute top-4 left-4 text-gray-700 hover:text-black z-50 bg-white p-2 rounded-md shadow"
                    aria-label="Open sidebar"
                >
                    <MenuIcon />
                </button>
            )}

            <main className="flex-1 p-4">
                <h1 className="text-xl font-bold">Welcome to the Dashboard</h1>
            </main>
        </div>
    )
}

export default DashboardLayout
