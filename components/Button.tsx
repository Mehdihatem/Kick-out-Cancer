import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode, ElementType, AnchorHTMLAttributes } from 'react'

// ⚡️ N'utilise JAMAIS React.ButtonHTMLAttributes ici ⚡️
type NativeButton = Omit<React.ComponentPropsWithoutRef<'button'>, 'onDrag' | 'onDragStart' | 'onDragEnd'>

// ⚡️ N'utilise JAMAIS React.TouchEvent ici ⚡️
type NativeEvt = MouseEvent | TouchEvent | PointerEvent

// ⚡️ N'utilise JAMAIS React.MouseEvent ici ⚡️
type MotionOnly = HTMLMotionProps<'button'>

// ⚡️ N'utilise JAMAIS React.TouchEvent ici ⚡️
type MotionEvt = MouseEvent | TouchEvent | PointerEvent

type ButtonOwnProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
  as?: ElementType
}

/* 👉 on retire la version React des handlers */
type CleanButtonHTML = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'onDrag' | 'onDragStart' | 'onDragEnd'
>

/* 👉 on enlève explicitement onDrag* pour être sûr */
type CleanMotion = Omit<MotionOnly, 'onDrag' | 'onDragStart' | 'onDragEnd'>

type ButtonProps = CleanMotion & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
  as?: ElementType
} & Partial<AnchorHTMLAttributes<HTMLAnchorElement>>

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  as: Component = motion.button,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors'
  const variants = {
    primary:   'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-coral  text-white hover:bg-coral/90',
    outline:   'border-2 border-primary text-primary hover:bg-primary/10',
    text: 'text-primary hover:bg-primary/10'
  } as const
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  } as const

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
} 