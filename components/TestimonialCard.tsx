import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-dark rounded-xl p-6 shadow-soft"
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 dark:text-gray-300 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </motion.div>
  )
}

// Nouveau composant pour témoignage vidéo
interface VideoTestimonialCardProps {
  videoId: string // YouTube ID
  thumbnail: string
  author: string
  role: string
  quote: string
}

export const VideoTestimonialCard = ({ videoId, thumbnail, author, role, quote }: VideoTestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-soft flex flex-col items-center">
      <a 
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-48 mb-4 cursor-pointer group"
      >
        <Image
          src={thumbnail}
          alt={`Miniature de la vidéo de ${author}`}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition rounded-t-lg">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
            <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.85"/>
            <polygon points="22,18 40,28 22,38" fill="#e63946"/>
          </svg>
        </div>
      </a>
      <h4 className="font-bold text-center">{author}</h4>
      <p className="text-sm text-gray-600 text-center mb-2">{role}</p>
      <blockquote className="text-gray-700 italic text-center">"{quote}"</blockquote>
    </div>
  )
}

export default TestimonialCard 