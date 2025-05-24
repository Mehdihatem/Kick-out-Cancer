import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const items = [
    { href: '#hero', label: 'Accueil' },
    { href: '#event', label: 'Prochain évènement' },
    { href: '#partners', label: 'Partenaires' },
    { href: '#supporters', label: 'Ils nous soutiennent' },
    { href: '#don', label: 'Faire un don' },
    { 
      href: 'https://www.helloasso.com/associations/kickoutcancer',
      label: 'Inscription',
      external: true
    },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center justify-center gap-8 px-4 py-4 text-sm font-medium">
          {items.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="text-gray-600 hover:text-primary transition-colors"
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
} 