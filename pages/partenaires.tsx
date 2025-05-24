import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Card from '../components/Card'
import PartnerLogo from '../components/PartnerLogo'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const partners = {
  headline: [
    {
      name: 'IHU PRISM',
      logo: '/images/partners/ihu-prism.png',
      description: 'Institut Hospitalo-Universitaire de recherche en santé'
    }
  ],
  gold: [
    {
      name: 'CentraleSupélec',
      logo: '/images/partners/centralesupelec.png',
      description: 'Grande école d\'ingénieurs'
    },
    {
      name: 'Université Paris-Saclay',
      logo: '/images/partners/paris-saclay.png',
      description: 'Université de recherche intensive'
    }
  ],
  silver: [
    {
      name: 'Gustave Roussy',
      logo: '/images/partners/gustave-roussy.png',
      description: 'Centre de lutte contre le cancer'
    },
    {
      name: 'Institut Curie',
      logo: '/images/partners/curie.png',
      description: 'Centre de recherche et de soins'
    }
  ],
  bronze: [
    {
      name: 'Ligue contre le Cancer',
      logo: '/images/partners/ligue.png',
      description: 'Association de lutte contre le cancer'
    },
    {
      name: 'Fondation ARC',
      logo: '/images/partners/arc.png',
      description: 'Fondation pour la recherche sur le cancer'
    }
  ]
}

export default function Partners() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/partners-hero.jpg"
          alt="Nos partenaires"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos partenaires
            </h1>
            <p className="text-xl md:text-2xl">
              Ensemble pour la recherche contre le cancer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Headline Partners */}
          <motion.div
            {...fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Partenaires Headline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.headline.map((partner) => (
                <Card key={partner.name}>
                  <div className="flex flex-col items-center text-center">
                    <PartnerLogo
                      src={partner.logo}
                      alt={partner.name}
                      tier="headline"
                    />
                    <h3 className="text-xl font-bold mt-6 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{partner.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Gold Partners */}
          <motion.div
            {...fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Partenaires Gold</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.gold.map((partner) => (
                <Card key={partner.name}>
                  <div className="flex flex-col items-center text-center">
                    <PartnerLogo
                      src={partner.logo}
                      alt={partner.name}
                      tier="gold"
                    />
                    <h3 className="text-xl font-bold mt-6 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{partner.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Silver Partners */}
          <motion.div
            {...fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Partenaires Silver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.silver.map((partner) => (
                <Card key={partner.name}>
                  <div className="flex flex-col items-center text-center">
                    <PartnerLogo
                      src={partner.logo}
                      alt={partner.name}
                      tier="silver"
                    />
                    <h3 className="text-xl font-bold mt-6 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{partner.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Bronze Partners */}
          <motion.div
            {...fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Partenaires Bronze</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.bronze.map((partner) => (
                <Card key={partner.name}>
                  <div className="flex flex-col items-center text-center">
                    <PartnerLogo
                      src={partner.logo}
                      alt={partner.name}
                      tier="bronze"
                    />
                    <h3 className="text-xl font-bold mt-6 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{partner.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Become Partner Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Devenez partenaire
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Rejoignez notre réseau de partenaires et contribuez à la lutte contre le cancer
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 