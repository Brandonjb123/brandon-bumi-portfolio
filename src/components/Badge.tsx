
interface BadgeProps {
  label: string
  color?: 'green' | 'blue' | 'purple' | 'yellow' | 'red'
  icon?: string
}

const colorMap = {
  green: 'bg-green-400/10 text-green-400 border-green-400/30',
  blue: 'bg-blue-400/10 text-blue-400 border-blue-400/30',
  purple: 'bg-purple-400/10 text-purple-400 border-purple-400/30',
  yellow: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30',
  red: 'bg-red-400/10 text-red-400 border-red-400/30',
}

export default function Badge({ label, color = 'green', icon }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full border ${colorMap[color]} transition-all duration-300 hover:scale-105`}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {label}
    </span>
  )
}