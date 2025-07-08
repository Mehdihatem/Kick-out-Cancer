'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Heart, TrendingUp } from 'lucide-react';

const AmbitionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ambitions = [
    {
      icon: Users,
      title: "32 équipes",
      description: "Rassembler 32 équipes de passionnés pour un tournoi solidaire",
      color: "text-turquoise",
      bgColor: "bg-turquoise/10",
      borderColor: "border-turquoise/20"
    },
    {
      icon: Target,
      title: "100 000€",
      description: "Atteindre 100 000€ pour financer des projets de recherche innovants",
      color: "text-magenta",
      bgColor: "bg-magenta/10",
      borderColor: "border-magenta/20"
    },
    {
      icon: Heart,
      title: "Impact réel",
      description: "Chaque don contribue directement à la recherche de demain",
      color: "text-lime",
      bgColor: "bg-lime/10",
      borderColor: "border-lime/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="ambition" className="py-24 bg-gradient-to-b from-midnight to-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Notre ambition
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            variants={itemVariants}
          >
            Unir la communauté sportive pour faire avancer la recherche contre le cancer
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ambitions.map((ambition, index) => (
            <motion.div
              key={ambition.title}
              variants={itemVariants}
              className="card-hover group"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${ambition.bgColor} ${ambition.borderColor} border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ambition.icon className={`w-8 h-8 ${ambition.color}`} />
                </motion.div>

                {/* Title */}
                <h3 className={`font-bebas text-3xl lg:text-4xl mb-4 ${ambition.color}`}>
                  {ambition.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {ambition.description}
                </p>

                {/* Progress indicator */}
                <motion.div
                  className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                >
                  <motion.div
                    className={`h-full ${ambition.color.replace('text-', 'bg-')}`}
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 text-lime font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-6 h-6" />
            <span>Ensemble, nous pouvons faire la différence</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmbitionSection; 