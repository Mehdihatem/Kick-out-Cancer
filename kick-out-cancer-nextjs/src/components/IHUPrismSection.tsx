'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Microscope, Users, Award } from 'lucide-react';

const IHUPrismSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impactStats = [
    { icon: Microscope, value: "50+", label: "Projets de recherche" },
    { icon: Users, value: "200+", label: "Chercheurs" },
    { icon: Award, value: "15+", label: "Partenaires internationaux" },
  ];

  return (
    <section id="ihu-prism" className="py-24 bg-gradient-to-b from-gray-900 to-midnight">
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
            IHU PRISM
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Notre partenaire scientifique de référence pour la recherche contre le cancer
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Isometric Hub Component */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl border border-gray-700/50 overflow-hidden">
              {/* 3D Building Structure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{ 
                    rotateY: [0, 360],
                    rotateX: [0, 10, 0]
                  }}
                  transition={{ 
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Main Building */}
                  <div className="w-48 h-48 bg-gradient-to-br from-lime/20 to-turquoise/20 border-2 border-lime/30 rounded-lg transform rotate-45 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime/10 to-turquoise/10 rounded-lg"></div>
                    
                    {/* Windows */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-lime/40 rounded"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-lime/40 rounded"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-lime/40 rounded"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-lime/40 rounded"></div>
                    
                    {/* Center Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-lime rounded-lg flex items-center justify-center">
                        <span className="font-bebas text-midnight text-2xl">IHU</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-8 -left-8 w-6 h-6 bg-magenta/60 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -top-4 -right-4 w-4 h-4 bg-turquoise/60 rounded-full"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-4 w-5 h-5 bg-orange/60 rounded-full"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </motion.div>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-midnight/80 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lime font-semibold text-sm">Centre de recherche avancée</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <h3 className="font-bebas text-3xl lg:text-4xl text-text-light mb-4">
                Partenaire scientifique
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                L'IHU PRISM (Institut Hospitalo-Universitaire de Recherche en Immunothérapie) 
                est un centre d'excellence dédié à la recherche contre le cancer. 
                Notre partenariat garantit que chaque don contribue directement à des projets 
                de recherche innovants et prometteurs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Grâce à leur expertise de pointe en immunothérapie et en médecine personnalisée, 
                l'IHU PRISM développe des traitements révolutionnaires qui sauvent des vies.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-lime mr-2" />
                    <span className="font-bebas text-2xl text-text-light">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <motion.a
                href="#recherche"
                className="cta-button secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Découvre la recherche</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IHUPrismSection; 