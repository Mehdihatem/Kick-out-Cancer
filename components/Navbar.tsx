import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const items = [
    { href: '#hero', label: 'Accueil' },
    { href: '#about', label: 'Notre ambition' },
    { href: '#event', label: 'Prochain évènement' },
    { href: '#partners', label: 'Partenaires' },
    { href: '#supporters', label: 'Ils nous soutiennent' },
    { href: '#don', label: 'Je soutiens la recherche' },
    { href: '#team', label: 'Qui sommes-nous ?' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <ul className="flex items-center justify-center gap-8 px-4 py-4 text-sm font-medium">
          {items.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="text-gray-600 hover:text-primary transition-colors"
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