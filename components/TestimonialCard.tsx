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
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-xl p-4 shadow-soft flex flex-col items-center">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={thumbnail}
          alt={`Miniature de la vidéo de ${author}`}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <h4 className="font-bold text-center">{author}</h4>
      <p className="text-sm text-gray-600 text-center mb-2">{role}</p>
      <blockquote className="text-gray-700 italic text-center">“{quote}”</blockquote>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" role="dialog" aria-modal="true" aria-labelledby={`video-modal-title-${videoId}`}> 
          <div className="relative w-full max-w-2xl mx-4">
            <button className="absolute -top-6 -right-6 bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow focus:outline-none focus:ring" onClick={() => setOpen(false)} aria-label="Fermer la vidéo" autoFocus>&times;</button>
            <h2 id={`video-modal-title-${videoId}`} className="sr-only">Témoignage vidéo de {author}</h2>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&si=O3K9lfWv7wFF3f5z`}
              title={`Témoignage vidéo de ${author}`}
              width="100%"
              height="400"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full aspect-video"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default TestimonialCard 