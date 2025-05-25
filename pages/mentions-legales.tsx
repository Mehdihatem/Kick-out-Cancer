import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '../components/Button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function LegalNotice() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">
            Mentions légales
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Éditeur du site
              </h2>
              <p>
                Association Kick Out Cancer<br />
                CentraleSupélec<br />
                3 rue Joliot-Curie<br />
                91190 Gif-sur-Yvette<br />
                France
              </p>
              <p>
                Email : contact@kickoutcancer.fr<br />
                Téléphone : +33 1 XX XX XX XX
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Statut juridique
              </h2>
              <p>
                Association loi 1901 déclarée à la préfecture de l&apos;Essonne<br />
                Numéro SIRET : XXX XXX XXX XXXXX<br />
                Numéro RNA : W91XXXXX
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Hébergement
              </h2>
              <p>
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Crédits
              </h2>
              <p>
                Design et développement : [Nom de l'agence/développeur]<br />
                Images : [Sources des images]<br />
                Icônes : [Sources des icônes]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Liens utiles
              </h2>
              <ul>
                <li>
                  <Link href="/politique-de-confidentialite" className="text-primary hover:underline">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/conditions-d-utilisation" className="text-primary hover:underline">
                    Conditions d'utilisation
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button variant="primary">
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 