import Image from 'next/image'
import Button from './Button'
import FadeSection from './FadeSection'

export default function AboutSection() {
  return (
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
          Kick Out Cancer, c'est bien plus qu'un simple tournoi : c'est une mission. Notre ambition est de réunir sportifs, soignants, patients, chercheurs et entreprises autour d'un objectif unique : mettre KO le cancer par le mouvement, l'innovation et la solidarité. Chaque match, chaque but, chaque partenaire contribue à transformer l'espoir en action et à faire avancer la recherche. Ensemble, faisons bouger les lignes.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <Button
            as="a"
            href="#event"
            variant="primary"
            aria-label="Découvrir notre prochain événement"
          >
            Découvrir l'événement
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
  )
} 