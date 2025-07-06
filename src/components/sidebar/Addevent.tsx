import type { CalendarEvent } from '../calendar/Calendartypes'

type Props = {
    inputValue: CalendarEvent
    setInputValue: (value: CalendarEvent) => void
    onAddEvent: () => void
}

export default function Addevent({
    inputValue,
    setInputValue,
    onAddEvent,
}: Props) {
    return (
        <form
            className="p-4 flex flex-col rounded-2xl gap-1 bg-white"
            onSubmit={(e) => {
                e.preventDefault()
                onAddEvent()
            }}
        >
            <input
                className="w-full p-2 rounded text-black"
                placeholder="Title"
                value={inputValue.title}
                onChange={(e) =>
                    setInputValue({ ...inputValue, title: e.target.value })
                }
            />
            <input
                type="date"
                className="w-full p-2 rounded text-black"
                value={inputValue.date}
                onChange={(e) =>
                    setInputValue({ ...inputValue, date: e.target.value })
                }
            />
            <input
                type="time"
                className="w-full p-2 rounded text-black"
                value={inputValue.time}
                onChange={(e) =>
                    setInputValue({ ...inputValue, time: e.target.value })
                }
            />
            <input
                className="w-full p-2 rounded text-black"
                placeholder="Duration"
                value={inputValue.duration}
                onChange={(e) =>
                    setInputValue({ ...inputValue, duration: e.target.value })
                }
            />
            <input
                type="number"
                className="w-full p-2 rounded text-black"
                placeholder="Attendees"
                value={inputValue.attendees}
                onChange={(e) =>
                    setInputValue({
                        ...inputValue,
                        attendees: parseInt(e.target.value) || 0,
                    })
                }
            />
            <select
                className="w-full p-2 rounded text-black"
                value={inputValue.color}
                onChange={(e) =>
                    setInputValue({ ...inputValue, color: e.target.value })
                }
            >
                <option value="">Select color</option>
                <option value="bg-blue-500">Blue</option>
                <option value="bg-green-500">Green</option>
                <option value="bg-purple-500">Purple</option>
                <option value="bg-red-500">Red</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Add Event
            </button>
        </form>
    )
}
