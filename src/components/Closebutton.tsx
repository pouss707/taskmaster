import CloseIcon from '@mui/icons-material/Close'

interface ClosebuttonProps {
    onClose: () => void
}

function Closebutton(props: ClosebuttonProps) {
    return (
        <button
            onClick={props.onClose}
            className="cursor-pointer text-white"
            aria-label="Close sidebar"
        >
            <CloseIcon />
        </button>
    )
}

export default Closebutton
