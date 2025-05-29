import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../components/Button'
import FadeSection from '../components/FadeSection'
import TeamSection from '../components/TeamSection'
import SupportersSection from '../components/SupportersSection'
import SEO from '../components/SEO'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <main className="min-h-screen" role="main">
      <SEO
        title="Kick Out Cancer - Ensemble, nous pouvons faire la différence"
        description="Kick Out Cancer est le premier tournoi de sports de combat mixant professionnels de la santé, sportifs et grand public autour d&#39;une même ambition : mettre KO le cancer par le mouvement, l&#39;innovation et la solidarité."
        image="/images/save-the-date.jpg"
        ogType="website"
        twitterCard="summary_large_image"
        keywords={['cancer', 'sport', 'solidarité', 'événement', 'santé', 'combat', 'tournoi']}
      />
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative h-screen flex items-center justify-center"
        aria-label="Section principale"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero background"
            fill
            sizes="100vw"
            quality={85}
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
          <div className="flex justify-center mb-8">
            <Image
              src="/images/kick-out-cancer-logo.png"
              alt="Logo Kick Out Cancer"
              width={220}
              height={220}
              className="mx-auto"
              priority
            />
          </div>
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

      {/* Ajout d'un espace supplémentaire entre Hero et Ambition */}
      <div className="py-12" />

      {/* About Section (Ambition) */}
      <FadeSection id="about">
        <div className="container mx-auto py-16">
          <h2 className="mb-6 text-center text-4xl font-extrabold">Notre ambition</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed">
            Kick Out Cancer, c'est bien plus qu'un simple tournoi : c'est une mission. Notre ambition est de réunir sportifs, soignants, patients, chercheurs et entreprises autour d'un objectif unique : mettre KO le cancer par le mouvement, l'innovation et la solidarité. Chaque match, chaque but, chaque partenaire contribue à transformer l'espoir en action et à faire avancer la recherche. Ensemble, faisons bouger les lignes.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Button
              as="a"
              href="#don"
              variant="primary"
              aria-label="Rejoindre le mouvement Kick Out Cancer"
            >
              Rejoindre le mouvement
            </Button>
            <a
              href="#team"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-medium text-primary hover:bg-primary/10 transition-colors md:ml-0"
            >
              Découvrir l'équipe
            </a>
          </div>
        </div>
      </FadeSection>

      {/* Pourquoi participer Section (nouvelle section à ajouter ici) */}
      <FadeSection id="pourquoi-participer">
        <div className="container mx-auto py-16">
          <h2 className="mb-6 text-center text-4xl font-extrabold text-primary">Pourquoi participer&nbsp;?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4" role="img" aria-label="Pour qui">👥</span>
              <h3 className="text-xl font-bold mb-2">Pour qui&nbsp;?</h3>
              <p>Ouvert à toutes les équipes&nbsp;: entreprises, amis, familles, clubs de sport…</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4" role="img" aria-label="Combien">💶</span>
              <h3 className="text-xl font-bold mb-2">Combien&nbsp;?</h3>
              <p>400€ par équipe (5 à 10 joueurs).<br />Tous les bénéfices sont reversés à la recherche contre le cancer.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4" role="img" aria-label="Pourquoi">🤝</span>
              <h3 className="text-xl font-bold mb-2">Pourquoi&nbsp;?</h3>
              <p>Pour allier sport, solidarité et engagement en faveur de la recherche.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
              aria-label="Je veux inscrire mon équipe"
            >
              Je veux inscrire mon équipe
            </Button>
          </div>
        </div>
      </FadeSection>

      {/* Prochain évènement Section (Save the date) */}
      <FadeSection id="event">
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
              aria-label="Inscrire mon équipe à l&#39;événement"
            >
              J&#39;inscris mon équipe
            </Button>
          </div>
        </div>
      </FadeSection>

      {/* Partenaires Section */}
      <FadeSection id="partners">
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
                IHU PRISM est un institut de recherche translationnelle et médicale
                dédié à la médecine de précision en oncologie.
                Sa mission : mieux comprendre la biologie de chaque cancer pour
                réduire la mortalité en identifiant les formes agressives
                dès le diagnostic et en proposant le traitement le plus
                adapté à chaque patient.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                PRISM réunit l&#39;excellence de Gustave Roussy, CentraleSupélec,
                Université Paris-Saclay, Unicancer et Inserm autour d&#39;une
                approche intégrative et innovante : intelligence artificielle,
                analyse de l&#39;ADN circulant, épigénétique,
                hétérogénéité clonale, biologie spatiale…
              </p>
              <p className="mb-8 text-lg leading-relaxed">
                Objectif : créer une cartographie digitale de chaque
                patient, identifier de nouveaux biomarqueurs et accélérer
                l&#39;accès aux thérapies ciblées et aux
                essais précoces.
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
                storytelling d&#39;engagement, activation terrain… Ensemble, faisons
                bouger les lignes contre le cancer !
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  as="a"
                  href="mailto:contact@kickoutcancer.org?subject=Demande de partenariat pour la prochaine édition Kick Out Cancer"
                  variant="secondary"
                  aria-label="Contacter l&#39;équipe pour un partenariat"
                >
                  Écrire à l&#39;équipe
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
      </FadeSection>

      {/* Supporters Section */}
      <FadeSection id="supporters">
        <SupportersSection />
      </FadeSection>

      {/* JE SOUTIENS LA RECHERCHE */}
      <FadeSection id="don">
        <div className="container mx-auto py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Je soutiens la recherche</h2>
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
      </FadeSection>

      {/* QUI SOMMES-NOUS ? */}
      <FadeSection id="team">
        <TeamSection />
      </FadeSection>

      {/* FOOTER */}
      <FadeSection id="footer">
        <footer className="bg-gray-900 py-12 text-gray-300">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
            <div>
              <div className="relative h-20 w-56 mb-4">
                <Image
                  src="/images/kick-out-cancer-logo.png"
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
                <li><a href="#about" className="hover:text-white">L&#39;association</a></li>
                <li><a href="#team" className="hover:text-white">Qui sommes-nous</a></li>
                <li><a href="#event" className="hover:text-white">Prochain évènement</a></li>
                <li><a href="#partners" className="hover:text-white">Partenaires</a></li>
                <li><a href="#supporters" className="hover:text-white">Ils nous soutiennent</a></li>
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
      </FadeSection>
    </main>
  )
} 