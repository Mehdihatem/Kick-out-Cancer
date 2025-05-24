import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

const Card = ({ children, className = '', onClick }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bg-white dark:bg-dark rounded-xl p-6 shadow-soft ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card 