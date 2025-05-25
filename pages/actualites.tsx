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

const articles = [
  {
    id: 1,
    title: 'Lancement du Tournoi de Gala 2025',
    excerpt: 'Nous sommes ravis d&apos;annoncer le lancement officiel du Tournoi de Gala Kick Out Cancer 2025...',
    image: '/images/news/tournament-launch.jpg',
    date: '2024-03-15',
    category: 'Événements',
    author: 'Thomas Martin',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Partenariat avec l&apos;IHU PRISM',
    excerpt: 'Une collaboration prometteuse pour faire avancer la recherche contre le cancer...',
    image: '/images/news/partnership.jpg',
    date: '2024-03-10',
    category: 'Partenariats',
    author: 'Emma Dubois',
    readTime: '4 min'
  },
  {
    id: 3,
    title: 'Bilan de la collecte 2024',
    excerpt: 'Grâce à votre générosité, nous avons collecté plus de 40 000€ pour la recherche...',
    image: '/images/news/donation-results.jpg',
    date: '2024-03-05',
    category: 'Impact',
    author: 'Lucas Petit',
    readTime: '3 min'
  },
  {
    id: 4,
    title: 'Nouveaux partenaires',
    excerpt: 'Nous sommes fiers d&apos;accueillir de nouveaux partenaires dans notre réseau...',
    image: '/images/news/new-partners.jpg',
    date: '2024-03-01',
    category: 'Partenariats',
    author: 'Julie Moreau',
    readTime: '4 min'
  }
]

const categories = ['Tous', 'Événements', 'Partenariats', 'Impact']

export default function News() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/images/news-hero.jpg"
          alt="Actualités"
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
              Actualités
            </h1>
            <p className="text-xl md:text-2xl">
              Restez informé de nos dernières nouvelles
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <motion.div
            {...fadeIn}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Tous' ? 'primary' : 'secondary'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                {...fadeIn}
              >
                <Card>
                  <div className="relative h-48 mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-primary font-medium">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {article.author}
                        </span>
                        <span className="text-sm text-gray-500">
                          • {article.readTime}
                        </span>
                      </div>
                      <Link href={`/actualites/${article.id}`}>
                        <Button variant="text">
                          Lire la suite
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Restez informé
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button type="submit" variant="primary">
                S&apos;inscrire
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 