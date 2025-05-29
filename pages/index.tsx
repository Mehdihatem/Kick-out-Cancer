/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../components/Button'
import FadeSection from '../components/FadeSection'
import TeamSection from '../components/TeamSection'
import SupportersSection from '../components/SupportersSection'
import SEO from '../components/SEO'
import Countdown from '../components/Countdown'
import FAQ from '../components/FAQ'

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
        description="Kick Out Cancer est le premier tournoi de sports de combat mixant professionnels de la santé, sportifs et grand public autour d'une même ambition : mettre KO le cancer par le mouvement, l'innovation et la solidarité."
        image="/images/save-the-date.jpg"
        ogType="website"
        twitterCard="summary_large_image"
        keywords={['cancer', 'sport', 'solidarité', 'événement', 'santé', 'combat', 'tournoi']}
      />

      {/* 1. Hero Section */}
      <section 
        id="hero" 
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-white"
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

      {/* 2. Notre ambition Section */}
      <FadeSection id="about" className="bg-white py-16">
        <div className="container mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/kick-out-cancer-logo.png"
              alt="Logo Kick Out Cancer"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h2 className="mb-6 text-center text-4xl font-extrabold">Notre ambition</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed">
            Kick Out Cancer, c&apos;est bien plus qu&apos;un simple tournoi : c&apos;est une mission. Notre ambition est de réunir sportifs, soignants, patients, chercheurs et entreprises autour d&apos;un objectif unique : mettre KO le cancer par le mouvement, l&apos;innovation et la solidarité. Chaque match, chaque but, chaque partenaire contribue à transformer l&apos;espoir en action et à faire avancer la recherche. Ensemble, faisons bouger les lignes.
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

      {/* 3. Prochain évènement Section */}
      <FadeSection id="event" className="bg-[#f7f7f7] py-16">
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
      </FadeSection>

      {/* 4. Je soutiens la recherche Section */}
      <FadeSection id="don" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-4xl font-extrabold">Je soutiens la recherche</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed mb-8">
            Votre don fait la différence. Chaque contribution, même modeste, participe à l'avancée de la recherche contre le cancer. Ensemble, nous pouvons accélérer les découvertes et améliorer les traitements.
          </p>
          <div className="flex justify-center">
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer/formulaires/1"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
              aria-label="Faire un don"
            >
              Faire un don
            </Button>
          </div>
        </div>
      </FadeSection>

      {/* 5. IHU PRISM Section */}
      <FadeSection id="ihu-prism" className="bg-[#eaf6fb] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-4xl text-center px-6">
            <div className="mb-2">
              <span className="inline-block bg-primary text-white text-lg font-bold px-6 py-2 rounded-full shadow">Partenaire Principal : IHU PRISM</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-44 h-44 mx-auto mb-6">
                <Image
                  src="/images/ihu-prism-logo.png"
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
                PRISM réunit l&apos;excellence de Gustave Roussy, CentraleSupélec,
                Université Paris-Saclay, Unicancer et Inserm autour d&apos;une
                approche intégrative et innovante : intelligence artificielle,
                analyse de l&apos;ADN circulant, épigénétique,
                hétérogénéité clonale, biologie spatiale…
              </p>
              <p className="mb-8 text-lg leading-relaxed">
                Objectif : créer une cartographie digitale de chaque
                patient, identifier de nouveaux biomarqueurs et accélérer
                l&apos;accès aux thérapies ciblées et aux
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
                En savoir plus sur IHU PRISM
              </Button>
            </motion.div>
          </div>
        </div>
      </FadeSection>

      {/* 6. Nos partenaires Section */}
      <FadeSection id="partners" className="bg-[#f7f7f7] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nos partenaires</h2>
          <SupportersSection />
          <div className="text-center mt-12">
            <Button
              as="a"
              href="/devenir-partenaire"
              variant="primary"
              size="lg"
              aria-label="Devenir partenaire"
            >
              Devenir partenaire
            </Button>
          </div>
        </div>
      </FadeSection>

      {/* 7. Qui sommes-nous Section */}
      <FadeSection id="team" className="bg-white py-16">
        <TeamSection />
      </FadeSection>

      {/* 8. Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-primary">Notre ambition</a></li>
                <li><a href="#event" className="hover:text-primary">Prochain événement</a></li>
                <li><a href="#don" className="hover:text-primary">Je soutiens</a></li>
                <li><a href="#team" className="hover:text-primary">Qui sommes-nous</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: contact@kickoutcancer.org</li>
                <li>Téléphone: +33 1 23 45 67 89</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Mentions légales</h3>
              <ul className="space-y-2">
                <li><a href="/mentions-legales" className="hover:text-primary">Mentions légales</a></li>
                <li><a href="/politique-confidentialite" className="hover:text-primary">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Kick Out Cancer. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 