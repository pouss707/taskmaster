import Accounttab from './Accounttab'

interface SidebarProps {
    onClose: () => void
}

function Sidebar(props: SidebarProps) {
    return (
        <div className="w-75 h-screen bg-gray-800 text-white gap-5 flex flex-col">
            <div className="w-75 bg-gray-800 text-white flex flex-col items-center">
                <Accounttab onClose={props.onClose} />
            </div>
            <div className="p-2"></div>
        </div>
    )
}

export default Sidebar
