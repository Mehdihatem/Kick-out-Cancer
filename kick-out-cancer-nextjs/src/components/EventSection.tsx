'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Heart } from 'lucide-react';
import ProgressBarLive from './ProgressBarLive';

const EventSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Event date: June 15, 2025
  const eventDate = new Date('2025-06-15T09:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const eventDetails = {
    title: "Tournoi Kick Out Cancer 2025",
    date: "15 Juin 2025",
    time: "09:00 - 18:00",
    location: "Stade Municipal de Paris",
    address: "75016 Paris, France",
    teams: "32 équipes",
    format: "Tournoi 5 vs 5",
    registration: "Inscription gratuite"
  };

  const countdownItems = [
    { label: 'Jours', value: timeLeft.days, color: 'text-turquoise' },
    { label: 'Heures', value: timeLeft.hours, color: 'text-magenta' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'text-lime' },
    { label: 'Secondes', value: timeLeft.seconds, color: 'text-orange' }
  ];

  return (
    <section id="evenement" className="py-24 bg-gradient-to-b from-midnight to-gray-900">
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
            Prochain événement
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rejoignez-nous pour la première édition de notre tournoi caritatif
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Event Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h3 className="font-bebas text-3xl lg:text-4xl text-text-light mb-6">
                {eventDetails.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Un événement unique qui allie passion du sport et engagement pour la recherche. 
                Venez défier d'autres équipes dans une ambiance conviviale et solidaire.
              </p>
            </div>

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="w-6 h-6 text-lime" />
                <div>
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-text-light font-semibold">{eventDetails.date}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-6 h-6 text-lime" />
                <div>
                  <p className="text-gray-400 text-sm">Horaires</p>
                  <p className="text-text-light font-semibold">{eventDetails.time}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-6 h-6 text-lime" />
                <div>
                  <p className="text-gray-400 text-sm">Lieu</p>
                  <p className="text-text-light font-semibold">{eventDetails.location}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Users className="w-6 h-6 text-lime" />
                <div>
                  <p className="text-gray-400 text-sm">Équipes</p>
                  <p className="text-text-light font-semibold">{eventDetails.teams}</p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a
                href="https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary large group w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>J'inscris mon équipe</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Countdown Timer and Progress Bar */}
          <motion.div
            className="relative space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Countdown Timer */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 p-8">
              <div className="text-center mb-8">
                <h4 className="font-bebas text-2xl text-text-light mb-2">Compte à rebours</h4>
                <p className="text-gray-400">Plus que quelques temps avant l'événement</p>
              </div>

              {/* Countdown Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {countdownItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <div className={`font-bebas text-3xl lg:text-4xl ${item.color} mb-2`}>
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Heart Animation */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-8 h-8 text-magenta fill-current" />
              </motion.div>
            </div>

            {/* Live Progress Bar */}
            <ProgressBarLive />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection; 