import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Données fondateurs et présidents d'honneur
const founders = [
  { name: 'Mehdi Hioul', role: 'Pharmacien hospitalier – ASFA', photo: '/images/team/mehdi-hioul.png' },
  { name: 'Ibrahim Bouakka', role: 'Chercheur en oncologie – Gustave Roussy', photo: '/images/team/ibrahim-bouakka.png' },
  { name: 'Loïc Poiraudeau', role: 'Chercheur en oncologie – Gustave Roussy', photo: '/images/team/loic-poiraudeau.png' },
  { name: 'Benjamin Verret', role: 'Oncologue – Gustave Roussy', photo: '/images/team/benjamin-verret.png' },
  { name: 'Ronan Flippot', role: 'Oncologue – Gustave Roussy', photo: '/images/team/ronan-flippot.png' },
  { name: 'Marc-Antoine Benderra', role: 'Oncologue – AP-HP', photo: '/images/team/marc-antoine-benderra.png' },
  { name: 'Matthieu Delaye', role: 'Oncologue – Institut Curie', photo: '/images/team/matthieu-delaye.png' },
];
const honorary = [
  { name: 'Dr Ines Vas Luiz', role: 'Oncologue – Gustave Roussy', photo: '/images/team/ines-vas-luiz.png' },
  { name: 'Dr Suzette Delaloge', role: 'Oncologue – Gustave Roussy', photo: '/images/team/suzette-delaloge.png' },
  { name: 'Pr Fabrice André', role: 'Oncologue – Gustave Roussy', photo: '/images/team/fabrice-andre.png' },
];

const stats = [
  { label: 'équipes espérées', value: '32', icon: '/images/hero-bg.png' },
  { label: 'collectés pour la recherche', value: '100 000 €', icon: '/images/hero-bg.png' },
  { label: 'entreprises associées', value: '10', icon: '/images/hero-bg.png' },
];

const partners = [
  { name: 'IHU PRISM', logo: '/assets/logos/ihu-prism.webp' },
  { name: 'Gustave Roussy', logo: '/assets/logos/gustave-roussy.webp' },
  { name: 'CentraleSupélec', logo: '/assets/logos/centralesupelec.webp' },
  { name: 'Université Paris-Saclay', logo: '/assets/logos/universite-paris-saclay.webp' },
  { name: 'Unicancer', logo: '/assets/logos/unicancer.webp' },
  { name: 'Inserm', logo: '/assets/logos/inserm.webp' },
  { name: 'Gilead', logo: '/images/gilead-logo.png' },
];

