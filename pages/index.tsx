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
import { useState } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Déclaration pour éviter l'erreur TS sur window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
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
        <div className="absolute inset-0 z-0 overflow-hidden max-h-[600px]">
          <Image
            src="/images/hero-bg.png"
            alt="Hero background"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
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
      <section id="objectifs-2025" className="bg-gray-100 py-8 my-4 rounded-lg mx-2">
        <div className="text-center mb-6">
          <span className="inline-block bg-primary text-white text-xs font-bold rounded-full px-4 py-1 tracking-widest uppercase shadow">Objectif 2025</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Équipes */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="mb-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône football équipes"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M12 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 8c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4Z" stroke="#e63946" strokeWidth="2"/></svg>
            </span>
            <span className="text-3xl font-extrabold text-primary mb-1">32</span>
            <span className="text-sm text-gray-700">équipes visées</span>
          </div>
          {/* Collecte */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="mb-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône euro collecte"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M16 15.5c-1.5 1-4.5 1-6 0M8 8.5c1.5-1 4.5-1 6 0M12 6v12" stroke="#e63946" strokeWidth="2"/><text x="8" y="22" fontSize="10" fill="#e63946" fontWeight="bold">€</text></svg>
            </span>
            <span className="text-3xl font-extrabold text-primary mb-1">100 000&nbsp;€</span>
            <span className="text-sm text-gray-700">collectés pour la recherche</span>
          </div>
          {/* Instituts */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="mb-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône microscope instituts"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M15 19v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2" stroke="#e63946" strokeWidth="2"/><path d="M9 17V7a3 3 0 1 1 6 0v10" stroke="#e63946" strokeWidth="2"/><circle cx="12" cy="7" r="1" fill="#e63946"/></svg>
            </span>
            <span className="text-3xl font-extrabold text-primary mb-1">10</span>
            <span className="text-sm text-gray-700">instituts associés</span>
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
              <span className="block bg-gray-100 border-l-4 border-primary px-4 py-3 rounded-md text-base md:text-lg leading-relaxed max-w-full">
                « En tant que chercheur à l'IHU PRISM, je suis fier de participer à cette première édition qui crée un lien direct entre la recherche et les sportifs. Ensemble, nous bâtissons une dynamique nouvelle pour faire reculer le cancer. »
              </span>
              <footer className="mt-2 text-right text-sm text-gray-600">– Loic Poirraudeau, chercheur à Gustave Roussy</footer>
            </blockquote>
          </div>
        </FadeSection>

        {/* 3. Témoignages vidéo Section */}
        <FadeSection id="temoignages-video" className="bg-[#fefefe] py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4">Témoignages vidéo des participants</h2>
            <p className="text-center text-gray-700 mb-8">Découvrez les premières interviews de nos sportifs, chercheurs et bénévoles : leur engagement, leurs motivations et leurs espoirs pour cette édition 2025.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              <VideoTestimonialCard
                videoId="dEItZYM7D3Y"
                thumbnail="/assets/thumbs/mehdi-president-thumb.webp"
                author="Mehdi, Président Kick Out Cancer"
                role="Président et fondateur de l'association"
                quote="Nous lançons ce tournoi pour fédérer toutes les énergies contre le cancer. Rejoignez-nous pour cette première édition !"
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
              onClick={() => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event', 'click', { event_category: 'CTA', event_label: 'Inscription' }); } }}
            >
              J'inscris mon équipe
            </Button>
            <p className="mt-2 text-sm text-gray-600">Processus simple, inscription en ligne, aucune commission.</p>
          </div>
        </FadeSection>

        {/* 4. Pack Partenariat Section */}
        <FadeSection id="pack-partenariat" className="bg-white py-16">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-yellow-400 text-primary text-xs font-bold rounded-full px-4 py-1 tracking-widest uppercase shadow">Partenaire Fondateur 2025</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Vous êtes une entreprise ? Devenez Partenaire Fondateur</h2>
            <p className="mb-8 text-gray-700">En 2025, rejoignez-nous dès la première édition pour bénéficier d'avantages exclusifs :</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              <div className="pack-card flex-1 bg-gray-100 rounded-lg p-6 shadow-soft flex flex-col items-center">
                <span className="mb-3">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône Visibilité Médiatique"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M6 17l6-6 6 6" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="9" y="7" width="6" height="4" rx="2" stroke="#e63946" strokeWidth="2"/></svg>
                </span>
                <h3 className="font-semibold text-lg mb-1">Visibilité Médiatique</h3>
                <p className="text-sm text-gray-700">Logo sur site, réseaux sociaux et supports imprimés officiels.</p>
              </div>
              <div className="pack-card flex-1 bg-gray-100 rounded-lg p-6 shadow-soft flex flex-col items-center">
                <span className="mb-3">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône Partenariat Scientifique"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M15 19v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2" stroke="#e63946" strokeWidth="2"/><path d="M9 17V7a3 3 0 1 1 6 0v10" stroke="#e63946" strokeWidth="2"/><circle cx="12" cy="7" r="1" fill="#e63946"/></svg>
                </span>
                <h3 className="font-semibold text-lg mb-1">Partenariat Scientifique</h3>
                <p className="text-sm text-gray-700">Accès aux rencontres chercheurs/entreprises et branding sur nos publications scientifiques.</p>
              </div>
              <div className="pack-card flex-1 bg-gray-100 rounded-lg p-6 shadow-soft flex flex-col items-center">
                <span className="mb-3">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône Visibilité Événementielle"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><rect x="7" y="10" width="10" height="7" rx="2" stroke="#e63946" strokeWidth="2"/><path d="M12 7v3" stroke="#e63946" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#e63946"/></svg>
                </span>
                <h3 className="font-semibold text-lg mb-1">Visibilité Événementielle</h3>
                <p className="text-sm text-gray-700">Stand dédié lors du tournoi, mentions régulières dans l'animation de la journée.</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://ddbmudqn.genspark.space/"
                className="btn btn-primary inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir nos formules détaillées (nouvel onglet)"
                onClick={() => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event', 'click', { event_category: 'CTA', event_label: 'Partenariat' }); } }}
              >
                Voir nos formules
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M14 3h7v7m0-7L10 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 19h14v-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </FadeSection>

        {/* 5. Nos partenaires Section (événement) */}
        <FadeSection id="nos-partenaires" className="bg-[#fafafa] py-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Nos partenaires fondateurs</h2>
            <p className="mb-6 text-gray-700">Merci aux premières entreprises qui nous soutiennent pour faire de cette première édition un succès.</p>
            <SupportersSection />
            <p className="partners-count mt-6 font-semibold text-gray-800">3 partenaires déjà engagés en tant que fondateurs.</p>
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

        {/* 7. FAQ Section (accordéon) */}
        <FadeSection id="faq" className="bg-[#fafafa] py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Foire aux questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Pourquoi lancer Kick Out Cancer en 2025 ?",
                  a: "La première édition a pour ambition de créer un rendez-vous annuel liant sportifs, chercheurs et entreprises. Ensemble, nous voulons poser les bases d'un projet pérenne pour financer la recherche et sensibiliser le grand public à la lutte contre le cancer."
                },
                {
                  q: "Qui peut participer ?",
                  a: "Tout le monde ! Les équipes sont composées de 5 à 10 joueurs, amateurs ou professionnels, majeurs ou mineurs accompagnés. Aucune compétence sportive particulière n'est requise, seule la motivation compte."
                },
                {
                  q: "Comment s'inscrire ?",
                  a: "Il suffit de se rendre sur la page d'inscription, de remplir le formulaire en ligne et de valider la participation de votre équipe. Aucun frais d'inscription n'est demandé, la totalité des dons est reversée à la recherche."
                },
                {
                  q: "Comment devenir partenaire fondateur ?",
                  a: "Cliquez sur « Voir nos formules détaillées » pour accéder à notre espace partenaires (Genspark) et découvrir les offres exclusives de la première édition. Vous pourrez choisir le pack qui correspond à vos objectifs et bénéficier d'avantages spécifiques."
                },
                {
                  q: "Comment fonctionne l'assurance des joueurs pendant le tournoi ?",
                  a: "L'assurance des joueurs durant le tournoi de football caritatif Kick Out Cancer est à la charge de chaque participant ou de l'équipe qui inscrit ses joueurs. L'association Kick Out Cancer organise l'événement dans le cadre d'une initiative caritative, mais elle ne couvre pas spécifiquement les joueurs en cas de blessure. Ainsi, chaque sponsor ou entreprise inscrivant une équipe est responsable de vérifier que ses participants sont assurés pour ce type d'activité sportive, que ce soit via une assurance individuelle ou une assurance souscrite par l'entreprise."
                },
                {
                  q: "Les maillots sont-ils fournis ou doit-on les apporter ?",
                  a: "Chaque équipe participante recevra un jeu de maillots aux couleurs de Kick Out Cancer, avec le logo de l'association. Cela permet de garantir l'identité visuelle et l'harmonie de l'événement. Si vous souhaitez personnaliser ces maillots avec le logo de votre entreprise, c'est tout à fait possible dans le cadre des packs sponsors supérieurs (Gold, Platinum)."
                },
                {
                  q: "Que fournit l'organisation pour les stands partenaires ?",
                  a: "Pour chaque stand partenaire, nous mettons à disposition un espace nu comprenant une table (120x60 cm), deux chaises, une prise électrique (220V) à proximité, et l'affichage du nom ou logo du partenaire sur le stand. Le reste de l'aménagement (kakémonos, visuels, écrans, PLV) est à la charge du partenaire, afin de permettre une personnalisation libre de votre espace. Nous restons disponibles si vous avez des besoins spécifiques."
                },
                {
                  q: "Quels sont les matériels promotionnels inclus ?",
                  a: "Pour les matériels promotionnels, nous proposons une option flexible et adaptable en fonction de vos besoins et du pack choisi. Sur le stand, vous pouvez distribuer votre propre matériel promotionnel (goodies, flyers, etc.) aux participants. Pour la visibilité digitale, nous pouvons diffuser votre communication (logo, message clé, vidéo) sur les écrans pendant l'événement, sous réserve de validation du contenu."
                },
                {
                  q: "Quelle est la différence entre avoir une équipe et sponsoriser une équipe dans le pack Gold ?",
                  a: "Dans le pack Gold, vous pouvez constituer et inscrire une équipe au nom de votre entreprise (5 à 10 joueurs), qui participera au tournoi sous vos couleurs. Vous pouvez aussi choisir de sponsoriser une autre équipe (étudiants, association de patients, invités) pour leur permettre de participer grâce à votre soutien. Cette option est complémentaire et solidaire, mais reste facultative."
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </FadeSection>
    </main>
    </>
  )
}

// Composant accordéon pour la FAQ
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  // Limite d'affichage (environ 220 caractères ou 3-4 lignes)
  const limit = 220
  const isLong = answer.length > limit
  const shortAnswer = isLong ? answer.slice(0, limit) + '…' : answer
  const answerId = `faq-answer-${question.replace(/\W/g, '')}`
  return (
    <div className="border rounded-lg bg-white shadow-sm">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold focus:outline-none focus:ring text-left"
        onClick={() => { setOpen((v) => !v); setShowAll(false); }}
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span>{question}</span>
        <span className="ml-4 text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div
          id={answerId}
          className="px-6 pb-4 text-gray-700 animate-fade-in relative"
        >
          <span className={isLong && !showAll ? 'block overflow-hidden max-h-24 relative' : ''}>
            {showAll || !isLong ? answer : shortAnswer}
            {isLong && !showAll && (
              <span className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </span>
          {isLong && !showAll && (
            <button
              className="mt-2 text-primary underline text-sm font-medium focus:outline-none"
              onClick={() => setShowAll(true)}
              aria-label="Afficher toute la réponse"
            >
              En savoir plus
            </button>
          )}
        </div>
      )}
    </div>
  )
} 