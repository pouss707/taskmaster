import logo from '../assets/logo.png'
import Closebutton from './Closebutton'

interface AccounttabProps {
    onClose: () => void
}

function Accounttab(props: AccounttabProps) {
    return (
        <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-2 border-b border-gray-700">
            <div className="flex items-center gap-5">
                <img
                    src={logo}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border border-gray-600 cursor-pointer"
                />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">islam</span>
                    <span className="text-sm text-gray-400">
                        islam@gmail.com
                    </span>
                </div>
            </div>
            <Closebutton onClose={props.onClose} />
        </div>
    )
}

export default Accounttab
