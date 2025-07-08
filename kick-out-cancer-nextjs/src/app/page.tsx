import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AmbitionSection from '@/components/AmbitionSection';
import IHUPrismSection from '@/components/IHUPrismSection';

export default function Home() {
  return (
    <main className="bg-midnight min-h-screen">
      <Navigation />
      <HeroSection />
      <AmbitionSection />
      <IHUPrismSection />
      
      {/* Placeholder sections for remaining components */}
      <section className="py-24 bg-gradient-to-b from-midnight to-gray-900">
        <div className="container text-center">
          <h2 className="section-title">Carousel IHU PRISM Fondateurs</h2>
          <p className="section-subtitle">Section en cours de développement</p>
        </div>
      </section>
      
      <section className="py-24 bg-gradient-to-b from-gray-900 to-midnight">
        <div className="container text-center">
          <h2 className="section-title">Prochain événement</h2>
          <p className="section-subtitle">Save the date interactif - Section en cours de développement</p>
        </div>
      </section>
      
      <section className="py-24 bg-gradient-to-b from-midnight to-gray-900">
        <div className="container text-center">
          <h2 className="section-title">Partenaires entreprises</h2>
          <p className="section-subtitle">Carousel logos + hover pitch - Section en cours de développement</p>
        </div>
      </section>
      
      <footer className="py-16 bg-gray-900">
        <div className="container text-center">
          <h2 className="section-title">Footer</h2>
          <p className="section-subtitle">Liens légaux + CTA don permanent - Section en cours de développement</p>
        </div>
      </footer>
    </main>
  );
}
