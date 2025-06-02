import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Mission */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Image src="/images/kick-out-cancer-logo.png" alt="Kick Out Cancer logo" width={56} height={56} className="mb-2" />
          <p className="text-lg font-semibold text-yellow-400">Ensemble, mettons KO le cancer par le sport et la solidarité.</p>
        </div>

        {/* Menu rapide */}
        <nav aria-label="Menu rapide" className="flex flex-col gap-2">
          <span className="text-violet-300 font-bold mb-2">Navigation</span>
          <Link href="#hero" className="hover:text-yellow-400 transition">Accueil</Link>
          <Link href="#about" className="hover:text-yellow-400 transition">À propos</Link>
          <Link href="#event" className="hover:text-yellow-400 transition">Événements</Link>
          <Link href="#inscription" className="hover:text-yellow-400 transition">Inscription</Link>
          <Link href="#don" className="hover:text-yellow-400 transition">Faire un don</Link>
          <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        {/* Partenaires */}
        <div className="flex flex-col gap-2">
          <span className="text-violet-300 font-bold mb-2">Partenaires</span>
          <div className="flex items-center gap-4">
            <Image src="/images/ihu-prism-logo.png" alt="IHU PRISM" width={48} height={48} className="bg-white rounded p-1" />
            <Image src="/images/partners/gustave-roussy.png" alt="Gustave Roussy" width={48} height={48} className="bg-white rounded p-1" />
          </div>
          <span className="text-xs text-gray-400 mt-1">Avec le soutien de l'IHU PRISM et Gustave Roussy</span>
        </div>
      </div>

      {/* Réseaux sociaux & mentions */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-6">
        {/* Réseaux sociaux */}
        <div className="flex gap-4">
          <a href="https://facebook.com/kickoutcancer" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://instagram.com/kickoutcancer" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 5.998 2.334 6.407 2.334 12c0 5.593.013 6.002.072 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272 1.28.059 1.689.072 7.282.072s6.002-.013 7.282-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-7.282s-.013-6.002-.072-7.282c-.059-1.281-.291-2.393-1.272-3.374C19.393.363 18.281.131 17 .072 15.719.013 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
          </a>
          <a href="https://linkedin.com/company/kick-out-cancer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-yellow-400">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.062-1.867-3.062-1.868 0-2.154 1.459-2.154 2.967v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595zm-13.25-10h-.029c-.01 0-.021.001-.029.001v-.001h.058z"/></svg>
          </a>
          <a href="https://tiktok.com/@kickoutcancer" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-yellow-400">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 2.25v13.5a3.75 3.75 0 1 1-3.75-3.75h1.5a2.25 2.25 0 1 0 2.25 2.25V2.25h1.5a4.5 4.5 0 0 0 4.5 4.5v1.5a6 6 0 0 1-6-6z"/></svg>
          </a>
        </div>
        {/* Mentions légales et copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-400">
          <Link href="/mentions-legales" className="hover:text-yellow-400">Mentions légales</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/politique-confidentialite" className="hover:text-yellow-400">Politique de confidentialité</Link>
        </div>
        <div className="text-xs text-gray-500 text-center md:text-right w-full md:w-auto mt-2 md:mt-0">
          © 2025 Kick Out Cancer – Tous droits réservés.
        </div>
      </div>
    </footer>
  )
} 