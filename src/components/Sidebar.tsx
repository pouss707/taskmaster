import Accounttab from './Accounttab'

interface SidebarProps {
    onClose: () => void
}

function Sidebar(props: SidebarProps) {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            <Accounttab onClose={props.onClose} />
        </div>
    )
}

export default Sidebar
