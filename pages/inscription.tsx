import { motion } from 'framer-motion'
import Button from '../components/Button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Inscription() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeIn}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Inscription au Tournoi
          </h1>

          <form className="space-y-6">
            {/* Informations de l'équipe */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Informations de l'équipe</h2>
              
              <div>
                <label htmlFor="teamName" className="block text-sm font-medium mb-2">
                  Nom de l'équipe
                </label>
                <input
                  type="text"
                  id="teamName"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Catégorie
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="student">Étudiant (150€)</option>
                  <option value="company">Entreprise (500€)</option>
                  <option value="association">Association (250€)</option>
                </select>
              </div>
            </div>

            {/* Contact principal */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact principal</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" fullWidth>
                S'inscrire
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  )
} 