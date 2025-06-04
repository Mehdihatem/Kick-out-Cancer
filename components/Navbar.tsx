import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const items = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#notre-ambition', label: 'Notre ambition' },
    { href: '#prochain-evenement', label: 'Prochain événement' },
    { href: '#partenaire-scientifique', label: 'Partenaire scientifique' },
    { href: '#nos-partenaires-fondateurs', label: 'Nos partenaires fondateurs' },
    { href: '#nos-partenaires', label: 'Nos partenaires' },
    { href: '#qui-sommes-nous', label: 'Qui sommes-nous' },
    { href: '#temoignages-membres-fondateurs', label: 'Témoignages' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-8">
            <Link href="#hero" className="flex items-center">
              <Image
                src="/images/kick-out-cancer-logo.png"
                alt="Kick Out Cancer logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </Link>
            <ul className="flex items-center gap-8 text-sm font-medium">
              {items.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 