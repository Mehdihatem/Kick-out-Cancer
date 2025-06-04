import Image from 'next/image'

const partners = [
  {
    name: 'IHU PRISM',
    logo: '/assets/logos/ihu-prism.webp',
    alt: 'IHU PRISM',
  },
  {
    name: 'Gustave Roussy',
    logo: '/assets/logos/gustave-roussy.webp',
    alt: 'Gustave Roussy',
  },
  {
    name: 'CentraleSupélec',
    logo: '/assets/logos/centralesupelec.webp',
    alt: 'CentraleSupélec',
  },
  {
    name: 'Université Paris-Saclay',
    logo: '/assets/logos/universite-paris-saclay.webp',
    alt: 'Université Paris-Saclay',
  },
  {
    name: 'Unicancer',
    logo: '/assets/logos/unicancer.webp',
    alt: 'Unicancer',
  },
  {
    name: 'Inserm',
    logo: '/assets/logos/inserm.webp',
    alt: 'Inserm',
  },
]

export default function PartnerSection() {
  return (
    <section id="partners-scientifiques" className="bg-[#eaf6fb] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Partenaires scientifiques</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8">
          {`Kick Out Cancer s'appuie sur l'excellence de l'IHU PRISM et de ses partenaires pour accélérer la recherche et l'innovation contre le cancer.`}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center" style={{maxWidth: 150}}>
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain mb-2"
                style={{maxWidth: 150, margin: 10}}
              />
              <span className="text-sm text-gray-700 mt-1">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 