import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  {
    src: '/images/supporters/digilityx.png',
    alt: 'Digilityx',
    href: 'https://digilityx.com',
  },
  {
    src: '/images/supporters/elwood.png',
    alt: 'Elwood',
    href: 'https://elwood.fr',
  },
  {
    src: '/images/supporters/stetoo.png',
    alt: 'Stetoo',
    href: 'https://stetoo.com',
  },
]

export default function SupportersSection() {
  return (
    <section id="supporters" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-4xl grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        {logos.map((logo) => (
          <a
            key={logo.alt}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={96}
              className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ))}
      </motion.div>
    </section>
  )
} 