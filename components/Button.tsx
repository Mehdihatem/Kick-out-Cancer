import { motion, HTMLMotionProps, PanInfo } from 'framer-motion'
import { ReactNode } from 'react'

// ⚡️ N'utilise JAMAIS React.ButtonHTMLAttributes ici ⚡️
type NativeButton = Omit<React.ComponentPropsWithoutRef<'button'>, 'onDrag' | 'onDragStart' | 'onDragEnd'>

type MotionButton = HTMLMotionProps<'button'>

type NativeEvt = MouseEvent | TouchEvent | PointerEvent

type ButtonOwnProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string

  /* 👉 version Framer Motion (2 paramètres) */
  onDrag?: (e: NativeEvt, info: PanInfo) => void
  onDragStart?: (e: NativeEvt, info: PanInfo) => void
  onDragEnd?: (e: NativeEvt, info: PanInfo) => void
}

/* 👉 on retire la version React des handlers */
type CleanButtonHTML = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'onDrag' | 'onDragStart' | 'onDragEnd'
>

type ButtonProps = ButtonOwnProps & CleanButtonHTML & HTMLMotionProps<'button'>

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  onDrag,
  onDragStart,
  onDragEnd,
  ...rest /* ← garanti SANS onDrag React */
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
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      /* on repasse – volontairement – la version 2 paramètres */
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      {...rest} /* ✅ plus aucune signature parasite */
    >
      {children}
    </motion.button>
  )
} 