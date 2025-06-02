import Image from 'next/image'
import Button from './Button'
import FadeSection from './FadeSection'

export default function AboutSection() {
  return (
    <FadeSection id="about" className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <div className="flex justify-center mb-6 w-full">
          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
              display: 'inline-block',
              padding: '12px',
            }}
          >
            <Image
              src="/images/kick-out-cancer-logo.png"
              alt="Kick Out Cancer logo"
              width={150}
              height={150}
              className="mx-auto w-[120px] md:w-[150px] h-auto"
              priority
            />
          </div>
        </div>
        <h2 className="mb-6 text-4xl font-extrabold">Notre ambition</h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed mb-4">
          <strong>Kick Out Cancer, c&rsquo;est bien plus qu&rsquo;un tournoi&nbsp;: c&rsquo;est un mouvement.</strong><br />
          Notre mission&nbsp;? Réunir sportifs, soignants, patients, chercheurs et entreprises pour <strong>mettre KO le cancer par l&rsquo;action, l&rsquo;innovation et la solidarité</strong>.<br />
          Chaque match, chaque but, chaque don contribue à <strong>transformer l&rsquo;espoir en progrès concret</strong>. Ensemble, faisons reculer le cancer.
        </p>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed mb-4">
          <strong>Vous voulez en savoir plus&nbsp;?</strong><br />
          Découvrez la vision du projet en vidéo et rejoignez notre aventure&nbsp;:
        </p>
        <div className="w-full flex justify-center mt-6">
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dEItZYM7D3Y"
              title="Kick Out Cancer - Présentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <Button
            as="a"
            href="#event"
            variant="primary"
            aria-label="Découvrir notre prochain événement"
          >
            {`Découvrir l'événement`}
          </Button>
          <a
            href="#team"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-medium text-primary hover:bg-primary/10 transition-colors md:ml-0"
          >
            {`Découvrir l'équipe`}
          </a>
        </div>
      </div>
    </FadeSection>
  )
} 