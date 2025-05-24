import { motion, HTMLMotionProps, PanInfo } from 'framer-motion'
import { ReactNode, ComponentPropsWithoutRef } from 'react'

/* -------------------------------------------------
   1)  Base HTML → on supprime les trois handlers drag React
---------------------------------------------------*/
type NativeButton = Omit<
  ComponentPropsWithoutRef<'button'>,
  'onDrag' | 'onDragStart' | 'onDragEnd'
>

/* -------------------------------------------------
   2)  Motion → apporte ses propres handlers (2 params)
---------------------------------------------------*/
type MotionButton = HTMLMotionProps<'button'>

/* -------------------------------------------------
   3)  Fusion + tes props métier
---------------------------------------------------*/
export type ButtonProps = NativeButton &
  MotionButton & {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'text'
    size?: 'sm' | 'md' | 'lg'
    fullWidth?: boolean
    className?: string
    /* (facultatif) tu peux redéclarer onDrag* pour l'auto-complétion : */
    onDrag?: (
      e: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => void
    onDragStart?: (
      e: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => void
    onDragEnd?: (
      e: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => void
  }

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props           // garanti sans handler React parasite
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-coral text-white hover:bg-coral/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    text: 'text-primary hover:bg-primary/10'
  } as const

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  } as const

  const width = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}         // plus aucun conflit possible
    >
      {children}
    </motion.button>
  )
} 