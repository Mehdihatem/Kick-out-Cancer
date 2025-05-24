import { motion } from 'framer-motion'

interface ImpactMeterProps {
  currentAmount: number
  targetAmount: number
  label: string
}

const ImpactMeter = ({ currentAmount, targetAmount, label }: ImpactMeterProps) => {
  const percentage = Math.min((currentAmount / targetAmount) * 100, 100)

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm font-medium text-primary">
          {percentage.toFixed(1)}%
        </span>
      </div>
      
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-primary"
        />
      </div>
      
      <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
        <span>{currentAmount.toLocaleString()} €</span>
        <span>{targetAmount.toLocaleString()} €</span>
      </div>
    </div>
  )
}

export default ImpactMeter 