export default function Landing() {
  return (
    <>
      <Head>
        <title>Kick Out Cancer – Masterclass Landing</title>
        <meta name="description" content="Kick Out Cancer : la landing page la plus moderne pour la lutte contre le cancer. Sport, solidarité, recherche, engagement !" />
      </Head>
      <main className="bg-gradient-to-br from-primary/10 via-white to-mint/10 min-h-screen overflow-x-hidden">
        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 text-center">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/hero-bg.webp" alt="Hero background" fill className="object-cover object-center opacity-80 blur-sm" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
            Kick Out Cancer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl md:text-3xl text-white/90 mb-10 font-medium">
            Ensemble, mettons KO le cancer par le sport et la solidarité
          </motion.p>
          <motion.a
            href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-white/90 text-primary font-bold text-xl shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border-2 border-primary backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
          >
            J'inscris mon équipe
          </motion.a>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="bg-white/80 rounded-2xl shadow-soft px-8 py-6 min-w-[180px] flex flex-col items-center backdrop-blur-md border border-primary/10">
                <span className="text-4xl font-extrabold text-primary mb-1">{stat.value}</span>
                <span className="text-sm text-gray-700 font-semibold uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AMBITION */}
        <section className="py-20 max-w-4xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-primary mb-6 text-center">
            Notre ambition
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg text-center mb-8">
            Kick Out Cancer, c'est la première édition d'un tournoi inédit mêlant sport, solidarité et recherche. En 2025, nous posons la première pierre d'un rendez-vous annuel dont l'objectif est de :
          </motion.p>
          <ul className="list-disc list-inside text-lg mb-8 text-gray-800">
            <li><strong>Mobiliser 32 équipes</strong> passionnées et engagées.</li>
            <li><strong>Collecter 100 000&nbsp;€</strong> pour financer des projets de recherche innovants.</li>
            <li><strong>Associer 10 instituts de recherche</strong> pour un impact scientifique maximal.</li>
          </ul>
          <blockquote className="italic bg-white/80 border-l-4 border-primary px-6 py-4 text-gray-700 rounded-xl shadow-soft">
            « En tant que chercheur à <strong>Gustave Roussy</strong>, je suis fier de participer à cette première édition qui crée un lien direct entre la recherche et les sportifs. Ensemble, nous bâtissons une dynamique nouvelle pour faire reculer le cancer. »
            <footer className="mt-2 text-right text-sm text-gray-600">– Dr Loïc Poirraudeau, Gustave Roussy</footer>
          </blockquote>
        </section>

        {/* PROCHAIN EVENEMENT */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-mint/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-primary mb-6">Prochain événement</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg mb-8">
              Rejoignez-nous le <strong>13 septembre 2025</strong> pour la <strong>première édition</strong> du Tournoi Kick Out Cancer : un moment unique où sport et solidarité se rencontrent.<br />
              <span className="block mt-2 text-base text-gray-700">Lieu : Five Paris 18, 217 rue Aubervilliers, Paris</span>
            </motion.p>
            <div className="relative w-full min-h-[300px] max-h-[600px] h-[40vw] bg-black flex items-center justify-center overflow-hidden mb-8 rounded-3xl shadow-lg">
              <Image src="/images/save-the-date.jpg" alt="Save the date - Prochain évènement Kick Out Cancer" fill className="object-contain object-center w-full h-full" priority />
            </div>
            <motion.a
              href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-primary text-white font-bold text-xl shadow-lg hover:bg-white hover:text-primary transition-all duration-300 border-2 border-primary"
              whileHover={{ scale: 1.05 }}
            >
              J'inscris mon équipe
            </motion.a>
            <p className="mt-2 text-sm text-gray-600">Processus simple, inscription en ligne</p>
          </div>
        </section>

        {/* FONDATEURS */}
        <section className="py-20 max-w-6xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 text-center text-4xl font-extrabold text-primary">Membres fondateurs</motion.h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((m, i) => (
              <motion.article key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl bg-white/80 p-6 shadow-soft text-center border border-primary/10 hover:scale-105 transition-transform">
                <div className="relative h-40 w-40 mx-auto mb-4">
                  <Image src={m.photo} alt={`${m.name} – ${m.role}`} fill className="rounded-full object-cover shadow" loading="lazy" />
                </div>
                <h4 className="mb-1 text-xl font-bold text-gray-900">{m.name}</h4>
                <p className="text-sm text-gray-700 italic">{m.role}</p>
              </motion.article>
            ))}
          </div>
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 mt-16 text-center text-2xl font-bold text-primary">Présidents d'honneur</motion.h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {honorary.map((p, i) => (
              <motion.article key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="text-center bg-white/80 rounded-2xl p-6 shadow-soft border border-primary/10">
                <div className="relative h-32 w-32 mx-auto mb-4">
                  <Image src={p.photo} alt={`${p.name} – ${p.role}`} fill className="rounded-full object-cover shadow" loading="lazy" />
                </div>
                <p className="font-bold text-gray-900">{p.name}</p>
                <p className="text-sm text-gray-700 italic">{p.role}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PARTENAIRES */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-mint/10">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-8 text-center">Partenaires scientifiques & institutionnels</motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <Image src={p.logo} alt={`Logo ${p.name}`} width={120} height={60} className="mx-auto bg-white rounded shadow p-2" />
                <p className="text-sm mt-2 font-semibold text-gray-700">{p.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-8">Foire aux questions</motion.h2>
          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <AccordionItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// FAQ data
const faqData = [
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
];

// Accordéon FAQ
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const limit = 220;
  const isLong = answer.length > limit;
  const shortAnswer = isLong ? answer.slice(0, limit) + '…' : answer;
  const answerId = `faq-answer-${question.replace(/\W/g, '')}`;
  return (
    <div className="border rounded-2xl bg-white/80 shadow-soft">
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
        <div id={answerId} className="px-6 pb-4 text-gray-700 animate-fade-in relative">
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
  );
} 