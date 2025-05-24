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
      <section className="relative h-screen">
        <Image
          src="/images/save-the-date-affiche.jpg"
          alt="Kick Out Cancer - Save the Date"
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
              Kick Out Cancer
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Ensemble, marquons des buts contre le cancer
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/inscription">
                <Button size="lg" variant="primary">
                  S'inscrire
                </Button>
              </Link>
              <Link href="/don">
                <Button size="lg" variant="outline">
                  Faire un don
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prochain Tournoi
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              13 septembre 2025 - Stade de CentraleSupélec
            </p>
          </motion.div>
          <Countdown />
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Chaque don compte dans la lutte contre le cancer
            </p>
          </motion.div>
          <ImpactCalc />
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Partenaires
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <PartnerLogo
              src="/images/centralesupelec-logo.png"
              alt="CentraleSupélec"
              tier="headline"
            />
            <PartnerLogo
              src="/images/inserm-logo.png"
              alt="INSERM"
              tier="gold"
            />
            <PartnerLogo
              src="/images/unicancer-logo.png"
              alt="Unicancer"
              tier="gold"
            />
            <PartnerLogo
              src="/images/prism_logo.png"
              alt="PRISM"
              tier="headline"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous soutiennent
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Un événement qui allie sport et solidarité pour une cause qui nous tient à cœur."
              author="Dr. Marie Dupont"
              role="Directrice de l'IHU PRISM"
              image="/images/testimonials/marie-dupont.jpg"
            />
            <TestimonialCard
              quote="Une belle initiative qui montre que le sport peut être un vecteur de changement."
              author="Jean Martin"
              role="Président de CentraleSupélec"
              image="/images/testimonials/jean-martin.jpg"
            />
            <TestimonialCard
              quote="Chaque édition est plus belle que la précédente, merci à tous les participants !"
              author="Sophie Bernard"
              role="Bénévole"
              image="/images/testimonials/sophie-bernard.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            {...fadeIn}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez la lutte
            </h2>
            <p className="text-lg mb-8">
              Chaque but rapproche la science PRISM de la guérison
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/inscription">
                <Button size="lg" variant="secondary">
                  S'inscrire au tournoi
                </Button>
              </Link>
              <Link href="/don">
                <Button size="lg" variant="outline">
                  Soutenir la cause
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 