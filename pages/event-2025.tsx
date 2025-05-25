import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Card from '../components/Card'
import Countdown from '../components/Countdown'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const schedule = [
  {
    time: '09:00',
    title: 'Accueil des équipes',
    description: 'Inscription et petit-déjeuner'
  },
  {
    time: '10:00',
    title: 'Cérémonie d&apos;ouverture',
    description: 'Discours et présentation des équipes'
  },
  {
    time: '10:30',
    title: 'Début des matchs',
    description: 'Phase de groupes'
  },
  {
    time: '12:30',
    title: 'Pause déjeuner',
    description: 'Buffet et animations'
  },
  {
    time: '14:00',
    title: 'Reprise des matchs',
    description: 'Phase éliminatoire'
  },
  {
    time: '17:00',
    title: 'Finale',
    description: 'Match décisif'
  },
  {
    time: '18:00',
    title: 'Remise des prix',
    description: 'Cérémonie de clôture'
  }
]

export default function Event() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/event-hero.jpg"
          alt="Tournoi de Gala Kick Out Cancer 2025"
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
              Tournoi de Gala 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              13 septembre 2025 - Stade de CentraleSupélec
            </p>
            <Countdown />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              À propos du tournoi
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Le Tournoi de Gala Kick Out Cancer est l&#39;événement phare de notre association. Cette année, nous attendons plus de 20 équipes venues de toute la France pour un tournoi de football caritatif d&#39;envergure.
              </p>
              <p>
                Au-delà de la compétition sportive, cet événement est l&#39;occasion de rassembler la communauté étudiante, les entreprises et les associations autour d&#39;une cause commune : la lutte contre le cancer.
              </p>
              <p>
                Les fonds collectés seront intégralement reversés à l&#39;IHU PRISM pour financer des projets de recherche innovants.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Programme de la journée
            </h2>
            <div className="space-y-4">
              {schedule.map((item) => (
                <Card key={item.time}>
                  <div className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-primary font-bold">{item.time}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Informations pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-bold mb-4">Lieu</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Stade de CentraleSupélec<br />
                  3 rue Joliot Curie<br />
                  91190 Gif-sur-Yvette
                </p>
                <Link
                  href="https://www.google.com/maps/place/CentraleSupélec/@48.7092,2.1667,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Voir sur Google Maps
                  </Button>
                </Link>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-4">Transport</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  • RER B : Station Gif-sur-Yvette<br />
                  • Bus 9 : Arrêt CentraleSupélec<br />
                  • Parking gratuit sur place
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            {...fadeIn}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inscrivez votre équipe
            </h2>
            <p className="text-lg mb-8">
              Rejoignez-nous pour cette journée sportive et solidaire
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/inscription">
                <Button size="lg" variant="secondary">
                  S&#39;inscrire maintenant
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Plus d&apos;informations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 