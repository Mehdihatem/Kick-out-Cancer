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
            <h2>1. Informations légales</h2>
            <p>{`L'association Kick Out Cancer est une association loi 1901, dont le siège social est situé à CentraleSupélec, 3 rue Joliot Curie, 91190 Gif-sur-Yvette.`}</p>
            <p>{`Directeur de la publication : Thomas Martin, Président de l'association`}</p>
            <p>
              Contact : contact@kickoutcancer.org
            </p>

            <h2>2. Hébergement</h2>
            <p>
              Ce site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>{`L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.`}</p>

            <h2>4. Protection des données personnelles</h2>
            <p>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&#39;un droit d&#39;accès, de rectification et de suppression des données vous concernant.
            </p>
            <p>
              Pour exercer ce droit, vous pouvez nous contacter à l&#39;adresse suivante : contact@kickoutcancer.org
            </p>
          </div>

          <div className="mt-8">
            <Link href="/">
              <Button variant="primary">
                Retour à l&#39;accueil
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 