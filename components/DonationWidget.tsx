import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DonationWidget = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleIframeLoad = () => {
      setIsLoading(false)
    }

    const iframe = document.getElementById('helloasso-iframe') as HTMLIFrameElement
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad)
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad)
      }
    }
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-dark">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          id="helloasso-iframe"
          src={process.env.NEXT_PUBLIC_HELLOASSO_DON}
          className="w-full h-[800px] border-0"
          title="Faire un don à Kick Out Cancer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </div>
  )
}

export default DonationWidget 