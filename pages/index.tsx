import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../components/Button'
import TeamSection from '../components/TeamSection'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Kick Out Cancer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Ensemble, nous pouvons faire la différence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              aria-label="Inscrire mon équipe à l'événement"
            >
              J'inscris mon équipe
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-4xl font-extrabold leading-tight">
              Kick&nbsp;Out&nbsp;Cancer  
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Kick Out Cancer, c'est le premier tournoi de sports de combat
              mixant professionnels de la santé, sportifs et grand public autour
              d'une même ambition : mettre KO le cancer par le mouvement,
              l'innovation et la solidarité.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Nous finançons la recherche, sensibilisons aux pratiques sportives
              préventives et créons un écosystème bienveillant où se rencontrent
              patients, soignants, chercheurs et entreprises engagées.
            </p>
            <p className="mb-8 text-lg leading-relaxed font-semibold text-primary">
              Notre objectif : 0 recul, 100 % d'impact !
            </p>
            <Button
              as="a"
              href="#inscription"
              variant="primary"
              aria-label="Rejoindre le mouvement Kick Out Cancer"
            >
              Rejoindre le mouvement
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-80"
          >
            <Image
              src="/images/team-koc.jpg"
              alt="Équipe Kick Out Cancer"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Prochain évènement Section */}
      <section id="prochain-evenement" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Prochain évènement</h2>
          <div className="relative w-full h-[600px] mb-8">
            <Image
              src="/images/save-the-date.jpg"
              alt="Save the date - Prochain évènement Kick Out Cancer"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center">
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="secondary"
              aria-label="Inscrire mon équipe à l'événement"
            >
              J'inscris mon équipe
            </Button>
          </div>
        </div>
      </section>

      {/* Partenaires Section */}
      <section id="partenaires" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos partenaires</h2>
          
          {/* IHU PRISM – Partenaire scientifique */}
          <div className="mx-auto mb-20 max-w-4xl text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-44 h-44 mx-auto mb-6">
                <Image
                  src="/images/ihu-prism-logo.svg"
                  alt="IHU PRISM"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-primary">
                Partenaire scientifique officiel
              </h3>
              <p className="mb-4 text-lg leading-relaxed">
                IHU&nbsp;PRISM est un institut de recherche translationnelle et médicale
                dédié à la&nbsp;médecine de&nbsp;précision en oncologie.
                Sa&nbsp;mission&nbsp;: mieux comprendre la biologie de chaque cancer pour
                réduire la mortalité en identifiant les formes agressives
                dès&nbsp;le&nbsp;diagnostic et en&nbsp;proposant le traitement le plus
                adapté à chaque patient.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                PRISM réunit l'excellence de Gustave Roussy, CentraleSupélec,
                Université Paris-Saclay, Unicancer et&nbsp;Inserm autour d'une
                approche intégrative et innovante&nbsp;:&nbsp;intelligence&nbsp;artificielle,
                analyse&nbsp;de&nbsp;l'ADN circulant, épigénétique,
                hétérogénéité clonale, biologie spatiale…
              </p>
              <p className="mb-8 text-lg leading-relaxed">
                Objectif&nbsp;: créer une cartographie digitale de chaque
                patient, identifier de nouveaux biomarqueurs et accélérer
                l'accès aux&nbsp;thérapies ciblées et&nbsp;aux
                essais&nbsp;précoces.
              </p>
              <Button
                as="a"
                href="https://prism.center/about-prism/"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                aria-label="En savoir plus sur IHU PRISM"
              >
                En savoir plus
              </Button>
            </motion.div>
          </div>

          {/* Devenir partenaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto grid max-w-5xl items-center gap-12 rounded-lg bg-white p-10 shadow-md md:grid-cols-2"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Devenez partenaire
              </h3>
              <p className="mb-6 text-lg leading-relaxed">
                Associez votre marque à un événement sportif et solidaire à fort
                impact médiatique : visibilité réseaux sociaux, présence presse,
                storytelling d'engagement, activation terrain… Ensemble, faisons
                bouger les lignes contre le cancer !
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  as="a"
                  href="mailto:contact@kickoutcancer.org?subject=Demande de partenariat pour la prochaine édition Kick Out Cancer"
                  variant="secondary"
                  aria-label="Contacter l'équipe pour un partenariat"
                >
                  Écrire à l'équipe
                </Button>
                <Button
                  as="a"
                  href="/documents/dossier-partenariat.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  aria-label="Télécharger le dossier de partenariat"
                >
                  Dossier partenariat
                </Button>
              </div>
            </div>

            <div className="relative h-56">
              <Image
                src="/images/partnership-illustration.svg"
                alt="Illustration partenariat"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supporters Section */}
      <section id="ils-nous-soutiennent" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ils nous soutiennent</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Ajoutez ici les logos des supporters */}
          </div>
        </div>
      </section>

      {/* Don Section */}
      <section id="don" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Je soutiens la recherche
          </h2>
          <div className="mx-auto max-w-3xl">
            <iframe
              title="Formulaire de don KickOutCancer"
              src="https://www.helloasso.com/associations/kickoutcancer/formulaires/1"
              width="100%"
              height="850"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          <div>
            <div className="relative h-12 w-48 mb-4">
              <Image
                src="/images/logo-footer.svg"
                alt="Kick Out Cancer"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Sport • Science • Solidarité<br />
              Association loi 1901 – Paris, France
            </p>
          </div>

          <nav>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">L'association</a></li>
              <li><a href="#team" className="hover:text-white">Qui sommes-nous</a></li>
              <li><a href="#prochain-evenement" className="hover:text-white">Prochain évènement</a></li>
              <li><a href="#partenaires" className="hover:text-white">Partenaires</a></li>
              <li><a href="#ils-nous-soutiennent" className="hover:text-white">Ils nous soutiennent</a></li>
              <li><a href="#don" className="hover:text-white">Je soutiens la recherche</a></li>
            </ul>
          </nav>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <p className="text-sm">contact@kickoutcancer.org</p>
            <p className="text-sm">LinkedIn • Instagram • X</p>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-gray-500">
          © 2025 Kick Out Cancer — Tous droits réservés
        </p>
      </footer>
    </main>
  )
} 