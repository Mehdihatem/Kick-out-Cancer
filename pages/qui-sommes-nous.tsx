import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Card from '../components/Card'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const teamMembers = [
  {
    name: 'Thomas Martin',
    role: 'Président',
    image: '/images/team/thomas-martin.jpg',
    bio: 'Étudiant à CentraleSupélec, passionné de football et engagé dans la lutte contre le cancer.'
  },
  {
    name: 'Emma Dubois',
    role: 'Vice-Présidente',
    image: '/images/team/emma-dubois.jpg',
    bio: 'Étudiante en médecine, elle coordonne les actions avec l&apos;IHU PRISM.'
  },
  {
    name: 'Lucas Petit',
    role: 'Trésorier',
    image: '/images/team/lucas-petit.jpg',
    bio: 'Expert-comptable, il gère les finances de l&apos;association avec rigueur.'
  },
  {
    name: 'Julie Moreau',
    role: 'Responsable Communication',
    image: '/images/team/julie-moreau.jpg',
    bio: 'Spécialiste en communication, elle développe la visibilité de l&apos;association.'
  }
]

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/about-hero.jpg"
          alt="L'équipe de Kick Out Cancer"
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
              Qui sommes-nous ?
            </h1>
            <p className="text-xl md:text-2xl">
              Une association étudiante engagée dans la lutte contre le cancer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Notre Histoire
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Fondée en 2020 par des étudiants de CentraleSupélec, Kick Out Cancer est née d&#39;une volonté commune de contribuer à la lutte contre le cancer tout en partageant notre passion pour le football.
              </p>
              <p>
                Notre premier tournoi a réuni 16 équipes et permis de collecter plus de 15 000€ pour la recherche. Depuis, nous organisons chaque année un tournoi de gala qui rassemble étudiants, entreprises et associations autour d&#39;une cause commune.
              </p>
              <p>
                En 2023, nous avons franchi une étape importante en signant un partenariat avec l&#39;IHU PRISM, un centre de recherche de pointe dans la lutte contre le cancer. Cette collaboration nous permet de soutenir directement des projets de recherche innovants.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Notre Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <h3 className="text-xl font-bold mb-4">Sensibiliser</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Informer et mobiliser la communauté étudiante sur les enjeux de la recherche contre le cancer.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-4">Collecter</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Organiser des événements sportifs pour collecter des fonds destinés à la recherche.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-4">Soutenir</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Financer des projets de recherche innovants à l&#39;IHU PRISM.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Des étudiants passionnés et engagés
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {member.bio}
                </p>
              </Card>
            ))}
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
              Rejoignez-nous
            </h2>
            <p className="text-lg mb-8">
              Ensemble, nous pouvons faire la différence dans la lutte contre le cancer
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/inscription">
                <Button size="lg" variant="secondary">
                  S&#39;inscrire au tournoi
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 