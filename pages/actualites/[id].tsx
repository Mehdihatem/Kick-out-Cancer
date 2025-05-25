import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Card from '../../components/Card'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Simuler une base de données d'articles
const articles: Record<string, {
  id: number
  title: string
  content: string
  image: string
  date: string
  category: string
  author: string
  authorImage: string
  readTime: string
  tags: string[]
}> = {
  '1': {
    id: 1,
    title: 'Lancement du Tournoi de Gala 2025',
    content: `
      <p>Nous sommes ravis d&apos;annoncer le lancement officiel du Tournoi de Gala Kick Out Cancer 2025, qui se tiendra le 13 septembre 2025 au Stade de CentraleSupélec.</p>
      
      <h2>Un événement majeur pour la recherche</h2>
      <p>Cette édition 2025 s&apos;annonce comme la plus importante de notre histoire, avec un objectif de collecte ambitieux de 50 000€ pour soutenir la recherche contre le cancer.</p>
      
      <h2>Un programme riche</h2>
      <p>Le tournoi comprendra :</p>
      <ul>
        <li>Des matchs de football à 5</li>
        <li>Une cérémonie d&apos;ouverture</li>
        <li>Des animations et stands</li>
        <li>Une remise de prix</li>
      </ul>
      
      <h2>Comment participer ?</h2>
      <p>Les inscriptions sont ouvertes pour les équipes étudiantes, entreprises et associations. Les frais d&apos;inscription varient selon la catégorie :</p>
      <ul>
        <li>Étudiants : 150€ par équipe</li>
        <li>Entreprises : 500€ par équipe</li>
        <li>Associations : 250€ par équipe</li>
      </ul>
      
      <p>Pour plus d&apos;informations et pour vous inscrire, rendez-vous sur notre page d&apos;inscription.</p>
    `,
    image: '/images/news/tournament-launch.jpg',
    date: '2024-03-15',
    category: 'Événements',
    author: 'Thomas Martin',
    authorImage: '/images/team/thomas.jpg',
    readTime: '5 min',
    tags: ['Tournoi', 'Événement', 'Inscription']
  }
}

// Articles similaires (basés sur la catégorie)
const similarArticles = [
  {
    id: 2,
    title: 'Partenariat avec l&apos;IHU PRISM',
    excerpt: 'Une collaboration prometteuse pour faire avancer la recherche contre le cancer...',
    image: '/images/news/partnership.jpg',
    date: '2024-03-10',
    category: 'Partenariats'
  },
  {
    id: 3,
    title: 'Bilan de la collecte 2024',
    excerpt: 'Grâce à votre générosité, nous avons collecté plus de 40 000€ pour la recherche...',
    image: '/images/news/donation-results.jpg',
    date: '2024-03-05',
    category: 'Impact'
  }
]

export default function Article() {
  const router = useRouter()
  const { id } = router.query
  
  // Attendre que l'ID soit disponible
  if (!id || Array.isArray(id)) {
    return null
  }

  const article = articles[id]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/actualites">
            <Button variant="primary">
              Retour aux actualités
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white px-4 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-2"
            >
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src={article.authorImage}
                  alt={article.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{article.author}</p>
                  <p className="text-sm text-gray-500">Auteur</p>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              {...fadeIn}
              className="space-y-8"
            >
              {/* Share Section */}
              <Card>
                <h3 className="text-xl font-bold mb-4">Partager l&apos;article</h3>
                <div className="flex gap-4">
                  <Button variant="secondary" size="sm">
                    Twitter
                  </Button>
                  <Button variant="secondary" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="secondary" size="sm">
                    Facebook
                  </Button>
                </div>
              </Card>

              {/* Similar Articles */}
              <Card>
                <h3 className="text-xl font-bold mb-4">Articles similaires</h3>
                <div className="space-y-4">
                  {similarArticles.map((similarArticle) => (
                    <Link
                      key={similarArticle.id}
                      href={`/actualites/${similarArticle.id}`}
                      className="block"
                    >
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20">
                          <Image
                            src={similarArticle.image}
                            alt={similarArticle.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            {similarArticle.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {similarArticle.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center"
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

      <section className="py-20 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Inscrivez-vous à l&apos;événement
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Inscrivez votre équipe à l&apos;événement
            </p>
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              aria-label="Inscrire mon équipe à l&apos;événement"
            >
              J&apos;inscris mon équipe
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 