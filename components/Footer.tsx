import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="#hero" className="inline-block mb-6">
              <Image
                src="/images/kick-out-cancer-logo.png"
                alt="Kick Out Cancer logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Transformons le mouvement en accélérateur de recherche et de prévention contre le cancer.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@kickoutcancer.fr" className="text-gray-400 hover:text-white transition-colors">
                  contact@kickoutcancer.fr
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Suivez-nous</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/kickoutcancer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/kick-out-cancer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kick Out Cancer. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 