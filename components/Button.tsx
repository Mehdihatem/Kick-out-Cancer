import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type MotionButtonProps = HTMLMotionProps<"button">

interface ButtonProps extends Omit<MotionButtonProps, "children"> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-coral text-white hover:bg-coral/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const width = fullWidth ? 'w-full' : ''

  const motionProps: MotionButtonProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`,
    ...props
  }

  return (
    <motion.button {...motionProps}>
      {children}
    </motion.button>
  )
}

export default Button 