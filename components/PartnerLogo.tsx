import Image from 'next/image'
import { motion } from 'framer-motion'

interface PartnerLogoProps {
  src: string
  alt: string
  tier?: 'bronze' | 'silver' | 'gold' | 'headline'
}

const PartnerLogo = ({ src, alt, tier = 'bronze' }: PartnerLogoProps) => {
  const tierStyles = {
    bronze: 'opacity-70 hover:opacity-100',
    silver: 'opacity-80 hover:opacity-100',
    gold: 'opacity-90 hover:opacity-100',
    headline: 'opacity-100'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-48 h-24 ${tierStyles[tier]}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  )
}

export default PartnerLogo 