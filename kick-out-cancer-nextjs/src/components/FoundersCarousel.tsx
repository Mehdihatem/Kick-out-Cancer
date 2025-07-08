'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const FoundersCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const founders = [
    {
      name: "IHU PRISM",
      logo: "/assets/partners/ihu-prism.png",
      description: "Institut Hospitalo-Universitaire de Recherche en Immunothérapie",
      proof: "Centre d'excellence en immunothérapie",
      link: "https://ihu-prism.fr"
    },
    {
      name: "Gustave Roussy",
      logo: "/assets/partners/gustave-roussy.png",
      description: "Premier centre de lutte contre le cancer en Europe",
      proof: "Expertise reconnue mondialement",
      link: "https://gustaveroussy.fr"
    },
    {
      name: "INSERM",
      logo: "/assets/partners/inserm.png",
      description: "Institut national de la santé et de la recherche médicale",
      proof: "Recherche biomédicale de pointe",
      link: "https://inserm.fr"
    },
    {
      name: "Unicancer",
      logo: "/assets/partners/unicancer.png",
      description: "Fédération française des centres de lutte contre le cancer",
      proof: "Réseau national d'excellence",
      link: "https://unicancer.fr"
    },
    {
      name: "CentraleSupélec",
      logo: "/assets/partners/centralesupelec.png",
      description: "École d'ingénieurs leader en sciences et technologies",
      proof: "Innovation technologique",
      link: "https://centralesupelec.fr"
    },
    {
      name: "Université Paris-Saclay",
      logo: "/assets/partners/universite-paris-saclay.png",
      description: "Université de recherche intensive de rang mondial",
      proof: "Excellence académique",
      link: "https://universite-paris-saclay.fr"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-midnight">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            IHU PRISM Fondateurs
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Les institutions fondatrices qui font la force de notre partenariat scientifique
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-midnight/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-text-light hover:text-lime transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-midnight/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-text-light hover:text-lime transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {founders.map((founder, index) => (
                <div key={founder.name} className="w-full flex-shrink-0">
                  <motion.div
                    className="card-hover p-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Logo */}
                    <div className="w-32 h-32 mx-auto mb-6 bg-gray-800/50 rounded-2xl flex items-center justify-center border border-gray-700/50">
                      <div className="w-24 h-24 bg-gradient-to-br from-lime/20 to-turquoise/20 rounded-xl flex items-center justify-center">
                        <span className="font-bebas text-2xl text-lime">
                          {founder.name.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="font-bebas text-2xl lg:text-3xl text-text-light mb-4">
                      {founder.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 max-w-md mx-auto">
                      {founder.description}
                    </p>

                    {/* Proof */}
                    <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-2 mb-6">
                      <div className="w-2 h-2 bg-lime rounded-full"></div>
                      <span className="text-lime font-semibold text-sm">
                        {founder.proof}
                      </span>
                    </div>

                    {/* Link */}
                    <motion.a
                      href={founder.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm">En savoir plus</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {founders.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-lime' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 text-lime font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span>Ensemble pour la recherche</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersCarousel; 