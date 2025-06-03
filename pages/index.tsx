/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../components/Button'
import FadeSection from '../components/FadeSection'
import TeamSection from '../components/TeamSection'
import SupportersSection from '../components/SupportersSection'
import FAQ from '../components/FAQ'
import Link from 'next/link'
import Head from 'next/head'
import PartnerSection from '../components/PartnerSection'
import { VideoTestimonialCard } from '../components/TestimonialCard'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Kick Out Cancer - Ensemble, mettons KO le cancer</title>
        <meta name="description" content="Kick Out Cancer : événements, dons et mobilisation pour accélérer la recherche contre le cancer. Découvrez nos actualités, partenaires et comment soutenir la cause !" />
      </Head>
    <main className="min-h-screen" role="main">
        {/* 1. Hero Section */}
      <section 
        id="hero" 
          className="relative flex items-center justify-center bg-gradient-to-b from-primary/10 to-white py-20"
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
              className="text-xl md:text-2xl mb-12"
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

      {/* Bandeau inaugural */}
      <div className="bg-primary text-white text-center font-semibold py-4 inaugural-banner">
        Édition Inaugurale 2025 – Participez dès maintenant et devenez un pionnier de la lutte contre le cancer via Kick Out Cancer !
      </div>

      {/* Bloc Objectifs 2025 */}
      <section id="objectifs-2025" className="flex flex-col md:flex-row justify-around items-center gap-6 bg-gray-100 py-6 my-4 rounded-lg mx-2">
        <div className="flex items-center gap-3">
          <span className="inline-block bg-primary/10 p-2 rounded-full">
            {/* Icône équipe */}
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3a4cb3" opacity="0.15"/><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.31 0-6 1.34-6 3v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1c0-1.66-2.69-3-6-3Z" fill="#3a4cb3"/></svg>
          </span>
          <div>
            <span className="block text-2xl font-bold text-primary">32</span>
            <span className="block text-sm text-gray-700">équipes visées</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block bg-primary/10 p-2 rounded-full">
            {/* Icône collecte */}
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3a4cb3" opacity="0.15"/><path d="M12 17c-3.31 0-6-1.34-6-3V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6c0 1.66-2.69 3-6 3Zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="#3a4cb3"/></svg>
          </span>
          <div>
            <span className="block text-2xl font-bold text-primary">100 000&nbsp;€</span>
            <span className="block text-sm text-gray-700">collectés pour la recherche</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block bg-primary/10 p-2 rounded-full">
            {/* Icône instituts */}
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3a4cb3" opacity="0.15"/><path d="M7 17V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10" stroke="#3a4cb3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17v-4" stroke="#3a4cb3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="1" fill="#3a4cb3"/></svg>
          </span>
          <div>
            <span className="block text-2xl font-bold text-primary">10</span>
            <span className="block text-sm text-gray-700">instituts associés</span>
          </div>
        </div>
      </section>

        {/* 2. Notre ambition Section */}
        <FadeSection id="about" className="bg-white py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold text-primary mb-6 text-center">Notre ambition</h2>
            <p className="text-lg text-center mb-6">
              Kick Out Cancer, c'est la toute première édition d'un tournoi inédit mêlant sport, solidarité et recherche. En 2025, nous posons la première pierre d'un rendez-vous annuel dont l'objectif est de :
            </p>
            <ul className="list-disc list-inside text-lg mb-8 text-gray-800">
              <li><strong>Mobiliser 32 équipes</strong> passionnées et engagées.</li>
              <li><strong>Collecter 100 000&nbsp;€</strong> pour financer des projets de recherche innovants.</li>
              <li><strong>Associer 10 instituts de recherche</strong> pour un impact scientifique maximal.</li>
            </ul>
            <blockquote className="citation-intention italic bg-gray-50 border-l-4 border-primary px-6 py-4 text-gray-700">
              « En tant que chercheur à l'IHU PRISM, je suis fier de participer à cette première édition qui crée un lien direct entre la recherche et les sportifs. Ensemble, nous bâtissons une dynamique nouvelle pour faire reculer le cancer. »
              <footer className="mt-2 text-right text-sm text-gray-600">– Dr Marie Durand, IHU PRISM</footer>
            </blockquote>
          </div>
        </FadeSection>

        {/* 3. Témoignages vidéo Section */}
        <FadeSection id="temoignages-video" className="bg-[#fefefe] py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4">Témoignages vidéo des participants</h2>
            <p className="text-center text-gray-700 mb-8">Découvrez les premières interviews de nos sportifs, chercheurs et bénévoles : leur engagement, leurs motivations et leurs espoirs pour cette édition 2025.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              <VideoTestimonialCard
                videoId="dEItZYM7D3Y"
                thumbnail="/assets/thumbs/julie-thumb.webp"
                author="Julie, infirmière bénévole"
                role="Bénévole Kick Out Cancer"
                quote="Je participe pour tous ceux qui se battent au quotidien…"
              />
              {/* Ajouter d'autres VideoTestimonialCard ici si besoin */}
            </div>
          </div>
        </FadeSection>

        {/* 3. Prochain évènement Section */}
        <FadeSection id="event" className="bg-[#f7f7f7] py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Prochain événement</h2>
            <p className="text-lg mb-8">
              Rejoignez-nous le <strong>14 juin 2025</strong> pour la <strong>première édition</strong> du Tournoi Kick Out Cancer : un moment unique où sport et solidarité se rencontrent.<br/>
              <span className="block mt-2 text-base text-gray-700">Lieu : Five Paris 18, 217 rue Aubervilliers, Paris</span>
            </p>
            <div className="relative w-full h-[320px] mb-8 rounded-xl overflow-hidden mx-auto">
              <Image
                src="/images/save-the-date.jpg"
                alt="Save the date - Prochain évènement Kick Out Cancer"
                fill
                className="object-cover"
                priority
              />
            </div>
            <Button
              as="a"
              href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
              aria-label="Inscrire mon équipe à l'événement"
            >
              J'inscris mon équipe
            </Button>
            <p className="mt-2 text-sm text-gray-600">Processus simple, inscription en ligne, aucune commission.</p>
          </div>
        </FadeSection>

        {/* 4. IHU PRISM Section */}
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
                <h3 className="text-2xl font-semibold text-primary mb-4">
                Partenaire scientifique officiel
              </h3>
              <p className="mb-4 text-lg leading-relaxed">
                  IHU PRISM est un institut de recherche translationnelle et médicale dédié à la médecine de précision en oncologie. Sa mission : mieux comprendre la biologie de chaque cancer pour réduire la mortalité en identifiant les formes agressives dès le diagnostic et en proposant le traitement le plus adapté à chaque patient.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                  PRISM réunit l'excellence de Gustave Roussy, CentraleSupélec, Université Paris-Saclay, Unicancer et Inserm autour d'une approche intégrative et innovante : intelligence artificielle, analyse de l'ADN circulant, épigénétique, hétérogénéité clonale, biologie spatiale…
              </p>
              <p className="mb-8 text-lg leading-relaxed">
                  Objectif : créer une cartographie digitale de chaque patient, identifier de nouveaux biomarqueurs et accélérer l'accès aux thérapies ciblées et aux essais précoces.
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

        {/* 5. Nos partenaires Section */}
        <FadeSection id="partners" className="bg-[#f7f7f7] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-primary mb-12">Nos partenaires</h2>
            <PartnerSection />
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

        {/* 6. Qui sommes-nous Section */}
        <FadeSection id="team" className="bg-white py-16">
        <TeamSection />
      </FadeSection>

        {/* 7. FAQ Section */}
        <FadeSection id="faq" className="bg-[#f7f7f7] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-primary mb-12">FAQ</h2>
            <FAQ />
          </div>
      </FadeSection>
    </main>
    </>
  )
} 