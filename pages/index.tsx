import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Countdown from '../components/Countdown'
import ImpactCalc from '../components/ImpactCalc'
import PartnerLogo from '../components/PartnerLogo'
import TestimonialCard from '../components/TestimonialCard'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Kick Out Cancer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Ensemble, nous pouvons faire la différence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
            >
              Je m'inscris
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Prochain évènement Section */}
      <section id="prochain-evenement" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Prochain évènement</h2>
          <div className="relative w-full h-[600px] mb-8">
            <Image
              src="/images/save-the-date.jpg"
              alt="Save the date - Prochain évènement Kick Out Cancer"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center">
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
            >
              Je m'inscris
            </Button>
          </div>
        </div>
      </section>

      {/* Don Section */}
      <section id="don" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Faire un don</h2>
          <div className="max-w-3xl mx-auto">
            <iframe
              src="https://www.helloasso.com/associations/kickoutcancer/formulaires/1/widget"
              width="100%"
              height="600"
              style={{ border: 'none', borderRadius: '8px' }}
              title="Formulaire de don HelloAsso"
            />
          </div>
        </div>
      </section>

      {/* Partenaires Section */}
      <section id="partenaires" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Partenaires</h2>
          
          {/* IHU PRISM Spotlight */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 relative mr-6">
                  <Image
                    src="/images/ihu-prism-logo.png"
                    alt="IHU PRISM"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">IHU PRISM</h3>
                  <p className="text-gray-600">
                    L'Institut Hospitalo-Universitaire PRISM est un centre d'excellence en recherche médicale.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                L'IHU PRISM est un partenaire majeur de Kick Out Cancer, apportant son expertise
                et son soutien dans la lutte contre le cancer. Ensemble, nous travaillons pour
                faire avancer la recherche et améliorer les soins des patients.
              </p>
              <Button
                as="a"
                href="mailto:contact@kickoutcancer.fr"
                variant="outline"
              >
                Devenir partenaire
              </Button>
            </div>
          </div>

          {/* Autres partenaires */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Ajoutez ici les logos des autres partenaires */}
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section id="ils-nous-soutiennent" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ils nous soutiennent</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Ajoutez ici les logos des supporters */}
          </div>
        </div>
      </section>
    </main>
  )
} 