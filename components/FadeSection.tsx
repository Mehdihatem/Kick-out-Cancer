import { motion, Variants } from 'framer-motion'
import { PropsWithChildren } from 'react'

const variant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

interface FadeSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function FadeSection({ children, id, className = '' }: FadeSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={variant}
      className={`pt-20 ${className}`}
    >
      {children}
    </motion.section>
  )
} 