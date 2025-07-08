import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AmbitionSection from '@/components/AmbitionSection';
import IHUPrismSection from '@/components/IHUPrismSection';
import FoundersCarousel from '@/components/FoundersCarousel';
import EventSection from '@/components/EventSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-midnight min-h-screen">
      <Navigation />
      <HeroSection />
      <AmbitionSection />
      <IHUPrismSection />
      <FoundersCarousel />
      <EventSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
