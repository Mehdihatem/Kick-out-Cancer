import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/Button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function News() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Actualités</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Retrouvez toutes les actualités de l&#39;association Kick Out Cancer
        </p>
      </div>
    </main>
  )
} 