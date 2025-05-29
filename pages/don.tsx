import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Card from '../components/Card'
import ImpactMeter from '../components/ImpactMeter'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Donation() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/donation-hero.jpg"
          alt="Faites un don pour la recherche contre le cancer"
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
              Soutenez la recherche
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Chaque don compte dans la lutte contre le cancer
            </p>
            <Link href="#donation-form">
              <Button size="lg" variant="primary">
                Faire un don maintenant
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre objectif : 50 000€
            </h2>
            <p className="text-lg mb-8">{`Les fonds collectés seront intégralement reversés à l'IHU PRISM pour financer des projets de recherche innovants.`}</p>
            <ImpactMeter
              currentAmount={25000}
              targetAmount={50000}
              label="Progression de la collecte"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Sensibilisation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Informer et mobiliser la communauté étudiante sur les enjeux de la recherche contre le cancer.
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Financer la recherche</h3>
                <p className="mb-4">{`Financer des projets de recherche innovants à l'IHU PRISM pour faire avancer la science.`}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Améliorer les traitements</h3>
                <p className="mb-4">{`Contribuer à l'amélioration des traitements et à la qualité de vie des patients.`}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donation-form" className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Faites un don
            </h2>
            <div className="bg-white dark:bg-dark rounded-xl p-8 shadow-soft">
              <iframe
                src="https://www.helloasso.com/associations/kick-out-cancer/formulaires/1/widget"
                width="100%"
                height="800"
                style={{ border: 'none' }}
                title="Formulaire de don HelloAsso"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold mb-4">Comment mon don sera-t-il utilisé ?</h3>
                <p className="mb-8">{`Les dons sont intégralement reversés à l'IHU PRISM pour financer des projets de recherche innovants dans la lutte contre le cancer.`}</p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-4">{`Puis-je bénéficier d'une réduction fiscale ?`}</h3>
                <p className="text-gray-600 dark:text-gray-400">{`Oui, les dons à notre association ouvrent droit à une réduction fiscale de 66% du montant du don, dans la limite de 20% du revenu imposable.`}</p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-4">{`Comment puis-je suivre l'impact de mon don ?`}</h3>
                <p className="mb-4">{`Nous publions régulièrement des rapports sur l'utilisation des fonds et les avancées des projets de recherche soutenus.`}</p>
              </Card>
            </div>
          </motion.div>
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
              Ensemble, nous pouvons faire la différence
            </h2>
            <p className="text-lg mb-8">{`Chaque don, même modeste, contribue à faire avancer la recherche contre le cancer`}</p>
            <Link href="#donation-form">
              <Button size="lg" variant="secondary">
                Faire un don maintenant
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 