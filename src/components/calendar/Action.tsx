import type { QuickActionsProps } from './Calendartypes'

export default function QuickActions({ onAction }: QuickActionsProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="space-y-2">
                <button
                    onClick={() => onAction('meeting')}
                    className="w-full text-left p-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                    Create Meeting
                </button>
                <button
                    onClick={() => onAction('block')}
                    className="w-full text-left p-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                    Block Time
                </button>
                <button
                    onClick={() => onAction('reminder')}
                    className="w-full text-left p-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                    Set Reminder
                </button>
            </div>
        </div>
    )
}
