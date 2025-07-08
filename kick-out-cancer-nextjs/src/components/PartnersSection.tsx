'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Star, Award, Heart } from 'lucide-react';

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const partners = [
    {
      name: "Gilead",
      logo: "/assets/partners/gilead.png",
      category: "Partenaire Silver",
      description: "Leader mondial en biotechnologie et recherche médicale",
      contribution: "Soutien financier et expertise scientifique",
      link: "https://gilead.com"
    },
    {
      name: "Stetoo",
      logo: "/assets/partners/stetoo.png",
      category: "Partenaire logistique",
      description: "Solutions innovantes pour l'organisation d'événements sportifs",
      contribution: "Support logistique et technique",
      link: "https://stetoo.com"
    },
    {
      name: "Elwood Vitamines",
      logo: "/assets/partners/elwood-vitamines.png",
      category: "Partenaire logistique",
      description: "Nutrition sportive et bien-être des athlètes",
      contribution: "Produits nutritionnels pour les participants",
      link: "https://elwood-vitamines.com"
    },
    {
      name: "DigilityX",
      logo: "/assets/partners/digilityx.png",
      category: "Partenaire logistique",
      description: "Technologies digitales pour l'engagement communautaire",
      contribution: "Plateforme digitale et communication",
      link: "https://digilityx.com"
    },
    {
      name: "Aerio",
      logo: "/assets/partners/aerio.png",
      category: "Partenaire académique",
      description: "Recherche en aéronautique et transfert technologique",
      contribution: "Expertise en innovation et transfert de technologies",
      link: "https://aerio.com"
    }
  ];

  const partnerCategories = [
    { name: "Silver", icon: Star, color: "text-gray-400" },
    { name: "Logistique", icon: Award, color: "text-lime" },
    { name: "Académique", icon: Heart, color: "text-magenta" }
  ];

  return (
    <section id="partenaires" className="py-24 bg-gradient-to-b from-gray-900 to-midnight">
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
            Nos partenaires
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Des entreprises engagées qui nous soutiennent dans notre mission
          </motion.p>
        </motion.div>

        {/* Partner Categories */}
        <motion.div
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <category.icon className={`w-5 h-5 ${category.color}`} />
              <span className="text-gray-400 font-medium">{category.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredPartner(partner.name)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="card-hover p-6 text-center h-full">
                {/* Logo */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-800/50 rounded-2xl flex items-center justify-center border border-gray-700/50 group-hover:border-lime/30 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime/20 to-turquoise/20 rounded-xl flex items-center justify-center">
                    <span className="font-bebas text-xl text-lime">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-bebas text-xl lg:text-2xl text-text-light mb-2">
                  {partner.name}
                </h3>

                {/* Category */}
                <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-3 py-1 mb-4">
                  <span className="text-lime font-semibold text-xs">
                    {partner.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>

                {/* Contribution */}
                <div className="text-gray-400 text-xs">
                  <strong>Contribution :</strong> {partner.contribution}
                </div>

                {/* Link */}
                <motion.a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors mt-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm">Visiter le site</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime/10 to-turquoise/10 rounded-2xl border border-lime/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPartner === partner.name ? 1 : 0 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-lime mx-auto mb-2" />
                    <p className="text-lime font-semibold text-sm">Merci pour votre soutien !</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Vous souhaitez devenir partenaire ?
            </p>
            <motion.a
              href="#contact"
              className="cta-button secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contactez-nous</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection; 