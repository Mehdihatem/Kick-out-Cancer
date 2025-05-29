import { motion } from 'framer-motion'
import Image from 'next/image'

const founders = [
  {
    name: 'Mehdi Hioul',
    role: 'Pharmacien hospitalier – ASFA',
    photo: '/images/team/mehdi-hioul.png',
  },
  {
    name: 'Ibrahim Bouakka',
    role: 'Chercheur en oncologie – Gustave Roussy',
    photo: '/images/team/ibrahim-bouakka.png',
  },
  {
    name: 'Loïc Poiraudeau',
    role: 'Chercheur en oncologie – Gustave Roussy',
    photo: '/images/team/loic-poiraudeau.png',
  },
  {
    name: 'Benjamin Verret',
    role: 'Oncologue – Gustave Roussy',
    photo: '/images/team/benjamin-verret.png',
  },
  {
    name: 'Ronan Flippot',
    role: 'Oncologue – Gustave Roussy',
    photo: '/images/team/ronan-flippot.png',
  },
  {
    name: 'Marc-Antoine Benderra',
    role: 'Oncologue – AP-HP',
    photo: '/images/team/marc-antoine-benderra.png',
  },
  {
    name: 'Matthieu Delaye',
    role: 'Oncologue – Institut Curie',
    photo: '/images/team/matthieu-delaye.png',
  },
]

const honorary = [
  {
    name: 'Dr Ines Vas Luiz',
    role: 'Oncologue – Gustave Roussy',
    photo: '/images/team/ines-vas-luiz.png',
  },
  {
    name: 'Dr Suzette Delaloge',
    role: 'Oncologue – Gustave Roussy',
    photo: '/images/team/suzette-delaloge.png',
  },
  {
    name: 'Pr Fabrice André',
    role: 'Oncologue – Gustave Roussy',
    photo: '/images/team/fabrice-andre.png',
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-24 scroll-mt-28">
      <h2 className="mb-6 text-center text-4xl font-extrabold">Qui sommes-nous ?</h2>

      <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-relaxed">
        {`Kick Out Cancer est une association loi 1901 à but non lucratif créée par des chercheurs, oncologues et pharmaciens — tous sportifs — pour transformer le mouvement en accélérateur de recherche et de prévention contre le cancer.`}
      </p>

      {/* Fondateurs */}
      <h3 className="mb-10 text-center text-2xl font-bold text-primary">Fondateurs</h3>
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
                alt={m.name}
                fill
                className="rounded-full object-cover shadow"
                loading="lazy"
              />
            </div>
            <h4 className="mb-1 text-xl font-semibold">{m.name}</h4>
            <p className="text-sm text-gray-700">{m.role}</p>
          </motion.article>
        ))}
      </div>

      {/* Présidents d&#39;honneur */}
      <h3 className="mb-10 text-center text-2xl font-bold text-primary">Présidents d&#39;honneur</h3>
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
                alt={p.name}
                fill
                className="rounded-full object-cover shadow"
                loading="lazy"
              />
            </div>
            <p className="font-semibold">{p.name}</p>
            <p className="text-sm text-gray-700">{p.role}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
} 