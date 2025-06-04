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

// Ajout des données fondateurs et présidents d'honneur
const founders = [
  { name: 'Mehdi Hioul', role: 'Pharmacien hospitalier – ASFA', photo: '/images/team/mehdi-hioul.png' },
  { name: 'Ibrahim Bouakka', role: 'Chercheur en oncologie – Gustave Roussy', photo: '/images/team/ibrahim-bouakka.png' },
  { name: 'Loïc Poiraudeau', role: 'Chercheur en oncologie – Gustave Roussy', photo: '/images/team/loic-poiraudeau.png' },
  { name: 'Benjamin Verret', role: 'Oncologue – Gustave Roussy', photo: '/images/team/benjamin-verret.png' },
  { name: 'Ronan Flippot', role: 'Oncologue – Gustave Roussy', photo: '/images/team/ronan-flippot.png' },
  { name: 'Marc-Antoine Benderra', role: 'Oncologue – AP-HP', photo: '/images/team/marc-antoine-benderra.png' },
  { name: 'Matthieu Delaye', role: 'Oncologue – Institut Curie', photo: '/images/team/matthieu-delaye.png' },
]
const honorary = [
  { name: 'Dr Ines Vas Luiz', role: 'Oncologue – Gustave Roussy', photo: '/images/team/ines-vas-luiz.png' },
  { name: 'Dr Suzette Delaloge', role: 'Oncologue – Gustave Roussy', photo: '/images/team/suzette-delaloge.png' },
  { name: 'Pr Fabrice André', role: 'Oncologue – Gustave Roussy', photo: '/images/team/fabrice-andre.png' },
]

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
        Édition Inaugurale 2025 – Participez dès maintenant et devenez un acteur engagé de la lutte contre le cancer avec Kick Out Cancer !
      </div>

      {/* Bloc Objectifs 2025 */}
      <section id="objectifs-2025" className="bg-gray-100 py-8 my-4 rounded-lg mx-2">
        <div className="text-center mb-6">
          <span className="inline-block bg-primary text-white text-xs font-bold rounded-full px-4 py-1 tracking-widest uppercase shadow">Objectifs 2025</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Équipes */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="mb-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône football équipes"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M12 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 8c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4Z" stroke="#e63946" strokeWidth="2"/></svg>
            </span>
            <span className="text-3xl font-extrabold text-primary mb-1">32</span>
            <span className="text-sm text-gray-700">équipes espérées</span>
          </div>
          {/* Collecte */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="mb-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône euro collecte"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M12 6v12M8 8.5c1.5-1 4.5-1 6 0M16 15.5c-1.5 1-4.5 1-6 0" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="text-3xl font-extrabold text-primary mb-1">100 000&nbsp;€</span>
            <span className="text-sm text-gray-700">collectés pour la recherche</span>
          </div>
          {/* Instituts */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="mb-2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône entreprise"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><path d="M3 21h18M3 7v14M21 7v14M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 21V7M18 21V7" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="text-3xl font-extrabold text-primary mb-1">10</span>
            <span className="text-sm text-gray-700">entreprises associées</span>
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
                « En tant que chercheur à <strong>Gustave Roussy</strong>, je suis fier de participer à cette première édition qui crée un lien direct entre la recherche et les sportifs. Ensemble, nous bâtissons une dynamique nouvelle pour faire reculer le cancer. »
              </span>
              <footer className="mt-2 text-right text-sm text-gray-600">– Dr Loïc Poirraudeau, Gustave Roussy</footer>
            </blockquote>
          </div>
        </FadeSection>

        {/* 3. Prochain évènement Section (déplacée ici) */}
        <FadeSection id="event" className="bg-[#f7f7f7] py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-primary mb-6">Prochain événement</h2>
            <p className="text-lg mb-8">
              Rejoignez-nous le <strong>13 septembre 2025</strong> pour la <strong>première édition</strong> du Tournoi Kick Out Cancer : un moment unique où sport et solidarité se rencontrent.<br/>
              <span className="block mt-2 text-base text-gray-700">Lieu : Five Paris 18, 217 rue Aubervilliers, Paris</span>
            </p>
          </div>
          <div className="relative w-full min-h-[300px] max-h-[600px] h-[40vw] bg-black flex items-center justify-center overflow-hidden mb-8">
            <Image
              src="/images/save-the-date.jpg"
              alt="Save the date - Prochain évènement Kick Out Cancer"
              fill
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>
          <div className="container mx-auto px-4 max-w-3xl text-center">
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
            <p className="mt-2 text-sm text-gray-600">Processus simple, inscription en ligne</p>
          </div>
        </FadeSection>

        {/* Présentation des membres fondateurs et présidents d'honneur */}
        <section id="fondateurs" className="py-20 bg-white">
          <h2 className="mb-6 text-center text-4xl font-extrabold">Membres fondateurs</h2>
          <div className="mx-auto mb-20 grid max-w-6xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((m) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-lg bg-white p-6 shadow-md text-center"
              >
                <div className="relative h-40 w-40 mx-auto mb-4">
                  <Image
                    src={m.photo}
                    alt={`${m.name} – ${m.role}`}
                    fill
                    className="rounded-full object-cover shadow"
                    loading="lazy"
                  />
                </div>
                <h4 className="mb-1 text-xl font-bold text-gray-900">{m.name}</h4>
                <p className="text-sm text-gray-700 italic">{m.role}</p>
              </motion.article>
            ))}
          </div>
          <h3 className="mb-10 text-center text-2xl font-bold text-primary">Présidents d'honneur</h3>
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 lg:grid-cols-3">
            {honorary.map((p) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="relative h-32 w-32 mx-auto mb-4">
                  <Image
                    src={p.photo}
                    alt={`${p.name} – ${p.role}`}
                    fill
                    className="rounded-full object-cover shadow"
                    loading="lazy"
                  />
                </div>
                <p className="font-bold text-gray-900">{p.name}</p>
                <p className="text-sm text-gray-700 italic">{p.role}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* 3. Témoignages vidéo Section */}
        <FadeSection id="temoignages-video" className="bg-[#fefefe] py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4">Témoignages vidéo des participants</h2>
            <p className="text-center text-gray-700 mb-8">Découvrez les premières interviews de nos sportifs, chercheurs et bénévoles : leur engagement, leurs motivations et leurs espoirs pour cette édition 2025.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              <div className="bg-white rounded-xl p-4 shadow-soft flex flex-col items-center max-w-xs w-full">
                <div className="relative w-full aspect-[4/5] mb-4">
                  <Image
                    src="/images/temoignage_mehdi.png"
                    alt="Témoignage de Mehdi, Président Kick Out Cancer"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <h4 className="font-bold text-center">Mehdi, Président Kick Out Cancer</h4>
                <p className="text-sm text-gray-600 text-center mb-2">Président et fondateur de l'association</p>
                <blockquote className="text-gray-700 italic text-center mb-2">&ldquo;Nous lançons ce tournoi pour fédérer toutes les énergies contre le cancer. Rejoignez-nous pour cette première édition !&rdquo;</blockquote>
                <a
                  href="https://youtube.com/shorts/dEItZYM7D3Y?si=P0-greH_z3YKBWzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline text-sm mt-2"
                >
                  Voir la vidéo sur YouTube
                </a>
              </div>
              {/* Ajouter d'autres témoignages ici si besoin */}
            </div>
          </div>
        </FadeSection>

        {/* Nouvelle section Partenaire scientifique */}
        <section id="partenaire-scientifique" className="bg-[#f0f8ff] py-12 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Partenaire scientifique : IHU PRISM & Gustave Roussy
          </h2>
          <div className="max-w-3xl mx-auto leading-relaxed text-lg px-4">
            <p>
              Kick Out Cancer s'appuie sur l'excellence de l'IHU PRISM et de Gustave Roussy pour accélérer la recherche et l'innovation en oncologie.
              L'intégralité des bénéfices générés par Kick Out Cancer sera reversée à leurs projets de recherche (essais cliniques, innovations thérapeutiques, études fondamentales…).
            </p>
            <p className="mt-4">
              L'IHU PRISM (Institut Hospitalo-Universitaire en Recherche Translationnelle et Médicale) est un centre d'expertise dédié à la médecine de précision en cancérologie.
              Il réunit des équipes de l'université Paris-Saclay, d'Inserm, d'Unicancer et de plusieurs hôpitaux universitaires autour d'une approche intégrative innovante :
              intelligence artificielle, analyse de l'ADN circulant, épigénétique, hétérogénéité clonale et biologie spatiale.
              Sa mission est de mieux comprendre la biologie de chaque cancer afin de réduire la mortalité en identifiant les formes les plus agressives dès le diagnostic
              et en proposant le traitement le plus adapté à chaque patient.
            </p>
            <div className="mt-4">
              Parmi ses objectifs principaux :
              <ul className="list-disc ml-8 mt-2">
                <li>Créer une cartographie digitale personnalisée pour chaque patient,</li>
                <li>Identifier de nouveaux biomarqueurs prometteurs,</li>
                <li>Accélérer l'accès aux thérapies ciblées et aux essais précoces.</li>
              </ul>
            </div>
            <p className="mt-4">
              Venez profiter de notre premier événement pour découvrir en avant-première les prochaines grandes avancées en recherche contre le cancer !
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <Image src="/assets/logos/ihu-prism.webp" alt="Logo IHU PRISM" width={120} height={60} className="mx-auto" />
                <p className="text-sm mt-2">IHU PRISM</p>
              </div>
              <div className="text-center">
                <Image src="/assets/logos/gustave-roussy.webp" alt="Logo Gustave Roussy" width={120} height={60} className="mx-auto" />
                <p className="text-sm mt-2">Gustave Roussy</p>
              </div>
              <div className="text-center">
                <Image src="/assets/logos/centralesupelec.webp" alt="Logo CentraleSupélec" width={120} height={60} className="mx-auto" />
                <p className="text-sm mt-2">CentraleSupélec</p>
              </div>
              <div className="text-center">
                <Image src="/assets/logos/universite-paris-saclay.webp" alt="Logo Université Paris-Saclay" width={120} height={60} className="mx-auto" />
                <p className="text-sm mt-2">Université Paris-Saclay</p>
              </div>
              <div className="text-center">
                <Image src="/assets/logos/unicancer.webp" alt="Logo Unicancer" width={120} height={60} className="mx-auto" />
                <p className="text-sm mt-2">Unicancer</p>
              </div>
              <div className="text-center">
                <Image src="/assets/logos/inserm.webp" alt="Logo Inserm" width={120} height={60} className="mx-auto" />
                <p className="text-sm mt-2">Inserm</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Nos partenaires Section */}
        <FadeSection id="nos-partenaires" className="bg-[#fafafa] py-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Nos partenaires fondateurs</h2>
            <p className="mb-6 text-gray-700">Merci aux premières entreprises qui nous soutiennent et apportent leurs expertises pour faire de cette première édition un succès.</p>
            <div className="mb-8">
              <SupportersSection />
            </div>
            <p className="partners-count font-semibold text-gray-800 mb-8">3 partenaires déjà engagés</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center gap-2"
                aria-label="Contactez-nous pour devenir partenaire"
                onClick={() => { if (typeof window !== 'undefined' && window.gtag) { window.gtag('event', 'click', { event_category: 'CTA', event_label: 'Contact' }); } }}
              >
                Contactez-nous pour devenir partenaire
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M14 3h7v7m0-7L10 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 19h14v-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </FadeSection>

        {/* 4. Pack Partenariat Section */}
        <FadeSection id="pack-partenariat" className="bg-white py-16">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-yellow-400 text-primary text-xs font-bold rounded-full px-4 py-1 tracking-widest uppercase shadow">Partenaire 2025</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Vous êtes une entreprise ? Devenez Partenaire</h2>
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
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-label="Icône Visibilité Événementielle"><circle cx="12" cy="12" r="12" fill="#e63946" opacity="0.12"/><rect x="7" y="10" width="10" height="7" rx="2" stroke="#e63946" strokeWidth="2"/><path d="M12 7v3" stroke="#e63946" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#e63946"/></svg>
                </span>
                <h3 className="font-semibold text-lg mb-1">Visibilité Événementielle</h3>
                <p className="text-sm text-gray-700">Stand dédié lors du tournoi, mentions régulières dans l'animation de la journée.</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 flex-wrap mt-6">
              <a
                href="mailto:contact@kickoutcancer.fr"
                className="btn btn-primary inline-flex items-center gap-2"
                aria-label="Contactez-nous pour devenir partenaire"
              >
                Contactez-nous
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M14 3h7v7m0-7L10 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 19h14v-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="https://ddbmudqn.genspark.space/"
                className="btn btn-secondary inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Télécharger le dossier partenaire"
              >
                Dossier partenaire
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 16v-8m0 8l-4-4m4 4l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="4" width="16" height="16" rx="2" stroke="#fff" strokeWidth="2"/></svg>
              </a>
            </div>
          </div>
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
                  q: "Comment se déroule la journée du tournoi ?",
                  a: "La journée se déroule selon le planning suivant :\n\n- 9h00 : Accueil des équipes et inscriptions\n- 10h00 : Phase de matches qualificatifs\n- 12h30 : Animations et pause déjeuner\n- 14h00 : Demi-finales et finales\n- 17h00 : Remise des prix et clôture\n\nDes animations seront proposées tout au long de la journée : stands d'information, tombola, et plus encore !"
                },
                {
                  q: "À quoi vont servir les fonds récoltés ?",
                  a: "Les fonds collectés servent à deux niveaux :\n\n1. Couvrir les frais d'organisation (location du lieu, logistique, matériel, communication, frais administratifs)\n2. L'intégralité du surplus est ensuite reversée à l'IHU PRISM pour financer la recherche contre le cancer\n\nNous sommes totalement transparents : un bilan financier est publié chaque année sur le site."
                },
                {
                  q: "Est-ce une association caritative ?",
                  a: "Kick Out Cancer est une association loi 1901 à but non lucratif. Tous les organisateurs sont bénévoles, il n'y a aucune rémunération pour les membres du bureau. Nous fonctionnons en totale transparence : nos comptes sont validés en AG et tout le monde peut consulter le rapport financier sur le site."
                }
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