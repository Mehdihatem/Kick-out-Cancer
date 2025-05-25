import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '../components/Button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeIn}
          className="text-center"
        >
          <h1 className="text-9xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-4xl font-bold mb-6">
            Page non trouvée
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n&#39;existe pas ou a été déplacée.
          </p>
          <Link href="/">
            <Button variant="primary">
              Retour à l&#39;accueil
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 