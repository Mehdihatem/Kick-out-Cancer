'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerLinks = {
    association: [
      { name: "À propos", href: "#accueil" },
      { name: "Notre mission", href: "#ambition" },
      { name: "Événements", href: "#evenement" },
      { name: "Partenaires", href: "#partenaires" }
    ],
    legal: [
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "Politique de confidentialité", href: "/privacy" },
      { name: "CGU", href: "/terms" },
      { name: "Cookies", href: "/cookies" }
    ],
    contact: [
      { name: "contact@kickoutcancer.fr", href: "mailto:contact@kickoutcancer.fr", icon: Mail },
      { name: "+33 1 23 45 67 89", href: "tel:+33123456789", icon: Phone },
      { name: "Paris, France", href: "#", icon: MapPin }
    ]
  };

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/kickoutcancer", color: "hover:text-pink-400" },
    { name: "LinkedIn", href: "https://linkedin.com/company/kickoutcancer", color: "hover:text-blue-400" },
    { name: "Twitter", href: "https://twitter.com/kickoutcancer", color: "hover:text-blue-500" },
    { name: "Facebook", href: "https://facebook.com/kickoutcancer", color: "hover:text-blue-600" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 py-16">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-lime rounded-lg flex items-center justify-center">
                  <span className="font-bebas text-midnight text-lg">K</span>
                </div>
                <span className="font-bebas text-text-light text-xl">
                  Kick Out Cancer
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Association loi 1901 dédiée à la lutte contre le cancer 
                à travers des événements sportifs caritatifs.
              </p>
              <div className="flex items-center gap-2 text-lime">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-sm font-semibold">100% des dons reversés à la recherche</span>
              </div>
            </motion.div>

            {/* Association Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-bebas text-lg text-text-light mb-4">Association</h3>
              <ul className="space-y-2">
                {footerLinks.association.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-lime transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="font-bebas text-lg text-text-light mb-4">Légal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-lime transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="font-bebas text-lg text-text-light mb-4">Contact</h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((contact) => (
                  <li key={contact.name}>
                    <a
                      href={contact.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-lime transition-colors text-sm"
                    >
                      <contact.icon className="w-4 h-4" />
                      <span>{contact.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Don Permanent */}
          <motion.div
            className="bg-gradient-to-r from-lime/10 to-turquoise/10 border border-lime/20 rounded-2xl p-8 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="font-bebas text-2xl lg:text-3xl text-text-light mb-4">
              Soutenez la recherche
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Chaque don, même modeste, contribue directement à l'avancée de la recherche contre le cancer. 
              Ensemble, nous pouvons faire la différence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.helloasso.com/associations/kickoutcancer"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                <span>Faire un don</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Inscrire mon équipe</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-700/50">
            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">{social.name.charAt(0)}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <p className="text-gray-400 text-sm">
                © 2025 Kick Out Cancer - Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Association loi 1901 - SIRET : 12345678901234
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 